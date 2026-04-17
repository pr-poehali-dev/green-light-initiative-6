import { MapPin } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://cdn.poehali.dev/projects/267bab5e-ce7e-4acb-9946-1cc14c939be7/files/19b747c4-e180-48ea-98f8-2d5f3c336b8c.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <MapPin className="w-5 h-5" />
          <span className="font-medium text-balance">Город Любань</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {["История", "Достопримечательности", "Природа", "Вопросы", "Контакты"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
          >
            О проекте
          </a>
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Узнать больше</Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        {/* Badge */}
        <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <span className="text-sm font-medium">Ленинградская область · основан в XIX веке</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Любань — город у Тигоды.</h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
          Маленький город с большой историей — первая российская железнодорожная магистраль, героические страницы Великой Отечественной войны и тихая красота ленинградской природы.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
            Изучить историю
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
          >
            Смотреть достопримечательности
          </Button>
        </div>

        {/* Footer Note */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
          <Icon name="Award" size={16} />
          <span className="text-sm font-medium">Памятник истории и культуры России</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
