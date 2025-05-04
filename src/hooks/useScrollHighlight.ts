import { useEffect, useState } from "react";

const sections = ["home", "services", "about", "faq"];

export const useScrollHighlight = (pathname: string) => {
  const [activeHash, setActiveHash] = useState(pathname === "/" ? "home" : "");

  useEffect(() => {
    if (pathname !== "/") return;

    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        let closestSection = "";
        let minDistance = Infinity;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            if (distance < minDistance && rect.top <= window.innerHeight * 0.5) {
              minDistance = distance;
              closestSection = section;
            }
          }
        }

        if (closestSection && closestSection !== activeHash) {
          setActiveHash(closestSection);
          window.history.replaceState(null, "", `/#${closestSection}`);
        } else if (!closestSection && window.scrollY < 50 && activeHash !== "home") {
          setActiveHash("home");
          window.history.replaceState(null, "", "/#home");
        }
      }, 50); // 50ms debounce for responsiveness
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname, activeHash]);

  return { activeHash, setActiveHash };
};