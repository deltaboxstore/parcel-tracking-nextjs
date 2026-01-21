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

export default function About() {
  const { t } = useLanguage();
  
  return (
    <>
      <Navigation />
      
      <div className="container text-center">
        <h1 className="mt-3">{t('aboutTitle')}</h1>

        <div className="about-content-card">
          <p>
            {t('aboutP1')}
          </p>

          <p>
            {t('aboutP2')}
          </p>

          <p>
            {t('aboutP3')}
          </p>

          <p>
            {t('aboutP4')}
          </p>
        </div>
        
        <AdBlock />

        <p className="text-muted">
          © {new Date().getFullYear()} Rhythm Nexus. {t('copyrightText')}
        </p>
      </div>
    </>
  );
}