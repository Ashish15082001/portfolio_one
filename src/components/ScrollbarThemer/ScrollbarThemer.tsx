"use client";
import { useEffect } from "react";

const SECTION_THEMES: Record<string, [string, string]> = {
  welcome: ["#8c67f5", "#d094ff"],
  skills: ["#ffe597", "#aaff82"],
  myjourney: ["#6cbaff", "#d8f4ff"],
  education: ["#6cbaff", "#d8f4ff"],
  myhobbies: ["#9bf7ff", "#9cff85"],
  experience: ["#ffad60", "#ff5a6b"],
  personalprojects: ["#b9fd99", "#ffc764"],
  today: ["#ffd69a", "#ff8f7f"],
};

export function ScrollbarThemer() {
  useEffect(() => {
    const ratios = new Map<string, number>();

    const updateScrollbar = () => {
      let max = -1;
      let active = "";
      ratios.forEach((ratio, id) => {
        if (ratio > max) {
          max = ratio;
          active = id;
        }
      });
      if (active && SECTION_THEMES[active]) {
        const [c1, c2] = SECTION_THEMES[active];
        document.documentElement.style.setProperty("--scrollbar-color-1", c1);
        document.documentElement.style.setProperty("--scrollbar-color-2", c2);
      }
    };

    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-theme-section") ?? "";
          if (id) ratios.set(id, entry.intersectionRatio);
        });
        updateScrollbar();
      },
      { threshold: thresholds },
    );

    document.querySelectorAll("[data-theme-section]").forEach((el) => {
      const id = el.getAttribute("data-theme-section") ?? "";
      ratios.set(id, 0);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
