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
            <img src="https://cdn.poehali.dev/projects/b33c4772-febe-4660-b59e-4da780d75723/bucket/fe79ff39-e7de-4870-a153-eb8a08af3487.png" alt="ПЕРСОНАЛ24" className="h-10 w-auto" />
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

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-10">
            С 2019 года помогаем с внештатным персоналом в любой точке РФ
          </h2>

          {/* Карта */}
          <div className="relative w-full mb-10 rounded-2xl overflow-hidden bg-[#ddeeff]">
            <svg viewBox="0 0 1000 550" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Фон карты */}
              <rect width="1000" height="550" fill="#ddeeff" />
              {/* Силуэт России — упрощённый */}
              <path d="M120,180 L140,160 L180,150 L220,145 L260,140 L300,138 L340,135 L380,133 L420,130 L460,128 L500,125 L540,123 L580,120 L620,118 L660,115 L700,113 L740,112 L780,115 L820,120 L860,125 L890,135 L910,150 L920,165 L915,180 L900,195 L880,205 L870,220 L875,240 L870,260 L855,275 L840,285 L820,295 L800,305 L780,315 L760,320 L740,325 L720,330 L700,335 L680,340 L660,342 L640,345 L620,348 L600,350 L580,352 L560,355 L540,358 L520,362 L500,365 L480,368 L460,370 L440,372 L420,375 L400,378 L380,382 L360,385 L340,388 L320,390 L300,392 L280,395 L260,398 L240,400 L220,402 L200,405 L180,408 L160,410 L140,408 L120,400 L105,385 L100,370 L105,355 L110,340 L108,320 L110,300 L112,280 L115,260 L118,240 L120,220 L118,200 Z" fill="#a8d4f0" stroke="#7ab8e0" strokeWidth="2"/>
              {/* Дополнительный восточный выступ */}
              <path d="M840,285 L860,270 L880,255 L900,245 L920,240 L940,238 L960,240 L975,250 L980,265 L975,280 L960,295 L945,305 L930,310 L915,308 L900,305 L880,300 L860,295 Z" fill="#a8d4f0" stroke="#7ab8e0" strokeWidth="2"/>
              <path d="M920,165 L940,155 L960,150 L975,155 L985,168 L980,182 L965,190 L948,192 L932,188 L920,180 Z" fill="#a8d4f0" stroke="#7ab8e0" strokeWidth="2"/>

              {/* Города — крупные */}
              {[
                {x:340, y:230, label:"Москва", big:true},
                {x:295, y:190, label:"Санкт-Петербург", big:true},
                {x:480, y:255, label:"Казань", big:true},
                {x:500, y:295, label:"Екатеринбург", big:true},
                {x:560, y:340, label:"Новосибирск", big:true},
                {x:630, y:320, label:"Красноярск", big:true},
                {x:685, y:360, label:"Иркутск", big:true, highlight:true},
                {x:820, y:250, label:"Якутск", big:true},
                {x:900, y:370, label:"Владивосток", big:true},
                {x:230, y:300, label:"Ростов-на-Дону", big:false},
                {x:390, y:265, label:"Нижний Новгород", big:false},
                {x:440, y:235, label:"Ярославль", big:false},
                {x:310, y:260, label:"Воронеж", big:false},
                {x:310, y:275, label:"Белгород", big:false},
                {x:255, y:315, label:"Краснодар", big:false},
                {x:540, y:270, label:"Пермь", big:false},
                {x:520, y:255, label:"Ижевск", big:false},
                {x:580, y:295, label:"Омск", big:false},
                {x:610, y:305, label:"Томск", big:false},
                {x:720, y:340, label:"Ангарск", big:false},
                {x:870, y:320, label:"Хабаровск", big:false},
                {x:620, y:285, label:"Тюмень", big:false},
                {x:660, y:290, label:"Сургут", big:false},
                {x:460, y:290, label:"Уфа", big:false},
                {x:430, y:305, label:"Самара", big:false},
                {x:450, y:320, label:"Оренбург", big:false},
                {x:480, y:310, label:"Челябинск", big:false},
                {x:150, y:195, label:"Калининград", big:false},
              ].map((city, i) => (
                <g key={i}>
                  <circle
                    cx={city.x} cy={city.y} r={city.big ? 5 : 3}
                    fill={city.highlight ? "#1d4ed8" : city.big ? "#1d4ed8" : "#60a5fa"}
                    stroke="white" strokeWidth="1.5"
                  />
                  <text
                    x={city.x + 7} y={city.y + 4}
                    fontSize={city.big ? "11" : "8"}
                    fontWeight={city.big ? "bold" : "normal"}
                    fill={city.highlight ? "#1d4ed8" : "#1e293b"}
                    fontFamily="sans-serif"
                  >{city.label}</text>
                </g>
              ))}
            </svg>
          </div>

          {/* Три карточки */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-14 h-14 shrink-0 text-slate-400">
                <Icon name="Map" className="w-12 h-12" />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Оказываем аутсорсинговые услуги в более чем <span className="font-bold text-slate-900">100 городах России</span>
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-14 h-14 shrink-0 text-slate-400">
                <Icon name="SearchCheck" className="w-12 h-12" />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Более <span className="font-bold text-slate-900">40 000 человек</span> разных специальностей в нашей базе
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-14 h-14 shrink-0 text-slate-400">
                <Icon name="Clock" className="w-12 h-12" />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-bold text-slate-900">90%</span> наших специалистов готовы выехать на ваш объект <span className="font-bold text-slate-900">уже завтра</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personnel Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">
            Предоставляем персонал для строительных работ, производства, складов и управленческих задач
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Рабочий персонал */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-blue-600">Рабочий персонал</h3>
                <Icon name="HardHat" className="h-10 w-10 text-slate-300" />
              </div>
              <p className="text-slate-500 text-sm mb-5">
                Надёжные исполнители на самые разнообразные работы: от разнорабочих до электриков и монтажников. Быстро закрываем объёмы — как сезонные задачи, так и долгосрочные проекты.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <span className="text-blue-600 hover:underline cursor-pointer">Разнорабочие</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Грузчики</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Сварщики</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Электрики</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Водители</span>
                <span className="text-blue-600 font-medium hover:underline cursor-pointer">Смотреть весь рабочий персонал (50+ специализаций)</span>
              </div>
            </div>

            {/* Строительный персонал */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-900">Строительный персонал</h3>
                <Icon name="Hammer" className="h-10 w-10 text-slate-300" />
              </div>
              <p className="text-slate-500 text-sm mb-5">
                У нас есть специалисты по всем этапам стройки: отделочники, маляры, сантехники, электрики и др. Обеспечим качественное выполнение на ваших объектах в срок и с нужной квалификацией.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <span className="text-blue-600 hover:underline cursor-pointer">Отделочники</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Маляры</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Монтажники</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Электрики</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Водопроводчик (Сантехник)</span>
                <span className="text-blue-600 font-medium hover:underline cursor-pointer">Смотреть весь строительный персонал (30+ специализаций)</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Производственный персонал */}
            <div className="border border-slate-200 rounded-2xl p-6 bg-blue-50 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-blue-600">Производственный персонал</h3>
                <Icon name="Settings" className="h-10 w-10 text-slate-300" />
              </div>
              <p className="text-slate-500 text-sm mb-5">
                Инженеры, токари, слесари и другие профессионалы для предприятий и производственных линий. Подбираем людей с учётом стандартов вашей отрасли и специфики оборудования.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <span className="text-blue-600 hover:underline cursor-pointer">Фрезеровщик</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Столяр</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Инженер</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Электромонтажник</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Слаботочники</span>
                <span className="text-blue-600 font-medium hover:underline cursor-pointer">Смотреть весь производственный персонал</span>
              </div>
            </div>

            {/* Складской персонал */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-900">Складской персонал</h3>
                <Icon name="Package" className="h-10 w-10 text-slate-300" />
              </div>
              <p className="text-slate-500 text-sm mb-5">
                Комплектовщики, отборщики, упаковщики и операторы складской логистики — специалисты, которые обеспечивают точность и порядок. Помогаем ускорить обработку, погрузку и отправку товаров.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <span className="text-blue-600 hover:underline cursor-pointer">Комплектовщик</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Фасовщик</span>
                <span className="text-slate-700">Сборщик</span>
                <span className="text-slate-700">Упаковщик</span>
                <span className="text-slate-700">Отборщик</span>
                <span className="text-slate-700">Водитель погрузчика</span>
              </div>
            </div>

            {/* Управленческий персонал */}
            <div className="border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-900">Управленческий персонал</h3>
                <Icon name="Briefcase" className="h-10 w-10 text-slate-300" />
              </div>
              <p className="text-slate-500 text-sm mb-5">
                Руководители разного уровня: мастера участка, прорабы, начальники производства. Подбираем тех, кто умеет организовать процессы, управлять людьми и достигать целей с командой.
              </p>
              <div className="flex flex-col gap-2 text-sm">
                <span className="text-slate-700">Начальник участка</span>
                <span className="text-slate-700">Прораб</span>
                <span className="text-slate-700">Мастер участка</span>
                <span className="text-blue-600 hover:underline cursor-pointer">Бригадир</span>
                <span className="text-slate-700">Начальник производства</span>
                <span className="text-blue-600 font-medium hover:underline cursor-pointer">Смотреть весь управленческий персонал</span>
              </div>
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
                    <p className="text-slate-300">info@personal24.ru</p>
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
          <img src="https://cdn.poehali.dev/projects/b33c4772-febe-4660-b59e-4da780d75723/bucket/fe79ff39-e7de-4870-a153-eb8a08af3487.png" alt="ПЕРСОНАЛ24" className="h-8 w-auto brightness-0 invert" />
          <div className="text-sm">© 2024 ПЕРСОНАЛ24. Все права защищены.</div>
          <div className="text-sm">г. Иркутск · Работаем по всей России</div>
        </div>
      </footer>
    </div>
  )
}