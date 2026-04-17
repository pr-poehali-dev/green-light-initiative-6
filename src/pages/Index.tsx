import { MapPin, History, TreePine, Star, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Где находится город Любань?",
      answer:
        "Любань — город в Тосненском районе Ленинградской области России. Расположен на реке Тигода, в 80 км к юго-востоку от Санкт-Петербурга. Через город проходит железнодорожная линия Москва — Санкт-Петербург.",
    },
    {
      question: "Какова история возникновения города?",
      answer:
        "История Любани уходит корнями в XIX век — город вырос вокруг железнодорожной станции, открытой в 1851 году на первой российской магистральной железной дороге между Москвой и Санкт-Петербургом. Именно здесь в 1871 году останавливался поезд с телом Николая Некрасова.",
    },
    {
      question: "Чем знаменита Любань в годы Великой Отечественной войны?",
      answer:
        "В годы Великой Отечественной войны Любань стала местом ожесточённых боёв. В 1942–1943 годах здесь проходила Любанская наступательная операция, в ходе которой погибли тысячи советских солдат. В городе и окрестностях сохранились многочисленные мемориалы и братские захоронения.",
    },
    {
      question: "Какие достопримечательности есть в Любани?",
      answer:
        "В Любани и окрестностях можно посетить: Церковь Святой Троицы (XIX в.), мемориальный комплекс участникам Великой Отечественной войны, исторический железнодорожный вокзал — памятник архитектуры, а также живописные берега реки Тигода и окружающие леса.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* History */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Богатая история</h3>
              <p className="text-white/80 leading-relaxed">Основан в 1851 году как станция первой российской железнодорожной магистрали.</p>
            </div>

            {/* Memory */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Shield" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Память о войне</h3>
              <p className="text-white/80 leading-relaxed">Место ожесточённых боёв 1942–43 годов. Мемориалы и братские захоронения.</p>
            </div>

            {/* Nature */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <TreePine className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Природа</h3>
              <p className="text-white/80 leading-relaxed">Река Тигода, смешанные леса и живописные пейзажи Ленинградской области.</p>
            </div>

            {/* Location */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Архитектура</h3>
              <p className="text-white/80 leading-relaxed">Церковь Святой Троицы XIX века и исторический железнодорожный вокзал.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">История города</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Четыре ключевых эпохи, которые сформировали облик Любани.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Phase 1 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">1851</div>
                  <h3 className="text-xl font-semibold mb-4">Рождение станции</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Открытие железнодорожной станции на первой в России магистральной линии Москва — Санкт-Петербург дало начало городу.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">XIX в.</div>
                  <h3 className="text-xl font-semibold mb-4">Расцвет и рост</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вокруг станции вырос торговый посёлок, строились купеческие дома, церкви. Любань стала оживлённым транзитным пунктом.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">1941–45</div>
                  <h3 className="text-xl font-semibold mb-4">Годы войны</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    В ходе Любанской наступательной операции город стал ареной жестоких боёв. Героизм защитников навсегда вписан в историю.
                  </p>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">Сегодня</div>
                  <h3 className="text-xl font-semibold mb-4">Современный город</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Сегодня Любань — тихий уютный город с сохранившимися историческими памятниками, мемориалами и живой памятью поколений.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Узнать больше об истории
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Галерея</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
              Достопримечательности и природа города Любань.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/267bab5e-ce7e-4acb-9946-1cc14c939be7/files/0599ea00-21bc-4c88-9dec-d526aaac741f.jpg"
                  alt="Церковь Святой Троицы"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold">Церковь Святой Троицы</h3>
                  <p className="text-white/70 text-sm">XIX век</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/267bab5e-ce7e-4acb-9946-1cc14c939be7/files/89dc64ce-665e-4cd4-9d8b-21685be1bb0c.jpg"
                  alt="Мемориал Великой Отечественной войны"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold">Мемориал ВОВ</h3>
                  <p className="text-white/70 text-sm">Любанская наступательная операция 1942–43</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/267bab5e-ce7e-4acb-9946-1cc14c939be7/files/87542269-2f78-4e30-bac9-15b96ceb0e97.jpg"
                  alt="Железнодорожный вокзал"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold">Железнодорожный вокзал</h3>
                  <p className="text-white/70 text-sm">Памятник архитектуры XIX века</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/267bab5e-ce7e-4acb-9946-1cc14c939be7/files/a2671b0e-3714-454e-bcb9-dbe849b82353.jpg"
                  alt="Река Тигода"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold">Река Тигода</h3>
                  <p className="text-white/70 text-sm">Природа Ленинградской области</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Вопросы о городе
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что нужно знать о Любани: где находится, чем известна и что стоит посмотреть.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Связаться с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Написать нам</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше полное имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Ваш вопрос о городе Любань..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить сообщение
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Есть вопросы о городе, его истории или достопримечательностях? Напишите нам — мы ответим в течение одного рабочего дня.
                  </p>
                </div>

                {/* Info Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Город Любань</h4>
                      <p className="text-gray-600">Тосненский район, Ленинградская область</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}

export default Index