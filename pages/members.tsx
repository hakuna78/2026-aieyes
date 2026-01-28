import Layout from '@components/layout';
import React, { useState } from 'react';

// 기수별 데이터 (필요에 따라 2nd, 3rd 추가 가능)
const membersData: any = {
  "1st Generation": [
    { name: "강현규", dept: "Social Science & AI융합학부 24" },
    { name: "김지현", dept: "Social Science & AI융합학부 24" },
    { name: "김채우", dept: "Social Science & AI융합학부 24" },
    { name: "노윤혁", dept: "Social Science & AI융합학부 24" },
    { name: "박연후", dept: "Social Science & AI융합학부 24" },
    { name: "이예원", dept: "Social Science & AI융합학부 24" },
    { name: "이현우", dept: "Social Science & AI융합학부 24" },
    { name: "장대웅", dept: "Social Science & AI융합학부 24" },
  ],
  "1.5st Generation":[
    { name: "민건우", dept: "Social Science & AI융합학부 25" },
    { name: "채유정", dept: "Social Science & AI융합학부 25" },
    { name: "박수연", dept: "Social Science & AI융합학부 25" }
  ],
  "2nd Generation": [
    { name: "준비 중", dept: "Upcoming" },
  ]
};

export default function Members() {
  const [selectedGen, setSelectedGen] = useState("1st Generation");

  return (
    <Layout>
      <div style={containerStyle}>
        <header style={headerSectionStyle}>
          <h1 style={titleStyle}>AiEYES Members</h1>
          <p style={subtitleStyle}>
            AiEYES을 이끌어가는 멤버들을 소개합니다.
          </p>
        </header>

        {/* 1. 기수 선택 버튼 */}
        <div style={tabContainerStyle}>
          {Object.keys(membersData).map((gen) => (
            <button
              key={gen}
              onClick={() => setSelectedGen(gen)}
              style={{
                ...tabButtonStyle,
                backgroundColor: selectedGen === gen ? '#fff' : '#222',
                color: selectedGen === gen ? '#000' : '#fff',
              }}
            >
              {gen}
            </button>
          ))}
        </div>

        {/* 2. 기수별 멤버 리스트 */}
        <section style={sectionWrapperStyle}>
          <h2 style={genTitleStyle}>{selectedGen}</h2>
          <div style={memberGridStyle}>
            {membersData[selectedGen].map((m: any, idx: number) => (
              <div key={idx} style={memberItemStyle}>
                <div style={memberNameStyle}>{m.name}</div>
                <div style={memberDeptStyle}>{m.dept}</div>
              </div>
            ))}
          </div> 
        </section>
      </div>
    </Layout>
  );
}

/* --- 스타일 정의 --- */
const containerStyle: React.CSSProperties = { backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '120px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' };
const headerSectionStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '150px' };
const titleStyle: React.CSSProperties = { fontSize: '42px', fontWeight: '700' };
const subtitleStyle: React.CSSProperties = { fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.6' };

// 기수 선택 탭
const tabContainerStyle: React.CSSProperties = { display: 'flex', gap: '10px', marginBottom: '60px' };
const tabButtonStyle: React.CSSProperties = { padding: '10px 25px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: '600', transition: '0.3s' };

// 멤버 그리드
const sectionWrapperStyle: React.CSSProperties = { width: '100%', maxWidth: '1000px', marginBottom: '100px' };
const genTitleStyle: React.CSSProperties = { fontSize: '28px',fontWeight:'600', marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '10px' };
const memberGridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '40px' };
const memberItemStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '5px' };
const memberNameStyle: React.CSSProperties = { fontSize: '1.1rem', fontWeight: 'bold' };
const memberDeptStyle: React.CSSProperties = { fontSize: '0.9rem', color: '#888' };
