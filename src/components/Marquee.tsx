const items = [
  'Thin Crust Pizza',
  '★ Best in Vellore',
  'Chicken Lasagna',
  '★ Fresh Every Day',
  'Mac & Cheese Pasta',
  '★ VIT Student Favourite',
  'Peri Peri Pizza',
  '★ Authentic Italian',
  'Pesto Pasta',
  '★ 10,000+ Happy Diners',
  'Farmhouse Pizza',
  '★ Near VIT Campus',
]

export default function Marquee() {
  const duplicated = [...items, ...items]

  return (
    <div className="bg-hsk-accent py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-8 text-sm font-semibold text-white uppercase tracking-widest">
            {item}
            <span className="text-white/40">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
