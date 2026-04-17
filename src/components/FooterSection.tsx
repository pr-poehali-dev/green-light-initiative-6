import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const FooterSection = () => {
  return (
    <footer className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6" />
                <span className="text-xl font-semibold">Город Любань</span>
              </div>
              <p className="text-white/80 leading-relaxed text-pretty">
                Любань — исторический город Ленинградской области, основанный в 1851 году. Место памяти, истории и тихой красоты русского севера.
              </p>
            </div>

            {/* History Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ИСТОРИЯ</h3>
              <ul className="space-y-3">
                {["Основание города", "XIX век", "Годы войны", "Наши дни"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sights Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">МЕСТА</h3>
              <ul className="space-y-3">
                {["Церковь Троицы", "Мемориал ВОВ", "Вокзал", "Река Тигода"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ИНФОРМАЦИЯ</h3>
              <ul className="space-y-3">
                {["О проекте", "Контакты", "Вопросы и ответы", "Источники"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 pt-12 mb-12">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold mb-4">Новости о городе</h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Введите ваш email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                />
                <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
              </div>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm text-center">© 2025 Город Любань · Ленинградская область</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
