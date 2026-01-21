import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.jpg";
import "./App.css";
import { useLanguage } from "./LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { detectLanguageFromIPWithRestrictions } from "./ipGeolocation";

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

// NOTE: Popup component commented out to fix "defined but never used" error.
// Uncomment this block if you add the Popup back into the JSX.
/*
const Popup = ({ title, message, onClose }) => {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
      justifyContent: "center", alignItems: "center", zIndex: 2000
    }}>
      <div style={{
        backgroundColor: "#fff", padding: "20px", borderRadius: "10px",
        maxWidth: "500px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}>
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose} style={{
          marginTop: "15px", padding: "10px 20px", cursor: "pointer",
          borderRadius: "5px", backgroundColor: "#007bff", color: "#fff", border: "none"
        }}>
          Close
        </button>
      </div>
    </div>
  );
};
*/

export default function Home() {
  const { t } = useLanguage();
  const [isChina, setIsChina] = useState(false);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const data = await detectLanguageFromIPWithRestrictions();
        if (data && data.countryCode === 'CN') {
          setIsChina(true);
        }
      } catch (e) {
        console.error("Location check failed", e);
      }
    };
    checkLocation();
  }, []);
  
  return (
    <>
      <Navigation />

      <div className="container text-center">
        <h1 className="mt-3">{t('welcomeTitle')}</h1>

        <p className="mt-3">
          {t('purchaseInfo')}{" "}
          {isChina ? (
            <a href="mailto:rhythmnexusco@gmail.com">rhythmnexusco@gmail.com</a>
          ) : (
            <a href="https://t.me/deltaboxstoresg" target="_blank" rel="noopener noreferrer">
              {t('telegramGroup')}
            </a>
          )}{" "}
          {t('forUpdates')}
        </p>

        <div className="home-section">
          <h2>{t('ourStores')}</h2>
          <div className="store-links">
            <a href="https://etsy.com/shop/RhythmNexus" className="store-link">
              <div className="store-card">
                <h3>{t('etsyStore')}</h3>
                <p>{t('internationalShipping')}</p>
              </div>
            </a>
            <a href="https://ebay.com/usr/RhythmNexus" className="store-link">
              <div className="store-card">
                <h3>{t('ebayStore')}</h3>
                <p>{t('internationalShipping')}</p>
              </div>
            </a>
            <a href="https://shopee.sg/RhythmNexus" className="store-link">
              <div className="store-card">
                <h3>{t('shopeeStore')}</h3>
                <p>{t('singaporeLocal')}</p>
              </div>
            </a>
            <a href="https://payhip.com/RhythmNexus" className="store-link">
              <div className="store-card">
                <h3>{t('payhipStore')}</h3>
                <p>{t('asiaOnly')}</p>
              </div>
            </a>
          </div>
        </div>

        <div className="home-section">
          <h2>{t('deliveryInfo')}</h2>
          <div className="info-links">
            <a href="https://docs.google.com/spreadsheets/d/1Q08_ePn3d0IEp8FU6hShyZ7ayEFbeh1k3SE1wX_T4TY/edit?gid=947614375#gid=947614375" className="info-link">
              {t('deliveryRates2026')}
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Q08_ePn3d0IEp8FU6hShyZ7ayEFbeh1k3SE1wX_T4TY/edit?gid=1938431161#gid=1938431161" className="info-link">
              {t('sgDeliveryRates')}
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Q08_ePn3d0IEp8FU6hShyZ7ayEFbeh1k3SE1wX_T4TY/edit?gid=389317311#gid=389317311" className="info-link">
              {t('speedPostRates')}
            </a>
          </div>
        </div>

        <AdBlock />

        <p className="text-muted">
          © {new Date().getFullYear()} Rhythm Nexus. {t('copyrightText')}
        </p>
      </div>
    </>
  );
}