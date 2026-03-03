import styles from "./Welcome.module.css";

// Figma asset URLs (expire in 7 days — replace with your own images)
const AVATAR_BG =
  "https://www.figma.com/api/mcp/asset/1d1a675c-4056-4e3d-9ff5-4dfb833414ac";
const AVATAR_FACE =
  "https://www.figma.com/api/mcp/asset/661ecf86-ceb3-4481-a291-8dc018e851c4";
const AVATAR_DETAIL =
  "https://www.figma.com/api/mcp/asset/4037f3f8-3c7a-43f3-baab-100b67a23a8e";
const FLOURISH =
  "https://www.figma.com/api/mcp/asset/74f6875d-1d4e-4ca7-8804-98bfedba9af5";

function Avatar() {
  return (
    <div className={styles.avatarWrapper}>
      <img src={AVATAR_BG} alt="" className={styles.avatarBg} />
      <img src={AVATAR_FACE} alt="Avatar" className={styles.avatarFace} />
      <img src={AVATAR_DETAIL} alt="" className={styles.avatarDetail} />
    </div>
  );
}

export default function Welcome() {
  return (
    <section className={styles.section}>
      <Avatar />
      <h1 className={styles.headline}>
        <span>Mamaste! I&apos;m Ashish.</span>
        <span>The Design Engineer.</span>
      </h1>
      <div className={styles.flourishWrapper}>
        <img src={FLOURISH} alt="" className={styles.flourish} />
      </div>
    </section>
  );
}
