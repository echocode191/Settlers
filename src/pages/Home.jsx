import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles.css';

const Home = () => {
  const funnyPhrases = [
    "🍲 Come hungry. Leave like a king!",
    "😋 Our chapatis might flirt with your taste buds!",
    "🛏️ Rooms so cozy, you’ll extend your stay accidentally.",
    "☕ Warning: Our tea may cause sudden smiles.",
    "🚀 Settlers — where your stomach settles happy!"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Year update
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Rotate welcome messages
    const msgInterval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % funnyPhrases.length);
    }, 4000);

    // Facebook SDK
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.onload = () => window.FB?.XFBML.parse();
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }

    return () => clearInterval(msgInterval);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        {/* Background Video */}
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="/assets/settlers.mp4" type="video/mp4" />
        </video>

        {/* Fallback hero content */}
        <div className="hero-content">
          <h2 className="animated-title">Welcome to Settlers Inn</h2>
          <p className="rotating-phrase">{funnyPhrases[phraseIndex]}</p>
          <p>Where Settlers Still Eat Like Kings.</p>
          <a href="/menu" className="hero-button">🍽️ View Our Menu</a><br /><br />
          <a href="/accommodation" className="hero-button book">🛏️ Book a Room</a>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section>
        <div className="intro">
          <p>
            Located in the heart of the Kenya Highlands, Settlers Inn is a family-owned gem serving authentic dishes, hearty portions, and warm hospitality.
          </p>
        </div>

        {/* FEATURED DISHES */}
        <div className="featured">
          {[
            { img: "tea.jpg", emoji: "☕", title: "Hot Kenyan Tea", desc: "Strong, smooth, and served the local way." },
            { img: "chapatis.jpg", emoji: "🥙", title: "Rolled Chapatis", desc: "Freshly made, soft, and golden brown." },
            { img: "ugali-fish.jpg", emoji: "🍛", title: "Ugali, Fish & Greens", desc: "A classic plate done Settlers-style — hearty & clean." },
            { img: "coffee.jpg", emoji: "☕", title: "Kenyan Coffee", desc: "Rich aroma, bold flavor. Served hot or iced." }
          ].map((dish, i) => (
            <div key={i} className="dish">
              <img src={`/assets/${dish.img}`} alt={dish.title} />
              <h3>{dish.emoji} {dish.title}</h3>
              <p>{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="reviews">
        <h2>💬 What People Are Saying</h2>
        <div className="review-grid">
          <div className="review">
            <p>“Best chapatis I’ve had in years. This place feels like home.”</p>
            <span>— Mercy K.</span>
          </div>
          <div className="review">
            <p>“The tea, the vibe, the rooms — everything’s on point!”</p>
            <span>— Brian N.</span>
          </div>
          <div className="review">
            <p>“Clean, affordable, and that fish was perfection.”</p>
            <span>— Jane M.</span>
          </div>
        </div>

        {/* Facebook Reviews */}
        <div className="fb-reviews">
          <h2>💬 Facebook Reviews (Live)</h2>
          <div className="fb-page"
            data-href="https://www.facebook.com/settlersinn1/"
            data-tabs="timeline"
            data-width="380"
            data-height="400"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/settlersinn1/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/settlersinn1/">Settlers Inn</a>
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />

      {/* QUICK ACCESS */}
      <div className="quick-access">
        <a href="tel:0748778388" title="Call Us">📞</a>
        <a href="https://maps.app.goo.gl/hvW5TubkM8WGcfAs5" target="_blank" rel="noreferrer" title="Find Us">🧭</a>
        <a href="/accommodation" title="Accommodation">🛏️</a>
        <a href="/gallery" title="Gallery">📷</a>
        <a href="/menu" title="Menu">🥘</a>
        <a href="https://wa.me/254748778388" target="_blank" rel="noreferrer" title="Chat on WhatsApp">💬</a>
      </div>

      {/* Copyright */}
      <span id="year" style={{ display: 'block', textAlign: 'center', marginTop: '2rem', color: '#666' }}></span>
    </>
  );
};

export default Home;
