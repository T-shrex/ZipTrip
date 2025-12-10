import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Compass, Plane, Hotel, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onStartPlanning: () => void;
}

const Navbar = ({ onStartPlanning }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "AI Assistant", icon: Sparkles },
    { label: "Smart Itinerary", icon: Compass },
    { label: "Flights", icon: Plane },
    { label: "Hotels", icon: Hotel },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${isScrolled ? "bg-teal" : "bg-teal"}`}>
            <Compass className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className={`font-display text-xl font-bold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Wanderlust
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase().replace(" ", "-")}`}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 ${
                isScrolled ? "text-foreground hover:text-coral" : "text-primary-foreground/90"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            className={`${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            Sign In
          </Button>
          <Button
            variant="teal"
            onClick={onStartPlanning}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border/20 bg-card/95 px-4 py-6 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase().replace(" ", "-")}`}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-foreground hover:bg-muted hover:text-coral"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start">
                Sign In
              </Button>
              <Button variant="teal" onClick={onStartPlanning}>
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
