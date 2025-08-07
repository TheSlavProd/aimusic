import styles from './ReviewsSection.module.scss';
import { FaPlay } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Анна Петрова",
    avatar: "👩",
    rating: "⭐⭐⭐⭐⭐",
    text: "Заказала песню на день рождения мужа. Результат превзошел все ожидания! Песня получилась очень душевная и персонализированная.",
  },
  {
    name: "Михаил Сидоров", 
    avatar: "👨",
    rating: "⭐⭐⭐⭐⭐",
    text: "Отличный сервис! Быстро, качественно, профессионально. Рекомендую всем, кто хочет удивить близких.",
  },
  {
    name: "Елена Козлова",
    avatar: "👩‍🦰", 
    rating: "⭐⭐⭐⭐⭐",
    text: "Создали потрясающую рекламную песню для нашего бизнеса. ROI превзошел ожидания в 3 раза!",
  }
];

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        <h2 className={styles.reviewsTitle}>ОТЗЫВЫ</h2>
        {/* Видео отзывы */}
        <div className={styles.videoReviewsGrid}>
          {[1, 2].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={styles.videoReviewCard}
            >
              <div className={styles.videoReviewIcon}>
                <FaPlay />
              </div>
              <div className={styles.videoReviewTitle}>Видео отзыв {i}</div>
              <div className={styles.videoReviewDesc}>Клиент делится впечатлениями</div>
            </motion.div>
          ))}
        </div>
        {/* Текстовые отзывы с каруселью */}
        <div className={styles.textReviewsCarousel}>
          <motion.div 
            key={currentReview}
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className={styles.textReviewCard}
          >
            <div className={styles.textReviewHeader}>
              <div className={styles.textReviewAvatar}>{reviews[currentReview].avatar}</div>
              <div>
                <div className={styles.textReviewName}>{reviews[currentReview].name}</div>
                <div className={styles.textReviewRating}>{reviews[currentReview].rating}</div>
              </div>
            </div>
            <div className={styles.textReviewText}>&quot;{reviews[currentReview].text}&quot;</div>
          </motion.div>
          <div className={styles.textReviewNav}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={
                  styles.textReviewNavBtn + (currentReview === index ? ' active' : '')
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

