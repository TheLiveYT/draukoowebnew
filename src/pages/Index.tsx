import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, CheckCircle, Users, Pickaxe, Coins, Map, ArrowRight, Sparkles, Zap, Star, Crown, Compass, Mountain, Trees, Globe } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const serverIP = "mc.draukoo.eu";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast({
      title: "Server IP Copied!",
      description: "Ready to start your exploration journey!",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const generateParticles = () => {
    return Array.from({ length: 30 }, (_, i) => (
      <div
        key={i}
        className="particle enhanced-particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${20 + Math.random() * 10}s`
        }}
      />
    ));
  };

  const features = [
    {
      icon: Compass,
      title: "Endless Exploration",
      description: "Discover uncharted territories with our custom world generation designed for true explorers",
      delay: "0ms",
      gradient: "from-green-500 to-emerald-600",
      side: "left"
    },
    {
      icon: Mountain,
      title: "Epic Landscapes",
      description: "Traverse massive mountain ranges, deep caves, and hidden valleys in our exploration-focused worlds",
      delay: "200ms",
      gradient: "from-emerald-600 to-teal-500",
      side: "right"
    },
    {
      icon: Trees,
      title: "Rich Ecosystems",
      description: "Experience diverse biomes filled with unique creatures, resources, and environmental challenges",
      delay: "400ms",
      gradient: "from-teal-500 to-green-600",
      side: "left"
    },
    {
      icon: Globe,
      title: "Community Expeditions",
      description: "Join fellow explorers on organized expeditions to discover rare locations and hidden treasures",
      delay: "600ms",
      gradient: "from-green-600 to-emerald-500",
      side: "right"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop"
  ];

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background smooth-scroll overflow-hidden">
      <Header />
      
      {/* Hero Section with Enhanced Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
        {/* Enhanced multi-layer parallax backgrounds */}
        <div 
          className="absolute inset-0 opacity-50 main-bg-image"
          style={{
            transform: `translateY(${scrollY * 0.7}px) scale(${1 + scrollY * 0.0008})`,
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
        </div>
        
        <div 
          className="absolute inset-0 opacity-30 secondary-bg"
          style={{
            transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0005})`,
            backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Enhanced dynamic gradient orbs - more subtle and frosted */}
        <div 
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-white/8 to-gray-200/4 rounded-full blur-3xl animate-pulse-slow floating-orb"
          style={{ 
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.015}px) rotate(${scrollY * 0.15}deg) scale(${1 - scrollY * 0.0003})`,
            filter: 'saturate(0.3) brightness(0.6) blur(25px)'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-green-500/8 to-gray-300/5 rounded-full blur-3xl animate-pulse-slow floating-orb"
          style={{ 
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.02}px) rotate(${-scrollY * 0.15}deg) scale(${1 - scrollY * 0.0002})`,
            filter: 'saturate(0.4) brightness(0.5) blur(25px)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/6 to-white/3 rounded-full blur-3xl animate-float floating-orb"
          style={{ 
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) scale(${1 + scrollY * 0.0002})`,
            filter: 'saturate(0.3) brightness(0.4) blur(30px)'
          }}
        ></div>
        
        {/* Enhanced moving particles */}
        <div className="moving-particles">
          {generateParticles()}
        </div>
        
        {/* Enhanced grid pattern */}
        <div 
          className="absolute inset-0 opacity-5 grid-overlay"
          style={{ 
            transform: `translateY(${scrollY * 1.1}px) rotate(${scrollY * 0.03}deg)`,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
            backgroundSize: '80px 80px',
            filter: 'saturate(0.5)'
          }}
        ></div>
        
        <div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto hero-content"
          style={{
            transform: `translateY(${scrollY * 0.25}px) scale(${1 - scrollY * 0.0004})`
          }}
        >
          {/* Enhanced floating status badge */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center space-x-3 glass rounded-full px-10 py-5 mb-10 group hover:scale-110 transition-all duration-700 shadow-2xl status-badge border border-white/20">
              <div className="relative">
                <Compass className="w-6 h-6 text-emerald-400 animate-spin" style={{animationDuration: '8s'}} />
                <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-40 animate-ping"></div>
              </div>
              <span className="text-white/90 text-xl font-semibold tracking-wide">Exploration Server • 342 Adventurers Online</span>
              <Mountain className="w-5 h-5 text-emerald-400 animate-bounce" />
            </div>
            
            {/* OpenWilds Logo Image replacing text */}
            <div className="mb-10 flex justify-center">
              <img 
                src="/lovable-uploads/e9762dfc-7b09-4289-8d1c-d7f79dccf085.png" 
                alt="OpenWilds Logo"
                className="h-32 md:h-48 lg:h-56 w-auto object-contain filter drop-shadow-2xl animate-pulse-slow"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(52, 211, 153, 0.5)) brightness(1.1) saturate(1.2)'
                }}
              />
            </div>
            
            {/* Enhanced subtitle */}
            <div className="mb-14">
              <p className="text-3xl md:text-5xl mb-6 text-white/95 font-light tracking-wide main-subtitle">
                Discover the Unknown
              </p>
              <div className="flex justify-center items-center space-x-8 text-white/80 flex-wrap gap-3 feature-badges">
                <div className="flex items-center space-x-3 glass px-4 py-2 rounded-full border border-white/20">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">Infinite Worlds</span>
                </div>
                <div className="flex items-center space-x-3 glass px-4 py-2 rounded-full border border-white/20">
                  <Users className="w-6 h-6" />
                  <span className="text-lg">Explorer Community</span>
                </div>
                <div className="flex items-center space-x-3 glass px-4 py-2 rounded-full border border-white/20">
                  <Zap className="w-6 h-6" />
                  <span className="text-lg">Epic Adventures</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modern glassmorphism IP connection card */}
          <div className="glass-modern rounded-3xl p-12 inline-block animate-slide-up border border-white/20 hover-lift group relative overflow-hidden shadow-2xl connection-card" style={{animationDelay: '400ms'}}>
            {/* Enhanced animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-emerald-400 animate-pulse-slow filter saturate-50"></div>
            </div>
            
            <div className="relative z-10">
              <p className="text-3xl mb-10 text-white/90 font-semibold">Begin Your Journey:</p>
              <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
                <div className="relative group/ip">
                  <div className="flex items-center glass-ip-box rounded-2xl border border-white/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                    <code className="text-4xl md:text-5xl font-mono px-12 py-8 text-white/95 tracking-wider flex-1">
                      {serverIP}
                    </code>
                    <button 
                      onClick={copyToClipboard}
                      className="px-6 py-8 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 border-l border-white/20"
                    >
                      {copied ? <CheckCircle className="w-7 h-7" /> : <Copy className="w-7 h-7" />}
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl opacity-0 group-hover/ip:opacity-100 transition-all duration-500 blur-md pointer-events-none"></div>
                  <div className="absolute -top-3 -right-3">
                    <div className="w-5 h-5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/60"></div>
                  </div>
                </div>
              </div>
              {copied && (
                <p className="text-emerald-300 mt-6 text-xl animate-fade-in">
                  Ready to Explore! 🚀
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced green bar at bottom with better positioning */}
        <div 
          className="absolute bottom-8 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent transition-all duration-1000 black-bar"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scaleX(${Math.max(0.3, 1 - scrollY * 0.001)})`,
            opacity: Math.max(0.3, 1 - scrollY * 0.002),
            filter: 'blur(1px) saturate(1.5)'
          }}
        >
          <div className="absolute inset-0 bg-emerald-400/30 blur-sm"></div>
        </div>
      </section>

      {/* Features Section with glass design */}
      <section className="py-40 px-6 relative">
        <div 
          className="moving-background opacity-10"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        ></div>
        
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-32">
            <h2 
              className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 mb-10 tracking-tight animate-slide-up filter saturate-150"
              style={{
                transform: `translateY(${Math.max(0, scrollY - 800) * 0.12}px)`
              }}
            >
              Exploration works the way
              <br />
              <span className="text-emerald-500">you want to explore</span>
            </h2>
            <p 
              className="text-3xl text-white/90 max-w-4xl mx-auto font-light"
              style={{
                transform: `translateY(${Math.max(0, scrollY - 900) * 0.18}px)`
              }}
            >
              Every feature designed to enhance your discovery journey and create unforgettable adventures
            </p>
          </div>
          
          <div className="space-y-32">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center gap-20 ${feature.side === 'right' ? 'flex-row-reverse' : 'flex-row'} max-w-7xl mx-auto feature-row`}
                style={{
                  transform: `translateY(${Math.max(0, scrollY - (1200 + index * 300)) * 0.12}px) scale(${Math.min(1, 0.85 + (Math.max(0, scrollY - (1200 + index * 300))) * 0.001)})`
                }}
              >
                <div className="flex-1">
                  <Card className="glass border-white/20 hover-lift hover-glow group overflow-hidden transform hover:scale-110 transition-all duration-700 shadow-2xl feature-card">
                    <CardContent className="p-14 relative z-10">
                      <div className="relative mb-10">
                        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-lg`}></div>
                        <feature.icon className="w-24 h-24 text-emerald-400 group-hover:scale-130 transition-all duration-500 relative z-10 filter saturate-150" />
                      </div>
                      <h3 className="text-4xl font-bold mb-8 text-white/90 group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-xl">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex-1">
                  <div 
                    className="relative overflow-hidden rounded-3xl aspect-video shadow-2xl transform group hover:scale-110 transition-all duration-700 feature-image border border-white/20"
                  >
                    <img 
                      src={galleryImages[index]} 
                      alt={`${feature.title} showcase`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-500/40 opacity-70"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview with glass design */}
      <section className="py-40 px-6 relative">
        <div 
          className="moving-background opacity-10"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        ></div>
        
        <div className="max-w-8xl mx-auto relative z-10">
          <div 
            className="text-center mb-28"
            style={{
              transform: `translateY(${Math.max(0, scrollY - 2500) * 0.12}px)`
            }}
          >
            <h2 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-400 mb-10 tracking-tight animate-slide-up filter saturate-150">
              Epic Discoveries
            </h2>
            <p className="text-3xl text-white/90 font-light animate-slide-up max-w-4xl mx-auto" style={{animationDelay: '200ms'}}>
              Witness the incredible landscapes and hidden treasures found by our exploration community
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20"
            style={{
              transform: `translateY(${Math.max(0, scrollY - 2700) * 0.08}px)`
            }}
          >
            {galleryImages.slice(0, 6).map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-3xl aspect-video hover-lift group animate-slide-up transform hover:scale-110 transition-all duration-700 shadow-2xl gallery-item border border-white/20"
                style={{
                  animationDelay: `${400 + index * 150}ms`,
                  transform: `translateY(${Math.max(0, scrollY - (2800 + index * 100)) * 0.1}px) scale(${Math.min(1, 0.9 + (Math.max(0, scrollY - (2800 + index * 100))) * 0.0008)})`
                }}
              >
                <img 
                  src={image} 
                  alt={`Epic exploration discovery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
                  <h4 className="text-white font-bold text-2xl mb-3">Discovery #{index + 1}</h4>
                  <p className="text-emerald-300 text-lg">Exploration Masterpiece</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fixed button positioning with glass design */}
          <div 
            className="text-center animate-slide-up mt-16"
            style={{
              animationDelay: '1200ms',
              transform: `translateY(${Math.max(0, scrollY - 3200) * 0.12}px)`
            }}
          >
            <Button asChild size="lg" className="glass-button border border-white/30 px-14 py-10 text-2xl rounded-2xl hover-glow group transform hover:scale-110 transition-all duration-500 shadow-2xl relative z-10">
              <a href="/gallery" className="inline-flex items-center text-white/90 hover:text-white">
                <span className="font-bold">Explore Full Gallery</span>
                <ArrowRight className="w-7 h-7 ml-5 group-hover:translate-x-3 transition-transform duration-500" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
