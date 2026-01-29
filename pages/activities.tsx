import Layout from '@components/layout';
import React, { useState } from 'react';

export default function Activities() {
  // 모달 상태 선언
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const teams = [
    { 
      name: "Team Mind&Mood", 
      title: "AI_DJ_Curating the Moment", 
      link: "https://youtu.be/pEmTiWlbnJI?si=vIahb20Q2XRMiG6W",
      poster: "/team mm.pdf" 
    },
    { 
      name: "Team 콕", 
      title: "전문가의 노하우를 학습하는 AI", 
      link: "https://youtu.be/SM93h0spbR4?si=uwWQxMsqBe4CZTBF",
      poster: "/team콕.pdf" 
    },
    { 
      name: "Team soul", 
      title: "서울시 상권 침체 조기경보 지수", 
      link: "https://youtu.be/uyqboNJdHJI?si=FbSsm86WtTvIy5SM",
      poster: "/team 소울.pdf" 
    },
    { 
      name: "Team SHAP", 
      title: "금융 시계열 예측", 
      poster: "/team ai팀.pdf" 
    },
  ];

  return (
    <Layout>
      <div style={containerStyle}>
        {/* 1. 페이지 헤더 */}
        <header style={headerSectionStyle}>
          <h1 style={titleStyle}>Activities</h1>
          <p style={subtitleStyle}>
            AiEYES 1기 부터 1.5기까지 진행했던 활동을 소개합니다.
          </p>
        </header>


        {/* 활동 자료 (포스터 그리드) */}
        <section style={sectionWrapperStyle}>
          <h2 style={sectionLabelStyle}>📌 프로젝트 자료</h2>
          <div style={gridContainerStyle}>
            {teams.map((team, idx) => (
              <div key={idx} style={teamCardStyle}>
                <div style={teamTextWrapper}>
                  <h3 style={teamNameStyle}>{team.name}</h3>
                  <p style={teamTitleStyle}>[ {team.title} ]</p>
                </div>

                {/* 포스터 박스 */}
                <div style={posterBoxStyle} onClick={() => setSelectedPoster(team.poster)}>
                  <div style={hoverOverlayStyle}>클릭하여 확대</div>
                  <div style={previewScaleContainer}>
                    <iframe
                      src={`${team.poster}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      title={team.name}
                    />
                  </div>
                </div>


                {team.link ? (
                <a href={team.link} target="_blank" rel="noopener noreferrer" style={youtubeLinkStyle}>
                  영상으로 확인하기 ▶
                </a>
                ) : (
                  <div style = {{height: '21px'}}/> )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 포스터 */}
      <section style={sectionWrapperStyle}>
          <h2 style={sectionLabelStyle}>📌 정규 스터디 활동</h2>
          <div style={mainSectionStyle}>
            <img src="/스터디.jpg" alt="정규스터디" style={mainImageStyle} />
          </div>
        </section>

        {/* 학술 박람회 */}
        <section style={sectionWrapperStyle}>
          <h2 style={sectionLabelStyle}>📌 학술 박람회</h2>
          <div style={mainSectionStyle}>
            <img src="/단체.png" alt="학술 박람회" style={mainImageStyle} />
          </div>
        </section>

      {/* 모달 섹션 */}
      {selectedPoster && (
        <div style={modalOverlayStyle} onClick={() => setSelectedPoster(null)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={() => setSelectedPoster(null)}>✕ 닫기</button>
            <iframe
              src={`${selectedPoster}#view=FitH`}
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
    </Layout>
  );
}

/* --- 중복 제거된 스타일 정의 --- */
const containerStyle: React.CSSProperties = {
  backgroundColor: '#000', color: '#fff', minHeight: '100vh',
  padding: '120px 20px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center'
};

const headerSectionStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '80px' };
const titleStyle: React.CSSProperties = { fontSize: '48px', fontWeight: '700', marginBottom: '20px' };
const subtitleStyle: React.CSSProperties = { fontSize: '1.1rem', opacity: 0.7 };

const sectionWrapperStyle: React.CSSProperties = { width: '100%', maxWidth: '1100px', marginBottom: '100px', margin:'0 auto 100px auto' };
const sectionLabelStyle: React.CSSProperties = { fontSize: '1.5rem', fontWeight: '700', marginBottom: '25px', color: '#fff' };

const mainSectionStyle: React.CSSProperties = {
  width: '100%', height: '400px', borderRadius: '24px', overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.1)', backgroundColor: '#111', marginBottom: '20px',
  display:'flex', justifyContent:'center', alignItems:'center', margin:"0 auto"
};

const mainImageStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, display:'flex', justifyContent:'center', alignItems:'center' };

const gridContainerStyle: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '40px', width: '100%'
};

const teamCardStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '12px' };
const teamTextWrapper: React.CSSProperties = { minHeight: '60px' };
const teamNameStyle: React.CSSProperties = { fontSize: '1.2rem', fontWeight: '700', margin: '0 0 5px 0' };
const teamTitleStyle: React.CSSProperties = { fontSize: '0.9rem', opacity: 0.6, margin: 0 };

const posterBoxStyle: React.CSSProperties = {
  width: '100%', aspectRatio: '1 / 1.414', backgroundColor: '#fff',
  borderRadius: '12px', overflow: 'hidden', position: 'relative',
  cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)'
};

const previewScaleContainer: React.CSSProperties = {
  width: '800px', height: '1131px', transform: 'scale(0.31)',
  transformOrigin: 'top left', pointerEvents: 'none'
};

const hoverOverlayStyle: React.CSSProperties = {
  position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  opacity: 0, transition: '0.2s', zIndex: 10, color: '#fff', fontWeight: 'bold'
};

const youtubeLinkStyle: React.CSSProperties = { color: '#6832bb', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' };

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, cursor: 'zoom-out'
};

const modalContentStyle: React.CSSProperties = { width: '90%', maxWidth: '900px', height: '85vh', position: 'relative', cursor: 'default' };
const closeButtonStyle: React.CSSProperties = { position: 'absolute', top: '-40px', right: 0, color: '#fff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' };