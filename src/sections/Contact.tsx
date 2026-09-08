export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 bg-transparent pointer-events-auto relative transition-colors z-10">
      <div className="max-w-4xl w-full bg-[#111318] border border-white/5 p-8 md:p-16 rounded shadow-none transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d24] opacity-50 pointer-events-none" />
        <div className="text-center mb-12 relative z-10">
          <div className="border border-[#0057FF]/30 text-[#0057FF] text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Contact</div>
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 uppercase tracking-widest transition-colors">Get in Touch</h2>
          <p className="text-zinc-500 transition-colors uppercase tracking-widest text-[10px] font-bold">Ready to elevate your auto care experience? Contact our specialists.</p>
        </div>
        
        <form className="space-y-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-[#0a0c10] border border-white/5 p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#0057FF] transition-colors rounded text-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-[#0a0c10] border border-white/5 p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#0057FF] transition-colors rounded text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Message</label>
            <textarea 
              placeholder="HOW CAN WE HELP YOU?" 
              rows={4}
              className="w-full bg-[#0a0c10] border border-white/5 p-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#0057FF] transition-colors rounded text-sm"
            />
          </div>
          <button className="w-full py-4 bg-[#0057FF] text-white font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
