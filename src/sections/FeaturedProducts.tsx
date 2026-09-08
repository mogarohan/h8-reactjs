import tyreImg from "../assets/images/img3.png";
import sprayImg from "../assets/images/img1.png";
import washImg from "../assets/images/img2.png";
import wheelImg from "../assets/images/img4.png";
import { ArrowRight, FileText } from "lucide-react";

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 pointer-events-auto px-6 relative z-10 bg-transparent">
      {/* Optional faint grid background for the premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        
        {/* Left Column - Large Card */}
        <div className="md:col-span-1 bg-[#111318] p-8 rounded relative border border-white/5 flex flex-col justify-between group overflow-hidden hover:border-white/10 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d24] opacity-50 pointer-events-none" />
          <div className="absolute top-6 left-6 text-[9px] font-bold text-zinc-400 bg-[#0a0c10] px-2 py-1 uppercase tracking-widest border border-white/5 z-10">
            Ceramic<br/>Coating
          </div>
          <div className="flex-1 flex items-center justify-center py-12 relative z-10">
            <img 
              src={tyreImg} 
              alt="C-Quartz Elite" 
              className="w-full h-auto max-h-[300px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex items-end justify-between relative z-10">
            <div>
              <h3 className="text-white font-bold text-xl uppercase tracking-widest mb-1">C-Quartz Elite</h3>
              <p className="text-zinc-500 text-xs">9H Hardness</p>
            </div>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors shrink-0 ml-4">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Middle Column - Stacked Cards */}
        <div className="md:col-span-1 flex flex-col gap-4">
          {/* Top Card */}
          <div className="bg-[#111318] p-8 rounded border border-white/5 flex-1 relative flex flex-col group hover:border-white/10 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d24] opacity-50 pointer-events-none" />
            <div className="absolute top-6 left-6 text-[9px] font-bold text-zinc-400 bg-[#0a0c10] px-2 py-1 uppercase tracking-widest border border-white/5 z-10">
              Quick<br/>Detail
            </div>
            <div className="flex-1 flex items-center justify-center py-8 relative z-10">
              <img 
                src={sprayImg} 
                alt="Speed Gloss" 
                className="h-32 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-white font-bold text-lg uppercase tracking-widest relative z-10">Speed Gloss</h3>
          </div>

          {/* Bottom Card */}
          <div className="bg-[#111318] p-8 rounded border border-white/5 flex-1 relative flex flex-col group hover:border-white/10 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d24] opacity-50 pointer-events-none" />
            <div className="absolute top-6 left-6 text-[9px] font-bold text-zinc-400 bg-[#0a0c10] px-2 py-1 uppercase tracking-widest border border-white/5 z-10">
              Wash
            </div>
            <div className="flex-1 flex items-center justify-center py-8 relative z-10">
              <img 
                src={washImg} 
                alt="Snow Foam" 
                className="h-32 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-white font-bold text-lg uppercase tracking-widest relative z-10">Snow Foam</h3>
          </div>
        </div>

        {/* Right Column - Text & Wide Card */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Text Box */}
          <div className="bg-gradient-to-br from-[#2a2e38] to-[#111318] p-10 md:p-14 rounded border border-white/5 flex-1 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-white text-2xl md:text-3xl font-bold uppercase mb-6 tracking-widest relative z-10">Nano-Engineered Defense</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-lg relative z-10">
              Our proprietary carbon-infused polymer crosslinks with your clearcoat, creating an impenetrable sacrificial layer that repels water, dirt, and UV degradation.
            </p>
            <a href="#whitepaper" className="text-[#0057FF] text-xs font-bold uppercase tracking-widest flex items-center hover:text-blue-400 transition-colors w-max relative z-10">
              Read the White Paper <FileText size={14} className="ml-2" />
            </a>
          </div>
          
          {/* Wide Card */}
          <div className="bg-[#111318] p-8 rounded border border-white/5 flex flex-col sm:flex-row items-center gap-8 relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1d24] opacity-50 pointer-events-none" />
            <div className="absolute top-6 left-6 text-[9px] font-bold text-zinc-400 bg-[#0a0c10] px-2 py-1 uppercase tracking-widest border border-white/5 z-10">
              Wheel &<br/>Tire
            </div>
            
            <div className="w-full sm:w-1/2 flex items-center justify-center sm:justify-start mt-8 sm:mt-0 relative z-10">
              <img 
                src={wheelImg} 
                alt="Iron Decon" 
                className="h-40 sm:h-48 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700 ml-0 sm:ml-20"
              />
            </div>
            
            <div className="w-full sm:w-1/2 relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-white font-bold text-2xl uppercase tracking-widest mb-3">Iron Decon</h3>
              <p className="text-zinc-500 text-sm mb-8 max-w-[200px]">Reactive formula dissolves brake dust on contact.</p>
              <button className="border border-[#0057FF]/30 text-[#0057FF] text-[10px] font-bold px-8 py-3 rounded uppercase tracking-widest hover:bg-[#0057FF] hover:text-white hover:border-[#0057FF] transition-all">
                Explore Details
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
