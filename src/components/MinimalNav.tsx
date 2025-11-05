import { useState, useEffect } from "react";

const navItems = [
  { name: "HOME", href: "#" },
  { name: "WORKS", href: "#works" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
];

interface MinimalNavProps {
  onHoverSection: (section: string | null) => void;
}

export const MinimalNav = ({ onHoverSection }: MinimalNavProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-6">
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onMouseEnter={() => onHoverSection(item.name.toLowerCase())}
            onMouseLeave={() => onHoverSection(null)}
            className="editorial-text text-[10px] md:text-xs text-foreground hover:text-muted-foreground transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
