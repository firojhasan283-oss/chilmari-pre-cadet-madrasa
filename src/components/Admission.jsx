import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

export default function Admission() {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('Play');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');

  const handleAdmission = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('admissions').insert([
      { name, class: studentClass, father_name: fatherName, mother_name: motherName, phone, village }
    ]);
    if (!error) {
      alert('আপনার ভর্তির আবেদন সফলভাবে জমা হয়েছে!');
      setName(''); setFatherName(''); setMotherName(''); setPhone(''); setVillage('');
    } else {
      alert('ত্রুটি: ' + error.message);
    }
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>📝 অনলাইন ভর্তি আবেদন</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>
      <div style={{ maxWidth: '600px', margin: '30px auto', padding: '0 20px' }}>
        <form onSubmit={handleAdmission} style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="শিক্ষার্থীর নাম" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
          <select value={studentClass} onChange={e => setStudentClass(e.target.value)} style={inputStyle}>
            {['Play', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(c => <option key={c} value={c}>শ্রেণি: {c}</option>)}
          </select>
          <input type="text" placeholder="বাবার নাম" value={fatherName} onChange={e => setFatherName(e.target.value)} required style={inputStyle} />
          <input type="text" placeholder="মায়ের নাম" value={motherName} onChange={e => setMotherName(e.target.value)} required style={inputStyle} />
          <input type="text" placeholder="মোবাইল নম্বর" value={phone} onChange={e => setPhone(e.target.value)} required style={inputStyle} />
          <input type="text" placeholder="গ্রাম / ঠিকানা" value={village} onChange={e => setVillage(e.target.value)} required style={inputStyle} />
          <button type="submit" style={{ background: '#16a34a', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}>আবেদন জমা দিন</button>
        </form>
      </div>
    </div>
  );
}
const inputStyle = { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' };
