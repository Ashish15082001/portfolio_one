"use client";

import { useEffect, useState } from "react";
import styles from "./SpringAnimation.module.css";

/**
 * The 16 anchor y-values of the spring path:
 *   index 0  → start point
 *   index 1–15 → endpoint of each cubic bezier segment
 *
 * All control-point coordinates are held constant so the overall
 * spring shape stays recognisable; only the anchor y-values are
 * perturbed to simulate a slightly different redraw each frame.
 */
const BASE_Y = [
  70.3467, 32.102, 47.1822, 89.0026, 38.6316, 10.6477, 72.8341, 86.826, 7.07198,
  10.3368, 70.0357, 118.152, 104.86, 61.796, 28.9927, 67.5483,
] as const;

/**
 * 10 hand-drawn variant offset sets.
 * Each value is added to the corresponding BASE_Y entry (±1–3 px).
 * Offsets are distributed unevenly so each "redraw" looks organically
 * different rather than a uniform shift.
 */
const OFFSETS: ReadonlyArray<readonly number[]> = [
  /* v1  – original */
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  /* v2  – gentle ripple */
  [
    1.5, -1.2, 2.0, 1.8, -1.5, 1.2, -0.8, 2.2, -1.8, 1.5, 0.9, -1.5, 1.8, -0.8,
    1.2, 1.4,
  ],
  /* v3  – broad counter-ripple */
  [
    -2.0, 1.8, -1.5, -2.2, 2.0, -1.8, 1.5, -1.2, 2.2, -1.0, 1.5, 2.0, -1.0, 1.5,
    -1.8, -1.6,
  ],
  /* v4  – arched upper */
  [
    2.2, -2.0, 1.2, 2.5, -2.5, 2.0, -1.8, 1.0, -2.0, 1.8, -1.2, -2.2, 2.5, -2.0,
    2.0, 2.3,
  ],
  /* v5  – jittery small oscillations */
  [
    -1.0, 2.5, -2.5, 1.0, 1.5, -2.5, 2.5, -2.5, 1.5, -2.5, 2.5, 1.0, -2.5, 2.5,
    -1.0, -0.8,
  ],
  /* v6  – light brush */
  [
    0.8, -0.8, 1.8, -1.8, -1.2, 0.8, 1.2, 2.5, -0.8, 2.0, -1.8, 1.5, 0.8, -1.5,
    0.8, 1.0,
  ],
  /* v7  – wide arcs */
  [
    -2.5, 1.2, -0.8, 2.8, 2.2, 1.5, -2.2, -0.8, 2.8, -0.8, -2.5, -2.8, 1.5, 2.0,
    -2.5, -2.2,
  ],
  /* v8  – left lean */
  [
    1.0, -2.2, 2.5, -1.5, -0.8, -1.2, 1.8, 1.5, -2.5, 1.2, 1.5, 2.5, -1.8, -1.0,
    1.5, 1.2,
  ],
  /* v9  – right lean + lower peaks */
  [
    -1.5, 2.0, -1.8, 1.5, 1.8, 2.5, -1.5, -1.5, 1.0, -2.2, -0.8, -1.0, 2.2, 1.2,
    -2.2, -2.0,
  ],
  /* v10 – bold + compressed */
  [
    2.0, -1.5, 1.0, -2.5, -0.5, -2.0, 2.0, 2.0, -1.5, 2.5, 2.0, 1.8, -0.5, -2.5,
    1.8, 1.6,
  ],
];

/** Build the SVG path `d` string for a given offset set. */
function buildPath(offsets: readonly number[]): string {
  const y = BASE_Y.map((v, i) => +(v + offsets[i]).toFixed(4));
  return (
    `M1.5 ${y[0]}` +
    `C9.87074 44.0799 33.0848 33.0597 60.4216 ${y[1]}` +
    `C85.9565 31.2075 115.826 38.9197 139.709 ${y[2]}` +
    `C258.549 88.296 133.048 175.883 140.331 ${y[3]}` +
    `C142.053 68.4672 153.582 53.552 166.76 ${y[4]}` +
    `C186.634 16.1297 207.271 12.7477 236.565 ${y[5]}` +
    `C287.879 6.9692 325.58 22.692 352.698 ${y[6]}` +
    `C379.929 123.186 317.217 120.903 317.718 ${y[7]}` +
    `C318.113 59.9347 350.602 15.417 378.35 ${y[8]}` +
    `C403.174 -0.393952 447.06 -1.33817 471.707 ${y[9]}` +
    `C494.822 21.2859 511.458 48.5283 523.866 ${y[10]}` +
    `C531.563 83.3779 534.878 104.711 525.187 ${y[11]}` +
    `C503.43 148.333 459.773 145.404 461.835 ${y[12]}` +
    `C462.609 89.6426 473.838 72.9855 483.6 ${y[13]}` +
    `C494.28 49.5552 504.267 39.2933 520.601 ${y[14]}` +
    `C589.272 -14.3128 699.534 35.2538 724.883 ${y[15]}`
  );
}

// Pre-computed outside the component — never regenerated on re-renders.
const PATHS = OFFSETS.map(buildPath);

export function SpringAnimation() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % PATHS.length);
    }, 100); // 1000 ms / 100 ms = 20 fps
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.wrapper}>
      <svg
        width="727"
        height="140"
        viewBox="0 0 727 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d={PATHS[frame]}
          stroke="url(#springGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="springGrad"
            x1="638.994"
            y1="69.9386"
            x2="1.5"
            y2="69.9386"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DBA6F4" />
            <stop offset="1" stopColor="#A981FE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
