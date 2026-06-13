"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./ThankYouModal.module.css";

interface Props {
  onClose: () => void;
}

export default function ThankYouModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!name.trim()) return;
    setSubmitted(true);
    setTimeout(onClose, 2200);
  }

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
        >
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ✕
          </button>

          {submitted ? (
            <>
              <h2 className={styles.heading}>You&apos;re awesome! 🎉</h2>
              <p className={styles.successText}>
                Thanks for stopping by, <strong>{name}</strong>. I appreciate it — catch you around!
              </p>
            </>
          ) : (
            <>
              <h2 className={styles.heading}>Thank you!</h2>
              <p className={styles.subtext}>
                You made it to the end — I appreciate you taking the time. Who&apos;s dropping by?
              </p>

              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Your name or company"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  autoFocus
                />
                <button className={styles.submitBtn} onClick={handleSubmit}>
                  Say hello 👋
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
