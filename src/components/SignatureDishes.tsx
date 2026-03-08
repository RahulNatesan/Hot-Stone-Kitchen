const dishes = [
  { name: 'Thin Crust Pizza', desc: 'Hand-stretched dough, house tomato sauce, fresh mozzarella, crispy charred edges', price: '₹299', tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1728819236727-af2cb9bed788?w=600', bento: 'bento-large' },
  { name: 'Chicken Lasagna', desc: 'Layers of pasta, béchamel, slow-cooked chicken ragù, aged parmesan', price: '₹349', tag: 'Must Try', img: 'https://images.unsplash.com/photo-1511640372071-29793e8abbf2?w=600', bento: 'bento-tall' },
  { name: 'Mac & Cheese Pasta', desc: '', price: '₹279', tag: 'Student Fav', img: 'https://images.unsplash.com/photo-1543339492-b2f040715a6e?w=600', bento: 'bento-medium' },
  { name: 'Peri Peri Chicken Pizza', desc: 'Spicy peri peri chicken, capsicum, onion, jalapeños on crispy thin crust', price: '₹329', tag: null, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600', bento: 'bento-wide' },
  { name: 'Pesto Pasta', desc: '', price: '₹259', tag: null, img: 'https://images.unsplash.com/photo-1689793601570-7980ac301eca?w=600', bento: 'bento-medium' },
  { name: 'Farmhouse Pizza', desc: '', price: '₹289', tag: null, img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600', bento: 'bento-small' },
  { name: 'Bruschetta', desc: '', price: '₹199', tag: null, img: 'https://images.unsplash.com/photo-1640879194490-84f70214911e?w=600', bento: 'bento-small' },
  { name: 'Chilli Garlic Prawns', desc: '', price: '₹399', tag: "Chef's Pick", img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600', bento: 'bento-medium' },
  { name: 'Brownie with Ice Cream', desc: 'Warm fudge brownie, vanilla bean gelato, chocolate drizzle, crushed hazelnuts', price: '₹229', tag: null, img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600', bento: 'bento-wide' },
]

export default function SignatureDishes() {
  return (
    <section id="dishes" className="py-24 bg-hsk-primary">
      <div className="container-hsk">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 animate-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="text-xs font-semibold text-hsk-accent uppercase tracking-[0.2em]">Signature Dishes</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">
              Dishes Worth
              <br />
              <span className="italic text-hsk-cream">Every Craving</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-base leading-relaxed md:text-right">
            Crafted with fresh ingredients, fired with passion. These are the dishes Vellore talks about.
          </p>
        </div>

        <div className="bento-grid animate-on-scroll">
          {dishes.map((d, i) => (
            <div key={i} className={`dish-card ${d.bento}`}>
              <div className="absolute inset-0">
                <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
              </div>
              <div className="dish-card-overlay" />
              {d.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="badge-red text-[10px] py-1 px-3">{d.tag}</span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-white font-semibold text-lg leading-tight">{d.name}</h3>
                    {d.desc && <p className="text-white/55 text-xs mt-1.5 leading-relaxed max-w-xs">{d.desc}</p>}
                  </div>
                  <span className="price-badge flex-shrink-0">{d.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 animate-on-scroll">
          <a
            href="#dishes"
            className="flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-sm"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Z" />
            </svg>
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
