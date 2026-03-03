import { motion } from "motion/react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function DotNav() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Adjust to trigger in middle of screen
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveTab(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Navigation (Vertical on the Left) */}
      <div className="fixed left-8 md:left-12 top-0 bottom-0 z-50 hidden md:flex justify-center">
        {/* Full Page Vertical Line */}
        <div className={`w-[1px] h-full transition-colors duration-500 ${activeTab === "home" ? "bg-white/10" : "bg-black/5"}`} />
        
        {/* Dots Container */}
        <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <DotItem key={item.id} item={item} activeTab={activeTab} isMobile={false} />
          ))}
        </div>
      </div>

      {/* Mobile Navigation (Horizontal at the Bottom) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center justify-center p-4 rounded-full bg-black/5 backdrop-blur-md border border-black/5 gap-6">
        {navItems.map((item) => (
          <DotItem key={item.id} item={item} activeTab={activeTab} isMobile={true} />
        ))}
      </div>
    </>
  );
}

function DotItem({ item, activeTab, isMobile }: { item: typeof navItems[0], activeTab: string, isMobile: boolean }) {
  return (
    <a
      href={`#${item.id}`}
      className="group relative flex items-center justify-center p-2"
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {/* Tooltip (Desktop Only) */}
      {!isMobile && (
        <span 
          className={`absolute left-10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-[10px] md:text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap shadow-xl ${
            activeTab === "home"
              ? "bg-white/90 text-black"
              : "bg-black/90 text-white"
          }`}
        >
          {item.label}
        </span>
      )}

      {/* Dot Container */}
      <div className="relative flex items-center justify-center">
         {/* Active Ring */}
        {activeTab === item.id && (
          <motion.div
            layoutId={isMobile ? "activeRingMobile" : "activeRingDesktop"}
            className={`absolute inset-[-6px] rounded-full border ${
              activeTab === "home" && !isMobile ? "border-white/40" : "border-black/20"
            }`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        {/* Main Dot with Glow */}
        <motion.div
          className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full border transition-all duration-500 ${
            activeTab === item.id
              ? activeTab === "home" && !isMobile
                ? "bg-white border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"
                : "bg-black border-black shadow-[0_0_15px_rgba(0,0,0,0.3)] animate-pulse"
              : activeTab === "home" && !isMobile
                ? "bg-white/20 border-transparent group-hover:bg-white/50 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]" 
                : "bg-black/10 border-transparent group-hover:bg-black/30 group-hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]"
          }`}
           animate={{
             scale: activeTab === item.id ? 1.2 : 1,
           }}
        />
      </div>
    </a>
  );
}
