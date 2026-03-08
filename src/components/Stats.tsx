export default function Stats() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-cream-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <div className="animate-on-scroll bg-white/80 backdrop-blur rounded-2xl p-6 sm:p-8 border border-cream-300/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-2 text-gold-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
            <p className="font-display text-2xl font-semibold text-stone-800">Loved by 10,000+ VIT students</p>
            <p className="text-terracotta-600 font-semibold mt-1">4.7/5 Google Rating</p>
          </div>

          <div className="animate-on-scroll bg-white/80 backdrop-blur rounded-2xl p-6 sm:p-8 border border-cream-300/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-600">Best Seller</span>
            <p className="font-display text-xl font-semibold text-stone-800 mt-1">Thin Crust Pizza</p>
            <p className="text-3xl font-bold text-terracotta-600 mt-2">92%</p>
            <p className="text-stone-600 text-sm">Reorder rate by customers</p>
          </div>

          <div className="animate-on-scroll bg-white/80 backdrop-blur rounded-2xl p-6 sm:p-8 border border-cream-300/50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-500">Today's Special</span>
            <p className="font-display text-xl font-semibold text-stone-800 mt-1">Chicken Lasagna</p>
            <div className="flex gap-4 mt-3">
              <span className="text-2xl font-bold text-stone-800">48</span>
              <span className="text-stone-600">Orders</span>
              <span className="text-gold-500 font-semibold">4.9</span>
              <span className="text-stone-600">Rating</span>
            </div>
            <p className="text-terracotta-600 font-medium text-sm mt-1">100% Fresh</p>
          </div>
        </div>
      </div>
    </section>
  )
}
