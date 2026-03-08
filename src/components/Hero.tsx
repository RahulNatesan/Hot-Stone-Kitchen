export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay">
      {/* Background image + gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580140338217-0b722c4f494b?auto=format&fit=crop&w=1920"
          alt="Thin crust pizza"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-hsk-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 container-hsk pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="badge-red mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-hsk-accent animate-pulse-red inline-block" />
              Vellore's Favourite Italian Kitchen
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              The Best
              <br />
              <span className="italic text-hsk-cream">Thin-Crust</span>
              <br />
              Pizza in Vellore
            </h1>

            <p className="text-white/70 max-w-xl text-lg mb-10 leading-relaxed">
              Authentic Italian pizzas, creamy pastas, and comforting classics loved by thousands of VIT students. Every bite tells a story of fresh ingredients and old-world Italian craft.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#dishes"
                className="flex items-center gap-2 px-7 py-4 bg-hsk-accent text-white font-semibold rounded-full hover:bg-hsk-accent-hover transition-all duration-300 shadow-xl shadow-red-900/40 text-sm"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                View Menu
              </a>
              <a
                href="#location"
                className="flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                Reserve Table
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 px-7 py-4 bg-transparent text-white/70 font-semibold rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 text-sm"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Order Online
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&w=80',
                  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=80',
                  'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&w=80',
                  'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=80',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-hsk-primary object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="stars text-sm">★★★★★</div>
                <p className="text-xs text-white/50 mt-0.5">Loved by 10,000+ VIT students</p>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/10" />
              <div className="hidden sm:block">
                <p className="text-xl font-heading font-bold text-white">4.7<span className="text-sm text-white/50">/5</span></p>
                <p className="text-xs text-white/50">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Floating cards - desktop */}
          <div className="lg:col-span-5 relative hidden lg:flex flex-col items-end gap-4">
            <div className="glass-cream rounded-2xl p-5 w-64 animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-hsk-accent/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Best Seller</p>
                  <p className="text-sm font-semibold text-white">Thin Crust Pizza</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1620462465607-45e53fefe483?w=64&h=64&fit=crop"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                  <div className="h-full w-[92%] bg-hsk-accent rounded-full" />
                </div>
                <span className="text-xs text-hsk-cream font-bold">92%</span>
              </div>
              <p className="text-xs text-white/40 mt-2">Reorder rate by customers</p>
            </div>

            <div className="glass-cream rounded-2xl p-5 w-72" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Today's Special</p>
                  <p className="text-sm font-semibold text-white">Chicken Lasagna</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/5 rounded-xl p-2">
                  <p className="text-base font-bold text-white font-heading">48</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">Orders</p>
                </div>
                <div className="bg-white/5 rounded-xl p-2">
                  <p className="text-base font-bold text-white font-heading">4.9</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">Rating</p>
                </div>
                <div className="bg-white/5 rounded-xl p-2">
                  <p className="text-base font-bold text-white font-heading">100%</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">Fresh</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-hsk-accent/10 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border border-hsk-accent/20 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <p className="text-xs text-white/50 uppercase tracking-widest">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
