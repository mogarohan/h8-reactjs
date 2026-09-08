import { CheckCircle } from "lucide-react";

export default function Mission() {
  const points = [
    "Premium-Quality Auto Care Solutions",
    "Keep Vehicles Clean, Protected & Performing",
    "Innovation, Reliability & Affordability",
    "Earn Trust Through Quality & Consistency"
  ];

  return (
    <section id="mission" className="min-h-screen flex items-center px-6 md:px-24 bg-transparent pointer-events-auto relative overflow-hidden transition-colors">
      <div className="max-w-4xl mx-auto w-full text-center relative z-10 bg-[#0a192f]/40 p-8 md:p-16 rounded-3xl backdrop-blur-md border border-white/10">
        <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold mb-8 uppercase tracking-wider transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">Our Mission</h2>
        
        <div className="text-xl text-zinc-300 mb-12 leading-relaxed max-w-3xl mx-auto transition-colors space-y-4">
          <p>
            Our mission is to provide premium-quality auto care solutions that help riders keep their vehicles clean, protected, and performing at their best.
          </p>
          <p>
            We are committed to delivering products that combine innovation, reliability, and affordability while ensuring an outstanding customer experience.
          </p>
          <p>
            Every decision we make is driven by one purpose—to earn the trust of our customers through quality and consistency.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4 bg-[#0a192f]/60 p-4 rounded-lg border border-white/10 hover:border-yellow-500 hover:bg-[#0a192f]/80 transition-colors shadow-none text-left">
              <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 transition-colors" />
              <span className="text-zinc-200 transition-colors">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
