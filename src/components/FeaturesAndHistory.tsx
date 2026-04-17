import { History, TreePine, Star } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const FeaturesAndHistory = () => {
  return (
    <>
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

            {/* Architecture */}
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
    </>
  )
}

export default FeaturesAndHistory
