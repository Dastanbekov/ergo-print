import React, { useState } from 'react';
import { Box, Layers, Sparkles, Menu, X, ArrowRight } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-green-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <Box className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight">ErgoPrint 3D</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <a href="#gallery" className="hover:text-green-400 transition-colors">Gallery</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
          </div>

          <button className="hidden md:flex bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(74,222,128,0.4)]">
            Buy Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Next Gen Ergonomics
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Craft Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Perfect Setup</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Revolutionary 3D-printed stands and accessories engineered for maximum comfort. 
              Minimalist design, industrial durability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                Shop Collection <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all">
                Custom Order
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-950 flex items-center justify-center text-xs">👤</div>
                ))}
              </div>
              <p>Trusted by 1000+ developers</p>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-3xl blur-2xl group-hover:bg-green-500/30 transition-all duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur shadow-2xl">
              {/* Убедись, что картинка называется hero-product.png и лежит в папке public */}
              <img 
                src="/hero-product.png" 
                alt="3D Printed Stand" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {e.target.style.display='none'; e.target.parentElement.innerHTML='<div class="p-20 text-center text-gray-500">Image not found<br/>Put <b>hero-product.png</b> in public folder</div>'}}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why ErgoPrint?</h2>
            <p className="text-gray-400">Precision engineering meets modern aesthetic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Lightweight Structure", desc: "Honeycomb infill pattern creates featherlight yet rock-solid structure." },
              { icon: Box, title: "Industrial Material", desc: "Printed with reinforced PETG and Carbon Fiber composites." },
              { icon: Sparkles, title: "Custom Fit", desc: "Parametric design adapted to your specific device dimensions." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-950 border border-white/5 hover:border-green-500/50 transition-all group">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Product Gallery */}
      <section id="gallery" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Drops</h2>
                <p className="text-gray-400">Fresh from the print bed.</p>
             </div>
             {/* ИСПРАВЛЕННАЯ СТРОКА НИЖЕ */}
             <a href="#" className="text-green-400 hover:text-green-300 font-medium hidden md:block">
               View all products &rarr;
             </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-square bg-gray-900 rounded-xl overflow-hidden border border-white/10">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
               <img src="/hero-product.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Product" />
               <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-bold text-lg">CyberDeck Stand</h3>
                  <p className="text-green-400">$49.99</p>
               </div>
            </div>
             {/* Gallery Item 2 */}
            <div className="group relative aspect-square bg-gray-800 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
               <Layers className="w-12 h-12 text-gray-700" />
               <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-bold text-lg">Neon Wrist Rest</h3>
                  <p className="text-green-400">$29.99</p>
               </div>
            </div>
             {/* Gallery Item 3 */}
            <div className="group relative aspect-square bg-gray-800 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
               <Box className="w-12 h-12 text-gray-700" />
               <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="font-bold text-lg">Headphone Mount</h3>
                  <p className="text-green-400">$19.99</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-gray-950 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <Box className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold">ErgoPrint 3D</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 AI Stack Project. Built by You.</p>
        </div>
      </footer>
    </div>
  );
}