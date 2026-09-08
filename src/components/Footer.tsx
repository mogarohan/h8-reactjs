import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0c10] pt-24 pb-12 border-t border-white/5 pointer-events-auto mt-auto relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#0057FF]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] h-[300px] bg-[#0057FF]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <img 
                src="/logo.png" 
                alt="H8 Logo" 
                className="h-10 object-contain brightness-0 invert opacity-90" 
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
              We define the pinnacle of automotive protection. H.Eight provides meticulously engineered formulas for those who demand absolute perfection.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#0057FF] hover:bg-[#0057FF]/10 transition-all bg-[#111318]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#0057FF] hover:bg-[#0057FF]/10 transition-all bg-[#111318]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#0057FF] hover:bg-[#0057FF]/10 transition-all bg-[#111318]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-500 font-medium">
              <li><Link to="/products" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">Our Collection</Link></li>
              <li><Link to="/vision" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">The Vision</Link></li>
              <li><Link to="/vision" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">Technology</Link></li>
              <li><Link to="/contact" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">Professionals</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-500 font-medium">
              <li><Link to="/contact" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">Shipping & Returns</Link></li>
              <li><Link to="/contact" className="hover:text-[#0057FF] hover:translate-x-1 transition-all inline-block">Safety Data</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Stay Ahead</h4>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Subscribe to receive updates, access to exclusive releases, and advanced care techniques.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-[#111318] border border-white/10 py-3.5 pl-4 pr-12 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#0057FF] transition-colors rounded"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-[#0057FF] transition-colors p-2 bg-transparent">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Locations</Link>
          </div>
          <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest text-center md:text-right">
            &copy; {new Date().getFullYear()} <span className="text-[#0057FF]">H.EIGHT CARBON ELITE.</span> ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
