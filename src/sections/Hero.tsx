import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-between pb-24 pt-32 bg-transparent relative pointer-events-auto">
      
      <div className="flex-1 flex flex-col items-center justify-center relative w-full px-6">
        {/* Subtle background glow behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0057FF]/10 blur-[100px] rounded-full pointer-events-none" />
        
        <img 
          src="/logo.png" 
          alt="H8 Logo" 
          className="h-24 md:h-40 object-contain brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-8 relative z-10" 
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <h1 className="text-white text-sm md:text-xl font-medium uppercase tracking-[0.6em] text-center max-w-2xl text-zinc-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] relative z-10 ml-[0.6em]">
          Perfection as a Standard
        </h1>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#products" 
        className="text-zinc-600 hover:text-[#0057FF] transition-colors animate-bounce cursor-pointer flex flex-col items-center mt-auto relative z-10"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 -mb-4 opacity-50" strokeWidth={1.5} />
        <ChevronDown className="w-8 h-8" strokeWidth={1.5} />
      </a>
      
    </section>
  );
}
