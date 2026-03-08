import { useState } from 'react'

const reviews = [
  { name: 'Priya Ramachandran', role: 'VIT Student, CSE 3rd Year', text: 'One of the best pizzas I have ever had in Vellore. The thin crust is perfectly crispy and the toppings are so fresh. Pure heaven for pizza lovers. I visit at least twice a week now!', ordered: 'Thin Crust Pizza', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=80' },
  { name: 'Arjun Mehta', role: 'VIT Student, ECE 2nd Year', text: 'Best pizza place near VIT, no contest. The Chicken Lasagna is absolutely incredible — layers of flavour in every bite. Pastas are amazing too. This place is a gem!', ordered: 'Chicken Lasagna', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&w=80' },
  { name: 'Sneha Iyer', role: '', text: 'Thin crust pizzas here are better than many big chain restaurants in Chennai. The dough has this perfect char and the sauce is made from scratch. Highly recommend the Peri Peri!', ordered: '', img: 'https://images.unsplash.com/photo-1652396944757-ad27b62b33f6?w=80' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const r = reviews[active]

  return (
    <section id="reviews" className="py-24 bg-hsk-stone overflow-hidden">
      <div className="container-hsk">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-on-scroll">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="text-xs font-semibold text-hsk-accent uppercase tracking-[0.2em]">Customer Love</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">
              Trusted by
              <br />
              <span className="italic text-hsk-cream">15,000+ Diners</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Previous review"
              onClick={() => setActive((a) => (a === 0 ? reviews.length - 1 : a - 1))}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all duration-300"
              aria-label="Next review"
              onClick={() => setActive((a) => (a + 1) % reviews.length)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start animate-on-scroll">
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-8 lg:p-10 relative overflow-hidden transition-all duration-300">
              <div className="absolute top-6 right-8 font-heading text-9xl text-white/5 leading-none select-none pointer-events-none">"</div>
              <div className="flex items-center gap-4 mb-6">
                <img src={r.img} alt={r.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/10 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">{r.name}</p>
                  {r.role && <p className="text-xs text-white/45 mt-0.5">{r.role}</p>}
                </div>
                <div className="ml-auto">
                  <div className="stars text-base">★★★★★</div>
                </div>
              </div>
              <blockquote className="text-white/75 text-lg leading-relaxed font-light italic mb-6">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              {r.ordered && (
                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  <svg className="w-3.5 h-3.5 text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <span className="text-xs text-white/40">Ordered: </span>
                  <span className="text-xs text-hsk-cream font-medium">{r.ordered}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`rounded-full transition-all duration-300 h-2 ${i === active ? 'w-8 bg-hsk-accent' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            {reviews.map((rev, i) => (
              <button
                key={i}
                type="button"
                className={`glass rounded-2xl p-5 text-left hover:bg-white/10 transition-all duration-300 group ${i === active ? 'ring-1 ring-white/20' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={rev.img} alt="" className="w-9 h-9 rounded-full object-cover border border-white/10 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{rev.name}</p>
                    <div className="stars text-xs mt-0.5">★★★★★</div>
                  </div>
                </div>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </button>
            ))}
            <div className="bg-hsk-accent rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-white font-semibold text-sm uppercase tracking-wider">Overall Rating</p>
                <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
              </div>
              <p className="font-heading text-5xl font-bold text-white">4.7</p>
              <div className="stars text-xl mt-1">★★★★★</div>
              <p className="text-white/70 text-xs mt-2">Based on 500+ Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
