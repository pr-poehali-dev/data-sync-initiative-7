import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">ПЕРСОНАЛ24</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">О нас</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Кейсы</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 hidden md:flex">Получить консультацию</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Иркутск · Работаем по всей России</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Персонал для вашего бизнеса — <span className="text-blue-600">быстро и надёжно</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Аутсорсинг, аутстаффинг и подбор персонала в Иркутске и по всей России. Берём на себя всю работу с кадрами — вы сосредоточьтесь на бизнесе.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Получить консультацию
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="Users" className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">500+</div>
                      <div className="text-blue-100 text-sm">Специалистов в базе</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="Briefcase" className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">200+</div>
                      <div className="text-blue-100 text-sm">Закрытых вакансий</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon name="Star" className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">5 лет</div>
                      <div className="text-blue-100 text-sm">На рынке Иркутска</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О нас</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Профессиональное кадровое агентство с опытом работы в разных отраслях
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Ваш надёжный кадровый партнёр в Иркутске</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Более 5 лет мы помогаем иркутским и российским компаниям решать кадровые задачи. Наши клиенты — торговые сети, строительные компании, IT-организации и производства. Мы берём на себя все вопросы: от поиска и оформления до управления персоналом.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Направления</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Аутсорсинг</Badge>
                    <Badge variant="secondary">Аутстаффинг</Badge>
                    <Badge variant="secondary">Подбор персонала</Badge>
                    <Badge variant="secondary">HR-консалтинг</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Отрасли</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Торговля</Badge>
                    <Badge variant="secondary">Строительство</Badge>
                    <Badge variant="secondary">Производство</Badge>
                    <Badge variant="secondary">IT и офис</Badge>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-slate-600">Клиентов довольны результатом</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">3 дня</div>
                  <div className="text-sm text-slate-600">Средний срок закрытия вакансии</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-slate-600">Компаний-партнёров</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/b33c4772-febe-4660-b59e-4da780d75723/files/3c2e6008-cad0-4141-b41c-087c369e6197.jpg"
                alt="Команда агентства"
                className="rounded-2xl shadow-lg w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Комплексные кадровые решения для бизнеса любого масштаба
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Аутсорсинг персонала</CardTitle>
                <CardDescription>
                  Передайте непрофильные функции нам. Мы берём на себя весь цикл: найм, оформление, управление и оплату труда.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-blue-500" /> Складской и производственный персонал</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-blue-500" /> Уборщики, разнорабочие, грузчики</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-blue-500" /> Полное кадровое сопровождение</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-blue-500" /> Снижение затрат до 30%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="UserCheck" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Аутстаффинг</CardTitle>
                <CardDescription>Сотрудники работают у вас, но числятся в штате нашей компании. Экономия на налогах и кадровом документообороте.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-purple-500" /> Оформление по ТК РФ</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-purple-500" /> Зарплатный проект</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-purple-500" /> Ведение трудовых книжек</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-purple-500" /> Налоговая оптимизация</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Search" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Подбор персонала</CardTitle>
                <CardDescription>Найдём нужного специалиста в короткие сроки. Гарантия замены в течение 3 месяцев.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-green-500" /> Рабочий и линейный персонал</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-green-500" /> Менеджеры среднего звена</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-green-500" /> Проверка рекомендаций</li>
                  <li className="flex items-center gap-2"><Icon name="Check" className="h-4 w-4 text-green-500" /> Гарантия 90 дней</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Наши кейсы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Реальные результаты для наших клиентов в Иркутске
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="https://cdn.poehali.dev/projects/b33c4772-febe-4660-b59e-4da780d75723/files/5be1c047-ca82-4599-87aa-8e4750392e84.jpg"
                  alt="Торговая сеть"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Торговая сеть «Байкал-Маркет»</CardTitle>
                    <CardDescription>
                      Закрыли 40 вакансий кассиров и продавцов за 5 рабочих дней в период сезонного роста продаж.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Аутсорсинг</Badge>
                  <Badge variant="outline">Торговля</Badge>
                  <Badge variant="outline">40 человек</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Экономия на кадровых расходах — 25%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600">
                <img
                  src="https://cdn.poehali.dev/projects/b33c4772-febe-4660-b59e-4da780d75723/files/67aa5f6c-146e-4255-b133-93fb52533551.jpg"
                  alt="Строительная компания"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>СК «ИркутскСтрой»</CardTitle>
                    <CardDescription>
                      Предоставили 80 разнорабочих и монтажников для строительного сезона. Аутстаффинг с полным кадровым ведением.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Аутстаффинг</Badge>
                  <Badge variant="outline">Строительство</Badge>
                  <Badge variant="outline">80 человек</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Проект закрыт в срок без задержек</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Нужен персонал?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Оставьте заявку — мы свяжемся в течение 30 минут и обсудим вашу задачу
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Работаем с компаниями в Иркутске и по всей России. Подберём оптимальное решение под ваш бюджет и сроки.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-300">+7 (395) 200-00-00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">info@irkutsk-outsource.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-slate-300">г. Иркутск, ул. Ленина, 1</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Расскажите о задаче — подберём подходящее решение
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Компания</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="ООО «Ваша компания»"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Телефон</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Что нужно?</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Опишите вашу задачу: сколько человек, какие специальности, сроки..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold text-white text-lg">ПЕРСОНАЛ24</div>
          <div className="text-sm">© 2024 ПЕРСОНАЛ24. Все права защищены.</div>
          <div className="text-sm">г. Иркутск · Работаем по всей России</div>
        </div>
      </footer>
    </div>
  )
}