import React from 'react';
import { Shield, Diamond, Beaker, Leaf, CheckCircle2, Hexagon, Activity } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="min-h-screen relative pointer-events-auto bg-transparent z-10">
      
      {/* Hero Section */}
      <div className="pt-40 pb-20 flex flex-col items-center justify-center text-center px-6">
        <div className="border border-[#0057FF]/30 text-[#0057FF] text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8">
          Our Story
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-widest mb-6">
          Engineered
        </h1>
        <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
          {'{[DATA:DOCUMENT:DOCUMENT_8]}'}
        </p>
      </div>

      {/* The Vision */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-stretch">
        <div className="bg-[#111318] p-10 md:p-14 rounded border border-white/5 flex flex-col justify-center relative overflow-hidden group hover:border-white/10 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1a1d24] opacity-50 pointer-events-none" />
          <div className="text-[#0057FF] mb-8 relative z-10">
            <Shield strokeWidth={1.5} size={32} />
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6 relative z-10">The Vision</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-10 relative z-10 max-w-md">
            To redefine the boundaries of automotive aesthetics through relentless innovation. We see a future where every surface is a testament to flawless engineering, unyielding protection, and breathtaking depth. H.Eight is not just care; it is the ultimate expression of mechanical reverence.
          </p>
          <div className="h-[2px] w-12 bg-[#0057FF] relative z-10"></div>
        </div>
        <div className="h-[400px] md:h-auto rounded border border-white/5 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541882672051-7f058097d76f?q=80&w=2000" 
            alt="Carbon fiber" 
            className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>

      {/* The Mission Header */}
      <div className="text-center mb-16 max-w-[1200px] mx-auto px-6">
        <h2 className="text-white text-3xl font-bold uppercase tracking-widest mb-4">The Mission</h2>
        <p className="text-zinc-400 text-sm">Delivering uncompromising quality to those who demand the elite.</p>
      </div>

      {/* The Mission Grid */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
        {/* Card 1 */}
        <div className="bg-[#111318] p-10 rounded border border-white/5 flex flex-col relative h-full group hover:border-white/10 transition-colors">
           <div className="flex items-center gap-4 mb-6">
              <div className="text-[#0057FF]"><Beaker size={20} strokeWidth={1.5} /></div>
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">Nano-Precision</h3>
           </div>
           <p className="text-zinc-400 text-sm leading-relaxed mb-12 max-w-sm">Formulating advanced ceramic and graphene structures at the molecular level to ensure maximum bonding, durability, and a flawless finish that resists environmental degradation.</p>
           <div className="absolute bottom-8 right-8 text-[9px] font-bold text-zinc-600 uppercase tracking-widest">01 // Innovation</div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#111318] p-10 rounded border border-white/5 flex flex-col relative h-full group hover:border-white/10 transition-colors">
           <div className="flex items-center gap-4 mb-6">
              <div className="text-[#0057FF]"><Diamond size={20} strokeWidth={1.5} /></div>
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">Exclusivity</h3>
           </div>
           <p className="text-zinc-400 text-sm leading-relaxed mb-12 max-w-sm">Crafting small-batch, highly vetted solutions reserved for top-tier professionals and passionate collectors.</p>
           <div className="absolute bottom-8 right-8 text-[9px] font-bold text-zinc-600 uppercase tracking-widest">02 // Standard</div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111318] p-10 rounded border border-white/5 flex flex-col relative h-full group hover:border-white/10 transition-colors">
           <div className="flex items-center gap-4 mb-6">
              <div className="text-[#0057FF]"><Activity size={20} strokeWidth={1.5} /></div>
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">Performance</h3>
           </div>
           <p className="text-zinc-400 text-sm leading-relaxed mb-12 max-w-sm">Ensuring every product application is a seamless experience, delivering instant, measurable results and long-term resilience.</p>
           <div className="absolute bottom-8 right-8 text-[9px] font-bold text-zinc-600 uppercase tracking-widest">03 // Results</div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#111318] p-10 rounded border border-white/5 flex flex-col relative h-full group hover:border-white/10 transition-colors">
           <div className="flex items-center gap-4 mb-6">
              <div className="text-[#0057FF]"><Leaf size={20} strokeWidth={1.5} /></div>
              <h3 className="text-white font-bold text-lg uppercase tracking-widest">Sustainable Excellence</h3>
           </div>
           <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">Pushing the boundaries of performance while remaining committed to environmentally conscious formulations. True luxury does not compromise the environment.</p>
        </div>
      </div>

      {/* Promise Section */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
        <div className="flex flex-col gap-12">
          <div className="flex gap-6">
             <div className="text-[#0057FF] mt-1"><CheckCircle2 size={24} strokeWidth={1.5} /></div>
             <div>
               <h4 className="text-white font-bold uppercase tracking-widest mb-3">Clinical Precision</h4>
               <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">Our laboratories operate under strict tolerances, ensuring absolute consistency in every bottle.</p>
             </div>
          </div>
          <div className="flex gap-6">
             <div className="text-[#0057FF] mt-1"><Hexagon size={24} strokeWidth={1.5} /></div>
             <div>
               <h4 className="text-white font-bold uppercase tracking-widest mb-3">Architectural Depth</h4>
               <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">We don't just coat surfaces; we build micro-layers of refractive protection that enhance color depth.</p>
             </div>
          </div>
        </div>

        <div className="bg-[#111318] p-16 rounded border border-white/5 flex flex-col items-center justify-center text-center h-full hover:border-white/10 transition-colors">
          <h3 className="text-[#0057FF] text-3xl md:text-4xl font-bold uppercase tracking-widest mb-6 leading-tight">
            "Perfection as a<br/>Standard."
          </h3>
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">The H.Eight Promise</p>
        </div>
      </div>

    </div>
  );
}
