"use client";

import { useEffect, useState } from "react";
import TariffsSection from "./components/TariffsSection/TariffsSection.jsx";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection.jsx";
import ServicesSection from "./components/ServicesSection/ServicesSection.jsx";
import PromotionSection from "./components/PromotionSection/PromotionSection.jsx";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection.jsx";
import ContactsSection from "./components/ContactsSection/ContactsSection.jsx";
import PromoPopup from "./components/PromoPopup/PromoPopup.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import NavMenu from "./components/NavMenu/NavMenu.jsx";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "tariffs",
        "portfolio",
        "services",
        "promotion",
        "reviews",
      ];
      const scrollY = window.scrollY;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollY + 200 &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Навигация */}
      <NavMenu />

      {/* Главная секция */}
      <HeroSection />

      {/* Тарифы */}
      <TariffsSection />

      {/* Портфолио */}
      <PortfolioSection />

      {/* Услуги Canva */}
      <ServicesSection />

      {/* Акция */}
      <PromotionSection />

      {/* Отзывы */}
      <ReviewsSection />

      {/* Контакты */}
      <ContactsSection />

      {/* Всплывающая реклама */}
      {/* <PromoPopup /> */}
    </div>
  );
}
