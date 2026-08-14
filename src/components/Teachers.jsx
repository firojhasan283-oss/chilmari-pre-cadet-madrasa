import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const { data, error } = await supabase.from('teachers').select('*');
      if (error) throw error;
      setTeachers(data || []);
    } catch (err) {
      console.error('Error fetching teachers:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* টপ হেডার */}
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>👨‍🏫 আমাদের শিক্ষকবৃন্দ</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#64748b' }}>লোড হচ্ছে...</p>
        ) : teachers.length === 0 ? (
          <div style={{ textAlign: 'center', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#64748b', fontSize: '16px' }}>বর্তমানে কোনো শিক্ষকের তথ্য যুক্ত করা হয়নি।</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {teachers.map((teacher) => (
              <div key={teacher.id} style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <img 
                  src={teacher.photo_url || 'https://via.placeholder.com/150'} 
                  alt={teacher.name} 
                  style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px', border: '3px solid #16a34a' }} 
                />
                <h3 style={{ margin: '0 0 5px 0', color: '#14532d', fontSize: '1.2rem' }}>{teacher.name}</h3>
                <p style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '14px', margin: '0 0 10px 0' }}>{teacher.designation}</p>
                <p style={{ color: '#64748b', fontSize: '13px', margin: '5px 0' }}><strong>যোগ্যতা:</strong> {teacher.qualification}</p>
                <p style={{ color: '#64748b', fontSize: '13px', margin: '5px 0' }}><strong>বিষয়:</strong> {teacher.subject}</p>
                <p style={{ color: '#334155', fontSize: '13px', margin: '10px 0 0 0' }}>📞 {teacher.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
