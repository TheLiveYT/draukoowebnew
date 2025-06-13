import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Home, Users, Link, Image, MessageSquare, Store } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Explore", href: "#explore", icon: Users },
    { name: "Join Server", href: "/join", icon: Link },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Discord", href: "#discord", icon: MessageSquare },
    { name: "Store", href: "#store", icon: Store },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrollY > 50 
        ? 'backdrop-blur-xl bg-black/80 border-b border-green-500/20 shadow-2xl' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* OpenWilds Logo and Branding */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="relative h-12 group-hover:scale-110 transition-all duration-500">
                {/* OpenWilds Logo Image */}
                <img 
                  src="/lovable-uploads/e9762dfc-7b09-4289-8d1c-d7f79dccf085.png" 
                  alt="OpenWilds"
                  className={`h-12 w-auto object-contain transition-all duration-500 ${
                    scrollY > 50 ? 'filter brightness-90' : 'filter brightness-100'
                  }`}
                  style={{
                    filter: scrollY > 50 
                      ? 'brightness(0.9) saturate(1.1)' 
                      : 'brightness(1) saturate(1.2) drop-shadow(0 0 10px rgba(52, 211, 153, 0.3))'
                  }}
                />
                
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg animate-pulse-slow pointer-events-none"></div>
                
                {/* Floating particles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.1s'}}></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.3s'}}></div>
                <div className="absolute top-0 -left-2 w-1 h-1 bg-teal-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
                OpenWilds
              </span>
              <span className="text-xs text-green-400/60 font-mono tracking-wider">
                Explore • Discover • Build
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 bg-black/30 backdrop-blur-xl rounded-2xl p-2 border border-green-500/20 shadow-2xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-green-300 hover:text-white transition-all duration-500 font-medium text-sm tracking-wide rounded-xl group overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-emerald-500/30 to-green-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                {/* Icon and text */}
                <div className="relative flex items-center space-x-2 z-10">
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.name}</span>
                </div>
                
                {/* Bottom border effect */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-700"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-green-500/10 blur-sm"></div>
              </a>
            ))}
          </nav>

          {/* Enhanced Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300 hover:bg-green-950/30 rounded-xl border border-green-500/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] backdrop-blur-xl bg-black/90 border-green-500/30">
              <div className="flex flex-col space-y-2 mt-12">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-4 text-green-300 hover:text-green-400 transition-all duration-300 p-4 rounded-xl hover:bg-green-950/30 group animate-slide-in-right border border-transparent hover:border-green-500/20"
                    style={{animationDelay: `${index * 100}ms`}}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-lg">{item.name}</span>
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
