import styles from "./Contact.module.css";

const LINKS = [
  {
    icon: "in",
    label: "LinkedIn",
    description: "You can contact me on LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: "N",
    label: "Notion",
    description: "You can see some projects in Notion",
    href: "https://notion.so",
  },
  {
    icon: "✦",
    label: "Figma",
    description: "If you like it you can duplicate it in Figma",
    href: "https://figma.com",
  },
];

export default function Contact() {
  return (
    <footer className={styles.footer}>
      {/* Decorative divider */}
      <div className={styles.divider} aria-hidden="true" />

      <div className={styles.linksGrid}>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <div className={styles.iconBox}>
              <span className={styles.iconText}>{link.icon}</span>
            </div>
            <p className={styles.linkDesc}>{link.description}</p>
          </a>
        ))}
      </div>
    </footer>
  );
}
