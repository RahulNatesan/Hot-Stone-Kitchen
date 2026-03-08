const features = [
  {
    title: 'Wood-fired Ovens',
    desc: 'Authentic baking technique for crispy, charred-edge perfection',
    icon: 'fire',
  },
  {
    title: 'Fresh Ingredients',
    desc: 'Sourced daily — no frozen shortcuts, ever',
    icon: 'star',
  },
  {
    title: 'Student Favourite',
    desc: 'Trusted by VIT students since day one',
    icon: 'heart',
  },
  {
    title: '4.7★ Google Rating',
    desc: 'Consistently rated best Italian in Vellore',
    icon: 'star',
  },
]

const Icon = ({ name }: { name: string }) => {
  if (name === 'fire')
    return (
      <svg className="w-[18px] h-[18px] text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    )
  if (name === 'heart')
    return (
      <svg className="w-[18px] h-[18px] text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    )
  return (
    <svg className="w-[18px] h-[18px] text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  )
}

export default function OurStory() {
  return (
    <section id="about" className="py-24 bg-hsk-stone">
      <div className="container-hsk">
        <div className="flex items-center gap-3 mb-16 animate-on-scroll">
          <div className="accent-line" />
          <span className="text-xs font-semibold text-hsk-accent uppercase tracking-[0.2em]">Our Story</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative animate-on-scroll">
            <div className="img-zoom-container aspect-[4/5] w-full rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600"
                alt="Chef with pizza"
                className="img-zoom w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 glass rounded-2xl p-5 w-52 shadow-2xl">
              <p className="text-3xl font-heading font-bold text-white">10k+</p>
              <p className="text-xs text-white/50 mt-1">Happy diners served</p>
              <div className="flex mt-3 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-hsk-accent/20 rounded-2xl pointer-events-none" />
          </div>

          <div className="lg:col-span-7 animate-on-scroll">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Why Everyone Loves
              <br />
              <span className="italic text-hsk-cream">Hot Stone Kitchen</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Nestled near the heart of VIT University, Hot Stone Kitchen was born from a simple obsession: making the most authentic, flavour-packed Italian food in Vellore. We craft every pizza on hand-stretched thin dough, layered with house-made tomato sauce and the finest toppings — then fired to perfection.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              From our legendary Chicken Lasagna to the Mac & Cheese Pasta that students rave about, every dish is a celebration of Italian comfort food. Premium taste, worth every bite.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-hsk-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={f.icon} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{f.title}</p>
                    <p className="text-xs text-white/45 mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
