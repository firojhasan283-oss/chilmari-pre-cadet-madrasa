import React from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>🖼️ ফটো গ্যালারী</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>মাদ্রাসার বিভিন্ন কার্যক্রমের ছবিসমূহ</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px', textAlign: 'center' }}>
        <p style={{ color: '#64748b' }}>খুব শীঘ্রই গ্যালারির ছবিগুলো আপলোড করা হবে।</p>
      </div>
    </div>
  );
}
