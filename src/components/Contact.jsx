import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>📞 যোগাযোগ</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>আমাদের সাথে যোগাযোগ করুন</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>
      <div style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px', background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
        <h3 style={{ color: '#14532d' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h3>
        <p style={{ color: '#475569' }}>ঠিকানা: চিলমারী, কুড়িগ্রাম, বাংলাদেশ</p>
        <p style={{ color: '#475569' }}>মোবাইল: +880 1521-553003</p>
      </div>
    </div>
  );
}
