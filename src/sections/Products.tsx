import tyreImg from "../assets/images/img3.png";
import bodyImg from "../assets/images/img4.png";
import waxImg from "../assets/images/img2.png";
import sprayImg from "../assets/images/img1.png";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      category: "Tyre Polish",
      name: "C-Quartz Elite",
      desc: "9H Hardness",
      image: tyreImg
    },
    {
      id: 2,
      category: "Spray Polish",
      name: "Iron Decon",
      desc: "Reactive formula dissolves brake dust on contact.",
      image: bodyImg
    },
    {
      id: 3,
      category: "Wax Polish",
      name: "Snow Foam",
      desc: "Thick foaming action lifts dirt and grime.",
      image: waxImg
    },
    {
      id: 4,
      category: "Body Polish",
      name: "Speed Gloss",
      desc: "Instant shine that is quick and easy to apply.",
      image: sprayImg
    }
  ];

  return (
    <section id="products" className="min-h-screen py-24 pointer-events-auto px-6 transition-colors relative overflow-hidden bg-transparent z-10">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 relative z-10 pt-16">
          <div className="border border-[#0057FF]/30 text-[#0057FF] text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">The Collection</div>
          <h2 className="text-4xl md:text-5xl text-white font-bold uppercase tracking-widest mb-4">Our Products</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-[#111318] border border-white/5 p-6 rounded hover:border-white/10 transition-colors shadow-none flex flex-col overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1d24] opacity-50 pointer-events-none" />

              <div className="absolute top-6 left-6 text-[9px] font-bold text-zinc-400 bg-[#0a0c10] px-2 py-1 uppercase tracking-widest border border-white/5 z-10">
                {product.category}
              </div>

              <div className="relative z-20 h-[300px] mb-8 mt-8 overflow-hidden flex items-center justify-center bg-transparent">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
              </div>

              <div className="relative z-20 mt-auto flex flex-col">
                <h3 className="text-xl text-white font-bold mb-2 uppercase tracking-widest">{product.name}</h3>
                <p className="text-zinc-500 text-sm mb-6 h-12 leading-relaxed">{product.desc}</p>
                <div className="flex items-center gap-4">
                  <Link to="/contact" className="flex-1 text-center py-3 border border-white/10 text-white uppercase tracking-widest text-[10px] font-bold hover:bg-white hover:text-black transition-colors rounded">
                    Explore
                  </Link>
                  <button className="w-12 h-[38px] flex items-center justify-center bg-[#0057FF] hover:bg-blue-600 transition-colors rounded text-white shrink-0">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
