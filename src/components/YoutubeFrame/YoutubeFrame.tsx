import styles from "./YoutubeFrame.module.css";

interface YoutubeFrameProps {
  videoId: string;
  caption?: string;
  rotate?: number;
}

export default function YoutubeFrame({
  videoId,
  caption,
  rotate = -3,
}: YoutubeFrameProps) {
  return (
    <div
      className={styles.polaroid}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          title={caption ?? "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
