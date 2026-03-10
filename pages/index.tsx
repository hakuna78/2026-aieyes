import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '@components/layout';
import Head from 'next/head';

export default function Conf() {
  const router = useRouter();
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  // 1. 데이터 (보내주신 원본 그대로)
  const teams = [
    { title: "Team Mind&Mood", name: "CLIP모델 기반 사용자 감정 최적화 음악 추천 서비스 ", link: "https://youtu.be/pEmTiWlbnJI?si=vIahb20Q2XRMiG6W", poster: "/team mm.pdf" },
    { title: "Team 콕", name: "Synthetic Phase-Shifting기반 DPO기법 활용 상담 AI", link: "https://youtu.be/SM93h0spbR4?si=uwWQxMsqBe4CZTBF", poster: "/team콕.pdf" },
    { title: "Team soul", name: "서울특별시 상권 침체 조기경보 지수 형성 시스템", link: "https://youtu.be/uyqboNJdHJI?si=FbSsm86WtTvIy5SM", poster: "/team 소울.pdf" },
    { title: "Team SHAP", name: "SHAP모델 기반 멀티모달 주가 예측 분석", poster: "/team ai팀.pdf" },
  ];

  return (
    <>
      <Head>
        <title>AiEYES</title>
      </Head>

      <Layout>
        {/* --- 섹션 1: 메인 히어로 (기존 index.tsx 스타일) --- */}
        <div style={heroContainerStyle}>
          <main style={{ marginTop: '-30px' }}>
            <h1 style={{ fontSize: '90px', fontWeight: '900', margin: '0', lineHeight: '1.1', letterSpacing: '1px' }}>
              AiEYES
            </h1>
            <div style={{ marginTop: '20px' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '800', margin: '0', lineHeight: '1.2', letterSpacing: '-1px' }}>
                Unlearn the Obvious, See the <span style={gradientTextStyle}>Intelligence.</span>
              </h2>
            </div>
            <div style={{ marginTop: '70px', marginBottom: '40px' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: '400', opacity: '0.7', lineHeight: '1.8', letterSpacing: '-0.5px' }}>
                AiEYES는 한국외국어대학교 Social Science & AI융합학부의 인공지능학회입니다.<br />
                기존의 관습과 고정관념을 내려놓는 언러닝(Unlearning)으로<br />
                AI와 사회를 잇는 새로운 시각을 탐구합니다.<br />
              </p>
            </div>

            {/*  */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', width: '100%', marginTop: '30px' }}>
              <button style={btnStyle} onClick={() => router.push('/curriculum')}>커리큘럼 {'▶'}</button>
              <button style={btnStyle} onClick={() => router.push('/members')}>멤버소개 {'▶'}</button>
            </div>
          </main>
        </div>

        {/* --- 섹션 2: 활동 내용 --- */}
        <div style={activitiesWrapperStyle}>
          
          {/* 프로젝트 자료 */}
          <section style={sectionWrapperStyle}>
            <div style={sectionTitleWrapper}>
              <span style={pinkDotStyle} />
              <h2 style={sectionLabelStyle}>프로젝트 자료</h2>
            </div>
            <div style={gridContainerStyle}>
              {teams.map((team, idx) => (
                <div key={idx} style={teamCardStyle}>
                  <div style={teamTextWrapper}>
                    <h3 style={teamNameStyle}>{team.name}</h3>
                    <p style={teamTitleStyle}>[ {team.title} ]</p>
                  </div>
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
                  ) : <div style={{ height: '21px' }} />}
                </div>
              ))}
            </div>
          </section>

          {/* 정규 스터디 활동 */}
          <section style={sectionWrapperStyle}>
            <div style={sectionTitleWrapper}>
              <span style={pinkDotStyle} />
              <h2 style={sectionLabelStyle}>정규 스터디 활동</h2>
            </div>
            <div style={mainSectionStyle}>
              <img src="/스터디.jpg" alt="정규스터디" style={mainImageStyle} />
            </div>
          </section>

          {/* 학술 박람회 */}
          <section style={sectionWrapperStyle}>
            <div style={sectionTitleWrapper}>
              <span style={pinkDotStyle} />
              <h2 style={sectionLabelStyle}>학술 박람회</h2>
            </div>
            <div style={mainSectionStyle}>
              <img src="/단체.png" alt="학술 박람회" style={mainImageStyle} />
            </div>
          </section>
        </div>

        {/* 모달 (원본 수치 복구) */}
        {selectedPoster && (
          <div style={modalOverlayStyle} onClick={() => setSelectedPoster(null)}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
              <button style={closeButtonStyle} onClick={() => setSelectedPoster(null)}>✕ 닫기</button>
              <iframe src={`${selectedPoster}#view=FitH`} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }} />
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}

/* --- 스타일 정의 --- */

const heroContainerStyle: React.CSSProperties = {
  background: 'url("/stars.png")',
  backgroundColor: '#000', color: '#fff', minHeight: '100vh',
  fontFamily: 'Pretendard, -apple-system, sans-serif',
  backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', position: 'relative'
};

const gradientTextStyle: React.CSSProperties = {
  background: 'linear-gradient(to right, #1e3a8a, #3b82f6, #facc15)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
};

const btnStyle: React.CSSProperties = {
  padding: '12px 35px', background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50px',
  color: '#fff', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', transition: 'all 0.3s ease', backdropFilter: 'blur(8px)',
};

const activitiesWrapperStyle: React.CSSProperties = {
  backgroundColor: '#fff', color: '#000', width: '100%', padding: '120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center',
};

const sectionWrapperStyle: React.CSSProperties = { 
  width: '100%', maxWidth: '1100px', marginBottom: '100px', margin: '0 auto 100px auto' 
};

const sectionTitleWrapper: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px', borderBottom: '1px solid #eee', paddingBottom: '15px' };
const pinkDotStyle: React.CSSProperties = { width: '8px', height: '8px', backgroundColor: ' #6832bb', borderRadius: '50%' };
const sectionLabelStyle: React.CSSProperties = { fontSize: '1.5rem', fontWeight: '700', color: '#000' };

const gridContainerStyle: React.CSSProperties = { 
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', width: '100%' 
};

const teamCardStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '12px' };
const teamTextWrapper: React.CSSProperties = { minHeight: '60px' };
const teamNameStyle: React.CSSProperties = { fontSize: '1.2rem', fontWeight: '700', margin: '0 0 5px 0' };
const teamTitleStyle: React.CSSProperties = { fontSize: '0.9rem', opacity: 0.6, margin: 0 };

const posterBoxStyle: React.CSSProperties = { 
  width: '100%', aspectRatio: '1 / 1.414', backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', position: 'relative', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.1)' 
};

const previewScaleContainer: React.CSSProperties = { 
  width: '800px', height: '1131px', transform: 'scale(0.31)', transformOrigin: 'top left', pointerEvents: 'none' 
};

const hoverOverlayStyle: React.CSSProperties = { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: '0.2s', zIndex: 10, color: '#fff', fontWeight: 'bold' };
const youtubeLinkStyle: React.CSSProperties = { color: '#6832bb', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' };

const mainSectionStyle: React.CSSProperties = { 
  width: '100%', height: '400px', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#111', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 auto" 
};

const mainImageStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 };

const modalOverlayStyle: React.CSSProperties = { position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, cursor: 'zoom-out' };
const modalContentStyle: React.CSSProperties = { width: '90%', maxWidth: '900px', height: '85vh', position: 'relative', cursor: 'default' };
const closeButtonStyle: React.CSSProperties = { position: 'absolute', top: '-40px', right: 0, color: '#fff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' };