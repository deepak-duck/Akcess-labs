import { useEffect, RefObject } from "react";

export const useFocusTrap = (
  isActive: boolean,
  menuRef: RefObject<HTMLElement>,
  toggleRef: RefObject<HTMLButtonElement>,
  onClose: () => void
) => {
  useEffect(() => {
    if (!isActive) return;

    const menuFocusable =
      menuRef.current?.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      ) || [];
    const focusableElements = [
      toggleRef.current,
      ...menuFocusable,
    ].filter((el): el is HTMLElement => Boolean(el));
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) {
      firstElement.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        toggleRef.current?.focus();
        return;
      }

      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, menuRef, toggleRef, onClose]);
};