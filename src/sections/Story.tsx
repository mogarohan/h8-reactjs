import React from 'react';
import ferrariImg from '../assets/images/ferrari.jpg';

export default function Story() {
  return (
    <section id="story" className="py-24 flex items-center px-6 md:px-24 bg-transparent pointer-events-auto transition-colors">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Card */}
        <div className="max-w-2xl bg-[#0a192f]/40 p-8 backdrop-blur-md border border-white/10 rounded-2xl transition-colors">
          <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold mb-6 uppercase tracking-wider transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">Our Story</h2>
          <p className="text-lg text-zinc-300 mb-4 leading-relaxed transition-colors">
            Every great brand begins with a dream, and H.Eight is no different.
          </p>
          <p className="text-lg text-zinc-300 mb-4 leading-relaxed transition-colors">
            H.Eight was born from a passion for motorcycles and a belief that every rider deserves products they can truly trust. We noticed that many auto care products in the market focused only on appearance, while riders wanted something that delivered real performance, long-lasting protection, and premium quality.
          </p>
          <p className="text-lg text-zinc-300 mb-4 leading-relaxed transition-colors">
            That vision inspired us to create H.Eight—a brand built on quality, trust, and innovation. Every product we offer is carefully selected to help riders protect, maintain, and enhance their vehicles with confidence.
          </p>
          <p className="text-lg text-zinc-300 mb-4 leading-relaxed transition-colors">
            For us, auto care isn't just about cleaning a bike; it's about preserving the pride, passion, and memories that come with every ride.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed transition-colors">
            This is only the beginning of our journey, and we are committed to building a brand that riders across India will proudly choose for years to come.
          </p>
        </div>

        {/* Ferrari Image */}
        <div className="h-[500px] rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.2)] border border-white/10 group">
          <div className="absolute inset-0 bg-[#0a192f]/30 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={ferrariImg} 
            alt="Ferrari Supercar" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
}
