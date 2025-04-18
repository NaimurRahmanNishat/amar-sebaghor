"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if window is defined (to avoid SSR issues)
  const isBrowser = typeof window !== "undefined";

  // Function to check scroll position and update button visibility
  const checkScrollPosition = () => {
    if (!isBrowser) return;
    
    const scrollThreshold = 20;
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    
    setIsVisible(currentScrollPos > scrollThreshold);
  };

  // Scroll to top function
  const scrollToTop = () => {
    if (!isBrowser) return;
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isBrowser) return;
    
    // Add scroll event listener
    window.addEventListener("scroll", checkScrollPosition);
    
    // Check initial scroll position
    checkScrollPosition();
    
    // Clean up event listener
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [isBrowser]);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 z-50 p-3 rounded-full bg-lightGreen text-primary-foreground shadow-lg transition-all duration-300",
        "hover:bg-lightGreen/80 cursor-pointer focus:outline-none",
        "md:bottom-8 md:right-8 md:p-4",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
}