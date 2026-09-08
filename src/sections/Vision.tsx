export default function Vision() {
  return (
    <section id="vision" className="min-h-screen flex items-center px-6 md:px-24 bg-transparent pointer-events-auto transition-colors">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center bg-[#0a192f]/40 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10">
        <div>
          <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold mb-8 uppercase tracking-wider transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">Our Vision</h2>
          <p className="text-lg text-zinc-300 mb-6 leading-relaxed transition-colors">
            Every great journey begins with a single step, and this is ours. H.Eight was founded with a simple yet powerful vision—to provide every bike enthusiast with premium auto care products that deliver exceptional quality, protection, and performance. We believe every rider deserves products they can trust, products that keep their machines looking their best and performing at their peak.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed transition-colors">
            Our dream is to reach every bike lover across India and become a part of their riding journey. We are committed to continuous innovation, uncompromising quality, and building lasting trust with our customers. This is just the beginning, and our vision is to grow H.Eight into one of India's largest, most trusted, and most loved premium auto care brands.
          </p>
        </div>
        <div className="h-[500px] rounded-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-yellow-500/20 backdrop-blur-sm z-10" />
          <img 
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Vision" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
