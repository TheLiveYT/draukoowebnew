
const Footer = () => {
  const serverIP = "mc.draukoo.eu";
  
  return (
    <footer className="glass-green border-t border-green-900/30 py-20 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-slide-in-left">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-green">
                  <div className="w-5 h-5 bg-black rounded-sm"></div>
                </div>
                <div className="absolute inset-0 bg-green-500 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
              </div>
              <span className="text-2xl font-bold text-gradient">mc.draukoo.eu</span>
            </div>
            <p className="text-green-300/80 leading-relaxed">
              The ultimate Minecraft exploration server with custom worlds, community features, and endless adventures.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-xl font-semibold mb-6 text-green-300">Quick Links</h3>
            <ul className="space-y-3 text-green-400/70">
              <li><a href="/" className="hover:text-green-300 transition-colors duration-300 hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="/join" className="hover:text-green-300 transition-colors duration-300 hover:translate-x-1 inline-block">Join Server</a></li>
              <li><a href="/gallery" className="hover:text-green-300 transition-colors duration-300 hover:translate-x-1 inline-block">Gallery</a></li>
              <li><a href="#discord" className="hover:text-green-300 transition-colors duration-300 hover:translate-x-1 inline-block">Discord</a></li>
            </ul>
          </div>
          
          <div className="animate-slide-in-right" style={{animationDelay: '400ms'}}>
            <h3 className="text-xl font-semibold mb-6 text-green-300">Server Info</h3>
            <div className="text-green-400/70 space-y-3">
              <p>Server IP: <span className="text-green-400 font-mono bg-black/30 px-2 py-1 rounded">{serverIP}</span></p>
              <p>Version: Java Edition 1.20+</p>
              <p>Status: <span className="text-green-400 inline-flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Online
              </span></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-900/30 mt-16 pt-8 text-center">
          <p className="text-green-400/60">&copy; 2024 mc.draukoo.eu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
