import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = useAuth();

  const whatsappNumber = "8801918568313";

  return (
    <div style={{ fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif", backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', margin: 0, padding: 0, position: 'relative' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; scroll-behavior: smooth; }
        .nav-link { color: #334155; text-decoration: none; font-weight: 600; transition: color 0.2s; display: block; }
        .nav-link:hover { color: #15803d; }
        .btn-primary { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; border: none; padding: 10px 20px; border-radius: 10px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; font-size: 14px; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(22, 163, 74, 0.35); }
        .btn-login { background: #f1f5f9; color: #1e293b; border: 1px solid #cbd5e1; padding: 8px 16px; border-radius: 10px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-size: 14px; transition: background 0.2s; }
        .btn-login:hover { background: #e2e8f0; }
        .card { background: #ffffff; border-radius: 18px; padding: 24px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; }
        .badge { background: #dcfce7; color: #15803d; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-block; }
        
        .live-chat-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background-color: #25D366;
          color: white;
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          font-weight: bold;
          font-size: 14px;
          z-index: 1000;
        }
      `}</style>

      {/* টপ কন্টাক্ট বার */}
      <div style={{ backgroundColor: '#14532d', color: '#f0fdf4', padding: '8px 20px', fontSize: '13px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div>📍 চিলমারী, কুড়িগ্রাম, বাংলাদেশ</div>
          <div>📞 যোগাযোগ: <a href="tel:+8801521553003" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'none' }}>+880 1521-553003</a></div>
        </div>
      </div>

      {/* নেভিগেশন বার */}
      <nav style={{ backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #16a34a, #15803d)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>
              চ
            </div>
            <div>
              <h1 style={{ fontSize: '16px', fontWeight: '800', color: '#14532d', margin: 0, lineHeight: 1.2 }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h1>
              <p style={{ fontSize: '10px', color: '#64748b', margin: 0, fontStyle: 'italic' }}>দ্বীন ও আধুনিক শিক্ষার মেলবন্ধন</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/login" className="btn-login">🔑 লগইন</Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              style={{ background: '#f1f5f9', border: 'none', padding: '8px 12px', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', color: '#1e293b' }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>হোম</Link>
            <Link to="/teachers" className="nav-link" onClick={() => setMobileMenuOpen(false)}>শিক্ষকবৃন্দ</Link>
            <Link to="/students" className="nav-link" onClick={() => setMobileMenuOpen(false)}>ছাত্র-ছাত্রী</Link>
            <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>গ্যালারী</Link>
            <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>যোগাযোগ</Link>
            <Link to="/admission" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>অনলাইন ভর্তি</Link>
          </div>
        )}
      </nav>

      {/* হিরো সেকশন */}
      <header style={{ background: 'linear-gradient(135deg, #064e3b 0%, #14532d 50%, #166534 100%)', color: 'white', padding: '50px 20px 70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', marginBottom: '16px' }}>🎓 নতুন সেশনে ভর্তি চলছে</span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '800', margin: '16px 0', lineHeight: '1.3' }}>সুশিক্ষা ও সুন্নাত ভিত্তিক আদর্শ জীবন গড়ার বিশ্বস্ত প্রতিষ্ঠান</h2>
          <p style={{ fontSize: '15px', color: '#ecfdf5', lineHeight: '1.7', marginBottom: '28px' }}>আমরা দিচ্ছি আধুনিক ক্বওমী ও জেনারেল শিক্ষা ব্যবস্থার এক অনন্য সমন্বয়।</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission" className="btn-primary" style={{ backgroundColor: '#ffffff', color: '#14532d', fontWeight: 'bold' }}>ভর্তি আবেদন করুন</Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1200px', margin: '-30px auto 40px auto', padding: '0 16px', position: 'relative', zIndex: 10 }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#166534', marginTop: 0 }}>স্বাগতম চিলমারী প্রি ক্যাডেট মাদ্রাসায়</h3>
          <p style={{ color: '#334155' }}>উপরের মেনু থেকে শিক্ষকবৃন্দ, ছাত্র-ছাত্রী, গ্যালারি ও ভর্তি আবেদন পেজে যেতে পারেন।</p>
        </div>
      </main>

      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="live-chat-btn">
        <span>💬</span><span>লাইভ চ্যাট</span>
      </a>

      <Footer />
    </div>
  );
}
