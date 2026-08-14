import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { profile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>⚙️ অ্যাডমিন ড্যাশবোর্ড</h1>
        <button onClick={handleLogout} style={{ background: '#dc2626', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>লগআউট</button>
      </div>
      <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 20px', background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <h2>স্বাগতম, {profile?.name || 'অ্যাডমিন'}!</h2>
        <p style={{ color: '#64748b' }}>এখান থেকে আপনি মাদ্রাসার শিক্ষক, ছাত্র-ছাত্রী ও ভর্তি তথ্য ম্যানেজ করতে পারবেন।</p>
        <div style={{ marginTop: '20px' }}>
          <Link to="/" style={{ background: '#16a34a', color: 'white', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold' }}>হোমপেজে যান</Link>
        </div>
      </div>
    </div>
  );
}
