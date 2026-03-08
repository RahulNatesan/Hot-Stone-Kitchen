export default function FooterCta() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1724734333243-17c38ef0cdfd?auto=format&fit=crop&w=1920"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hsk-primary via-black/75 to-hsk-primary" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container-hsk text-center">
        <div className="flex justify-center mb-6 animate-on-scroll">
          <span className="badge-red">
            <span className="w-1.5 h-1.5 rounded-full bg-hsk-accent animate-pulse-red inline-block" />
            Open Daily 11 AM – 11 PM
          </span>
        </div>
        <h2 className="font-heading text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-on-scroll">
          Craving the Best
          <br />
          <span className="italic text-hsk-cream">Pizza in Vellore?</span>
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-10 animate-on-scroll">
          Premium Italian flavours crafted with passion, served with warmth. Come hungry. Leave happy. Always.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
          <a
            href="#location"
            className="flex items-center gap-2 px-9 py-5 bg-hsk-accent text-white font-bold rounded-full hover:bg-hsk-accent-hover transition-all duration-300 shadow-2xl shadow-red-900/50 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            Book a Table
          </a>
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-9 py-5 bg-white text-hsk-primary font-bold rounded-full hover:bg-hsk-cream transition-all duration-300 shadow-xl text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Order Now
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/10 animate-on-scroll">
          <div className="flex items-center gap-2 text-white/50">
            <svg className="w-4 h-4 text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span className="text-sm font-medium">4.7★ Google Rating</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <svg className="w-4 h-4 text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            <span className="text-sm font-medium">10,000+ Happy Diners</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <svg className="w-4 h-4 text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="text-sm font-medium">Near VIT University</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <svg className="w-4 h-4 text-hsk-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            </svg>
            <span className="text-sm font-medium">Best Pizza in Vellore</span>
          </div>
        </div>
      </div>
    </section>
  )
}
