export default function FindUs() {
  return (
    <section id="location" className="py-24 bg-hsk-primary">
      <div className="container-hsk">
        <div className="mb-14 animate-on-scroll">
          <div className="flex items-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="text-xs font-semibold text-hsk-accent uppercase tracking-[0.2em]">Find Us</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">
            Visit Us at
            <br />
            <span className="italic text-hsk-cream">Hot Stone Kitchen</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg text-base leading-relaxed">
            Perfectly located near VIT University — the go-to Italian kitchen for students, food lovers, and anyone who craves the best pizza in Vellore.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 animate-on-scroll">
            <div className="w-full h-80 lg:h-[450px] bg-hsk-stone flex items-center justify-center relative overflow-hidden rounded-2xl">
              <iframe
                title="Hot Stone Kitchen — Near VIT University, Vellore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d79.1528!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzExLjMiTiA3OcKwMDknMTAuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-5 animate-on-scroll">
            <div className="flex items-start gap-4 p-5 glass rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-hsk-accent/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-[18px] h-[18px] text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Address</p>
                <p className="text-white font-medium text-sm leading-relaxed">
                  Near VIT University Main Gate, Katpadi Road, Vellore, Tamil Nadu 632014
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 glass rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-hsk-accent/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-[18px] h-[18px] text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Hours</p>
                <p className="text-white font-medium text-sm leading-relaxed">Mon – Sun: 11:00 AM – 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 glass rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-hsk-accent/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-[18px] h-[18px] text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+919876543210" className="text-white font-medium text-sm hover:text-hsk-cream transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 glass rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-hsk-accent/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-[18px] h-[18px] text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@hotstonekitchen.in" className="text-white font-medium text-sm hover:text-hsk-cream transition-colors">
                  hello@hotstonekitchen.in
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-hsk-accent text-white font-semibold rounded-full hover:bg-hsk-accent-hover transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
                Get Directions
              </a>
              <a
                href="tel:+919876543210"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-white/15 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
