'use client';

import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tariffs', 'portfolio', 'services', 'promotion', 'reviews'];
      const scrollY = window.scrollY;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY + 200 && scrollY < section.offsetTop + section.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviews = [
    {
      name: "Анна Петрова",
      avatar: "👩",
      rating: "⭐⭐⭐⭐⭐",
      text: "Заказала песню на день рождения мужа. Результат превзошел все ожидания! Песня получилась очень душевная и персонализированная.",
      video: "#"
    },
    {
      name: "Михаил Сидоров", 
      avatar: "👨",
      rating: "⭐⭐⭐⭐⭐",
      text: "Отличный сервис! Быстро, качественно, профессионально. Рекомендую всем, кто хочет удивить близких.",
      video: "#"
    },
    {
      name: "Елена Козлова",
      avatar: "👩‍🦰", 
      rating: "⭐⭐⭐⭐⭐",
      text: "Создали потрясающую рекламную песню для нашего бизнеса. ROI превзошел ожидания в 3 раза!",
      video: "#"
    }
  ];

  const portfolioItems = [
    {
      title: "День рождения",
      category: "Поздравительные песни",
      image: "🕯️",
      color: "from-yellow-400 to-orange-500",
      link: "https://cloud.example.com/birthday-songs"
    },
    {
      title: "8 марта", 
      category: "Праздничные песни",
      image: "🌷",
      color: "from-pink-400 to-red-500",
      link: "https://cloud.example.com/march8-songs"
    },
    {
      title: "Рекламные песни",
      category: "Бизнес",
      image: "🎤",
      color: "from-gray-600 to-gray-800", 
      link: "https://cloud.example.com/ad-songs"
    },
    {
      title: "Гендер пути",
      category: "Авторские песни",
      image: "🎈",
      color: "from-blue-400 to-blue-600",
      link: "https://cloud.example.com/author-songs"
    }
  ];

  return (
    <div className="scroll-smooth">


      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-transparent p-4 flex justify-center gap-6">
        {['home', 'tariffs', 'portfolio', 'services', 'promotion', 'reviews'].map((id) => (
          <ScrollLink
            key={id}
            to={id}
            smooth={true}
            duration={500}
            className={`cursor-pointer font-semibold text-sm md:text-base transition-colors text-white hover:text-orange-300 ${activeSection === id ? 'text-orange-400' : ''}`}
          >
            {id === 'home' ? 'ГЛАВНАЯ' : 
             id === 'tariffs' ? 'ТАРИФЫ' :
             id === 'portfolio' ? 'ПОРТФОЛИО' :
             id === 'services' ? 'УСЛУГИ' :
             id === 'promotion' ? 'АКЦИЯ' :
             id === 'reviews' ? 'ОТЗЫВЫ' : id.toUpperCase()}
          </ScrollLink>
        ))}
      </nav>

      {/* Главная секция */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 flex items-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-white lg:w-1/2 mb-8 lg:mb-0">
            {/* Логотип */}
            <div className="mb-8">
              <div className="flex items-center">
                <Image 
                  src="/logo.svg" 
                  alt="AI Music Studio Logo" 
                  width={64} 
                  height={64} 
                  className="mr-4"
                />
                <h1 className="text-2xl font-bold">AI Music Studio</h1>
              </div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              ПЕСНИ НА ЗАКАЗ
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.3 }} 
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              С ПОМОЩЬЮ AI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.6 }} 
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Кто мы и что делаем: Создаем уникальные песни с использованием искусственного интеллекта. 
              Поздравительные, рекламные и авторские песни под ключ.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.9 }} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                ЗАКАЗАТЬ В ТЕЛЕГРАМ
              </a>
              <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center">
                ЗАКАЗАТЬ В WHATSAPP
              </a>
            </motion.div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Заглушка для фото девушки с микрофоном */}
              <div className="w-80 h-96 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">🎤</span>
                  </div>
                  <p className="text-lg font-semibold">Девушка с микрофоном</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section id="tariffs" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">ТАРИФЫ</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Эконом */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ЭКОНОМ</h3>
              <div className="text-3xl font-bold text-gray-800 mb-6">3 500 ₽</div>
              <ul className="text-gray-600 mb-8 text-left space-y-2">
                <li>• Песня до 3 минут</li>
                <li>• Базовый текст</li>
                <li>• Простая аранжировка</li>
                <li>• 1 правка</li>
                <li>• Готовность за 3 дня</li>
              </ul>
              <a href="https://t.me/yourchannel?text=Хочу заказать тариф ЭКОНОМ" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors block">
                ЗАКАЗАТЬ
              </a>
            </motion.div>

            {/* Стандарт */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg border-2 border-orange-300"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">СТАНДАРТ</h3>
              <div className="text-3xl font-bold text-gray-800 mb-6">6 000 ₽</div>
              <ul className="text-gray-600 mb-8 text-left space-y-2">
                <li>• Песня до 5 минут</li>
                <li>• Персонализированный текст</li>
                <li>• Профессиональная аранжировка</li>
                <li>• 3 правки</li>
                <li>• Готовность за 2 дня</li>
                <li>• Бонус: минусовая версия</li>
              </ul>
              <a href="https://t.me/yourchannel?text=Хочу заказать тариф СТАНДАРТ" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors block">
                ЗАКАЗАТЬ
              </a>
            </motion.div>

            {/* Премиум */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ПРЕМИУМ</h3>
              <div className="text-3xl font-bold text-gray-800 mb-6">10 000 ₽</div>
              <ul className="text-gray-600 mb-8 text-left space-y-2">
                <li>• Песня любой длительности</li>
                <li>• Эксклюзивный текст</li>
                <li>• Сложная аранжировка</li>
                <li>• Неограниченные правки</li>
                <li>• Готовность за 1 день</li>
                <li>• Минусовая версия</li>
                <li>• Инструментальная версия</li>
                <li>• Приоритетная поддержка</li>
              </ul>
              <a href="https://t.me/yourchannel?text=Хочу заказать тариф ПРЕМИУМ" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors block">
                ЗАКАЗАТЬ
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">ПОРТФОЛИО</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden border-2 border-white hover:border-orange-400 transition-colors cursor-pointer group"
                onClick={() => window.open(item.link, '_blank')}
              >
                <div className={`w-full h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  <span className="text-4xl group-hover:scale-110 transition-transform">{item.image}</span>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                    <FaPlay className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white text-center font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-400 text-center text-sm">{item.category}</p>
                  <div className="flex justify-center mt-2">
                    <FaExternalLinkAlt className="text-orange-400 text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги Canva */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-12 text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Подписка на Canva Pro</h3>
              <p className="text-xl text-gray-600 mb-8">
                Помимо создания музыкального контента, предлагаем подписку на Canva с индивидуальной поддержкой 
                и оформлением дизайнов под ваши задачи. Создаем логотипы, баннеры, презентации и многое другое.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 mb-3">Что включено:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Доступ к Canva Pro</li>
                    <li>• Индивидуальная поддержка</li>
                    <li>• Создание дизайнов под заказ</li>
                    <li>• Обучение работе с платформой</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 mb-3">Стоимость:</h4>
                  <div className="text-2xl font-bold text-orange-600 mb-2">2 500 ₽/месяц</div>
                  <p className="text-gray-600">или 25 000 ₽/год (экономия 5 000 ₽)</p>
                </div>
              </div>
              <a href="https://t.me/yourchannel?text=Интересует подписка на Canva" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors inline-block">
                ЗАКАЗАТЬ ПОДПИСКУ
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Акция */}
      <section id="promotion" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">АКЦИЯ</h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-orange-500 rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400 rounded-full translate-y-12 -translate-x-12"></div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
                Скидка 20% на первую песню!
              </h3>
              <p className="text-xl text-white mb-6 relative z-10">
                Успейте заказать до конца месяца
              </p>
              <a href="https://t.me/yourchannel?text=Хочу воспользоваться скидкой 20%" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-500 font-bold py-3 px-8 rounded-lg text-lg transition-colors inline-block relative z-10 hover:bg-gray-100">
                ПОЛУЧИТЬ СКИДКУ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">ОТЗЫВЫ</h2>
          
          {/* Видео отзывы */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Видео отзывы</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-gray-800 rounded-2xl p-6 text-center"
                >
                  <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <FaPlay className="text-white text-4xl" />
                  </div>
                  <p className="text-white font-semibold">Видео отзыв {i}</p>
                  <p className="text-gray-400 text-sm">Клиент делится впечатлениями</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Текстовые отзывы с каруселью */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Текстовые отзывы</h3>
            <div className="relative">
              <motion.div 
                key={currentReview}
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-2xl">{reviews[currentReview].avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{reviews[currentReview].name}</h4>
                    <div className="text-yellow-500">{reviews[currentReview].rating}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic">"{reviews[currentReview].text}"</p>
              </motion.div>
              
              {/* Навигация по отзывам */}
              <div className="flex justify-center mt-6 gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentReview === index ? 'bg-orange-500' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Связаться с нами</h2>
        <p className="text-white text-lg mb-8">Выберите удобный способ связи для заказа песни</p>
        <div className="flex justify-center gap-8 text-4xl mb-8">
          <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300 transition-colors p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20">
            <FaTelegramPlane />
          </a>
          <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300 transition-colors p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-300 transition-colors p-4 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20">
            <FaInstagram />
          </a>
        </div>
        <div className="text-white text-sm">
          <p>© 2024 AI Music Studio. Все права защищены.</p>
        </div>
      </section>

      {/* Всплывающая реклама */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="fixed bottom-4 right-4 bg-orange-500 border border-orange-300 rounded-xl shadow-lg p-4 max-w-xs z-50"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl">🎁</span>
          <button className="text-white hover:text-gray-200">×</button>
        </div>
        <p className="text-white font-semibold text-sm">
          Акция месяца: Закажи 2 песни — получи 3-ю бесплатно!
        </p>
        <a href="https://t.me/yourchannel?text=Хочу акцию 2+1" target="_blank" rel="noopener noreferrer" className="block mt-2 text-center bg-white text-orange-500 py-2 px-4 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors">
          ПОЛУЧИТЬ
        </a>
      </motion.div>
    </div>
  );
}
