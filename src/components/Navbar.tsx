
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="text-2xl font-serif font-bold text-primary">
          Galu Beach Resort
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={cn(scrolled ? "text-primary" : "text-white")}
          >
            {mobileMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {['Rooms', 'Dining', 'Facilities', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium transition-colors hover:text-primary",
                scrolled ? "text-gray-800" : "text-white hover:text-white/80"
              )}
            >
              {item}
            </a>
          ))}
          <Button 
            variant={scrolled ? "default" : "outline"} 
            className={cn(!scrolled && "text-white border-white hover:bg-white hover:text-primary")}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden md:hidden",
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        )}>
          <div className="flex flex-col p-4">
            {['Rooms', 'Dining', 'Facilities', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="py-2 text-gray-800 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="mt-4">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
