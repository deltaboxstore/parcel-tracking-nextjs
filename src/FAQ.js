import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.jpg";
import "./App.css";
import { useLanguage } from "./LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

// --- Components ---

const Navigation = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Rhythm Nexus" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">{t('home')}</Link>
        <Link to="/blog" className="nav-link">{t('blog')}</Link>
        <Link to="/about" className="nav-link">{t('aboutUs')}</Link>
        <Link to="/FAQ" className="nav-link">{t('faq')}</Link>
        <Link to="/contact" className="nav-link">{t('contact')}</Link>
        <Link to="/track-your-item" className="nav-link highlight">{t('trackPackage')}</Link>
        <LanguageSelector />
      </div>
    </nav>
  );
};

const AdBlock = () => (
  <>
    <div className="my-4">
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6282638141528337"
        data-ad-slot="5003292159"
        data-ad-format="auto">
      </ins>
    </div>
    <div className="my-4">
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6282638141528337"
        data-ad-slot="8978895256"
        data-ad-format="fluid"
        data-ad-layout-key="+30+qw+o-1s+9a">
      </ins>
    </div>
    <div className="my-4 text-center">
      <ins className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client="ca-pub-6282638141528337"
        data-ad-slot="6134983374"
        data-ad-format="fluid"
        data-ad-layout="in-article">
      </ins>
    </div>
  </>
);

export default function FAQ() {
  const { t } = useLanguage();
  
  const faqData = [
    {
      question: t('faqQ1'),
      answer: t('faqA1')
    },
    {
      question: t('faqQ2'),
      answer: t('faqA2')
    },
    {
      question: t('faqQ3'),
      answer: t('faqA3')
    },
    {
      question: t('faqQ4'),
      answer: t('faqA4')
    },
    {
      question: t('faqQ5'),
      answer: t('faqA5')
    },
    {
      question: t('faqQ6'),
      answer: t('faqA6')
    },
    {
      question: t('faqQ7'),
      answer: t('faqA7')
    },
    {
      question: t('faqQ8'),
      answer: t('faqA8')
    }
  ];

  return (
    <>
      <Navigation />

      <div className="container mt-5 text-center">
        <h1 className="text-center">{t('faqTitle')}</h1>

        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-card">
              <h3>{faq.question}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <AdBlock />

        <p className="text-muted">
          © {new Date().getFullYear()} Rhythm Nexus. {t('copyrightText')}
        </p>
      </div>
    </>
  );
}