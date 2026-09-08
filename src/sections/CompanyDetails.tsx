export default function CompanyDetails() {
  return (
    <section id="company-details" className="py-24 flex items-center px-6 md:px-24 bg-transparent pointer-events-auto transition-colors">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#0a192f]/40 p-8 md:p-16 backdrop-blur-md border border-white/10 rounded-3xl transition-colors text-center">
          <h2 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-bold mb-8 uppercase tracking-wider transition-colors drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">Company Details</h2>
          
          <div className="text-lg text-zinc-300 leading-relaxed max-w-4xl mx-auto space-y-6">
            <p>
              H.Eight is an Indian premium auto care brand dedicated to providing high-quality products for motorcycles and automobiles.
            </p>
            <p>
              Our product range is designed to deliver professional-level cleaning, protection, and maintenance solutions that enhance both the appearance and performance of every vehicle.
            </p>
            <p>
              At H.Eight, quality is not an option—it's our promise. We carefully select and develop products that meet high standards of performance while remaining easy to use for every customer.
            </p>
            <p>
              With a strong focus on innovation, customer satisfaction, and long-term trust, we are committed to building a brand that represents excellence in the Indian auto care industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
