import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
        data-ad-format="auto"></ins>
    </div>
    <div className="my-4">
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6282638141528337"
        data-ad-slot="8978895256"
        data-ad-format="fluid"
        data-ad-layout-key="+30+qw+o-1s+9a"></ins>
    </div>
    <div className="my-4 text-center">
      <ins className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client="ca-pub-6282638141528337"
        data-ad-slot="6134983374"
        data-ad-format="fluid"
        data-ad-layout="in-article"></ins>
    </div>
  </>
);

// Modern Back Button
function BackButton() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate(-1)}
      className="back-button"
    >
      <span>&larr;</span> {t('backButton')}
    </button>
  );
}

function BlogIndex() {
  const { t } = useLanguage();
  
  const blogPosts = [
    {
      path: "singpost-epac",
      title: t('blogPost1Title'),
      description: t('blogPost1Desc')
    },
    {
      path: "speedpost-ems",
      title: t('blogPost2Title'),
      description: t('blogPost2Desc')
    },
    {
      path: "speedpost-express",
      title: t('blogPost3Title'),
      description: t('blogPost3Desc')
    },
    {
      path: "us-pddp",
      title: t('blogPost4Title'),
      description: t('blogPost4Desc')
    },
    {
      path: "eu-vat-ioss",
      title: t('blogPost5Title'),
      description: t('blogPost5Desc')
    },
    {
      path: "uk-vat-hmrc",
      title: t('blogPost6Title'),
      description: t('blogPost6Desc')
    },
    {
      path: "norway-voec",
      title: t('blogPost7Title'),
      description: t('blogPost7Desc')
    },
    {
      path: "swiss-vat",
      title: t('blogPost8Title'),
      description: t('blogPost8Desc')
    }
  ];

  return (
    <>
      <Navigation />
      <div className="container text-center">
        <h1 className="mt-3">{t('blogTitle')}</h1>
        <p className="text-muted mb-5">
          {t('blogSubtitle')}
        </p>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={post.path} className="blog-link">{t('readMore')} →</Link>
            </div>
          ))}
        </div>

        <AdBlock />
        <p className="text-muted">© {new Date().getFullYear()} Rhythm Nexus. {t('copyrightText')}</p>
      </div>
    </>
  );
}

// Layout wrapper to keep Navbar and Back Button consistent
const BlogPageLayout = ({ children }) => {
  const { t } = useLanguage();
  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <BackButton />
        <div className="blog-content-card">
          {children}
        </div>
        <p className="text-muted">© {new Date().getFullYear()} Rhythm Nexus. {t('copyrightText')}</p>
      </div>
    </>
  );
};

// --- Updated Functions with Full Content ---

function SingPostEPAC() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost1Title')}</h2>
      <p>{t('blogSingPostEPACContent1')}</p>
      <p>{t('blogSingPostEPACContent2')}</p>
      <p>{t('blogSingPostEPACContent3')}</p>
      <p>{t('blogSingPostEPACContent4')}</p>
      <p>{t('blogSingPostEPACContent5')}</p>
    </BlogPageLayout>
  );
}

function SpeedPostEMS() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost2Title')}</h2>
      <p>{t('blogSpeedPostEMSContent1')}</p>
      <p>{t('blogSpeedPostEMSContent2')}</p>
      <p>{t('blogSpeedPostEMSContent3')}</p>
      <p>{t('blogSpeedPostEMSContent4')}</p>
    </BlogPageLayout>
  );
}

function SpeedPostExpress() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost3Title')}</h2>
      <p>{t('blogSpeedPostExpressContent1')}</p>
      <p>{t('blogSpeedPostExpressContent2')}</p>
      <p>
        {t('blogSpeedPostExpressContent3')} <Link to="/track-your-item">{t('blogSpeedPostExpressContent3Link')}</Link>)
      </p>
    </BlogPageLayout>
  );
}

function USPDDP() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost4Title')}</h2>

      <p>{t('blogUSPDDPContent1')}</p>

      <h4>{t('blogUSPDDPContent2')}</h4>
      <ul>
        <li>{t('blogUSPDDPContent2List1')}</li>
        <li>{t('blogUSPDDPContent2List2')}</li>
        <li>{t('blogUSPDDPContent2List3')}</li>
      </ul>

      <p>{t('blogUSPDDPContent3')}</p>

      <p>{t('blogUSPDDPContent4')}</p>
    </BlogPageLayout>
  );
}

function EUVATIOSS() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost5Title')}</h2>

      <p>{t('blogEUIOSSContent1')}</p>

      <h4>{t('blogEUIOSSContent2')}</h4>
      <p>{t('blogEUIOSSContent3')}</p>
      <p>{t('blogEUIOSSContent4')}</p>

      <p>{t('blogEUIOSSContent5')}</p>
    </BlogPageLayout>
  );
}

function UKVATHMRC() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost6Title')}</h2>

      <p>{t('blogUKVATContent1')}</p>

      <p>{t('blogUKVATContent2')}</p>

      <p>{t('blogUKVATContent3')}</p>

      <p>{t('blogUKVATContent4')}</p>
    </BlogPageLayout>
  );
}

function NorwayVOEC() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost7Title')}</h2>
      <p>{t('blogNorwayVOECContent1')}</p>
      <p>{t('blogNorwayVOECContent2')}</p>
      <p>{t('blogNorwayVOECContent3')}</p>
    </BlogPageLayout>
  );
}

function SwissVAT() {
  const { t } = useLanguage();
  return (
    <BlogPageLayout>
      <h2>{t('blogPost8Title')}</h2>
      <p>{t('blogSwissVATContent1')}</p>
      <p>{t('blogSwissVATContent2')}</p>
      <p>{t('blogSwissVATContent3')}</p>
    </BlogPageLayout>
  );
}

export default function Blog() {
  return (
    <Routes>
      <Route index element={<BlogIndex />} />
      <Route path="singpost-epac" element={<SingPostEPAC />} />
      <Route path="speedpost-ems" element={<SpeedPostEMS />} />
      <Route path="speedpost-express" element={<SpeedPostExpress />} />
      <Route path="us-pddp" element={<USPDDP />} />
      <Route path="eu-vat-ioss" element={<EUVATIOSS />} />
      <Route path="uk-vat-hmrc" element={<UKVATHMRC />} />
      <Route path="norway-voec" element={<NorwayVOEC />} />
      <Route path="swiss-vat" element={<SwissVAT />} />
    </Routes>
  );
}