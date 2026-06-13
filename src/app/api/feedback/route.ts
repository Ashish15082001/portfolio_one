import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, company, feedback } = await req.json();

  if (!name?.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["ashusingh15082001@gmail.com"],
    subject: `Portfolio visit from ${name}${company ? ` — ${company}` : ""}`,
    html: `
      <h2>New portfolio visitor</h2>
      <p><strong>Name:</strong> ${name}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${feedback ? `<p><strong>Feedback:</strong><br/>${feedback.replace(/\n/g, "<br/>")}</p>` : "<p><em>No feedback left.</em></p>"}
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
