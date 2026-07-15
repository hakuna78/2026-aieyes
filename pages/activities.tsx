import Layout from '@components/layout';
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Activities() {
  // 모달 상태 선언
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // 갤러리 슬라이더 상태
  const studyPhotos = [1, 2, 3, 4]; // 임시 빈칸 4장
  const expoPhotos = [1, 2, 3, 4, 5]; // 임시 빈칸 5장
  const [studyIdx, setStudyIdx] = useState(0);
  const [expoIdx, setExpoIdx] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setStudyIdx((prev) => (prev + 1) % studyPhotos.length);
    }, 4000);
    const timer2 = setInterval(() => {
      setExpoIdx((prev) => (prev + 1) % expoPhotos.length);
    }, 4000);
    return () => { clearInterval(timer1); clearInterval(timer2); };
  }, [studyPhotos.length, expoPhotos.length]);

  const teams = [
    { 
      title: "Team Mind&Mood", 
      name: "CLIP모델 기반 사용자 감정 최적화 음악 추천 서비스 ", 
      link: "https://youtu.be/pEmTiWlbnJI?si=vIahb20Q2XRMiG6W",
      poster: "/team mm.pdf" 
    },
    { 
      title: "Team 콕", 
      name: "Synthetic Phase-Shifting기반 DPO기법 활용 상담 AI", 
      link: "https://youtu.be/SM93h0spbR4?si=uwWQxMsqBe4CZTBF",
      poster: "/team콕.pdf" 
    },
    { 
      title: "Team soul", 
      name: "서울특별시 상권 침체 조기경보 지수 형성 시스템", 
      link: "https://youtu.be/uyqboNJdHJI?si=FbSsm86WtTvIy5SM",
      poster: "/team 소울.pdf" 
    },
    { 
      title: "Team SHAP", 
      name: "SHAP모델 기반 멀티모달 주가 예측 분석", 
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
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={sectionWrapperStyle}
        >
          <motion.h2 variants={fadeInUp} style={sectionLabelStyle}>프로젝트 자료</motion.h2>
          <div style={gridContainerStyle}>
            {teams.map((team, idx) => (
              <motion.div variants={fadeInUp} key={idx} style={teamCardStyle}>
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
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

        {/* 정규 스터디 활동 슬라이더 */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          style={sectionWrapperStyle}
        >
          <h2 style={sectionLabelStyle}>정규 스터디 활동</h2>
          <div style={sliderFrameStyle}>
            <div style={{ ...sliderTrackStyle, transform: `translateX(-${studyIdx * 100}%)` }}>
              {studyPhotos.map((item, idx) => (
                <div key={`study-${item}`} style={slideItemStyle}>
                  <div style={emptyImagePlaceholder}>사진 {idx + 1} (추가 예정)</div>
                </div>
              ))}
            </div>
          </div>
          <div style={dotContainerStyle}>
            {studyPhotos.map((_, idx) => (
              <div key={`study-dot-${idx}`} onClick={() => setStudyIdx(idx)} style={{ ...dotStyle, backgroundColor: studyIdx === idx ? '#fff' : 'rgba(255,255,255,0.3)' }} />
            ))}
          </div>
        </motion.section>

        {/* 학술 박람회 슬라이더 */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          style={sectionWrapperStyle}
        >
          <h2 style={sectionLabelStyle}>학술 박람회</h2>
          <div style={sliderFrameStyle}>
            <div style={{ ...sliderTrackStyle, transform: `translateX(-${expoIdx * 100}%)` }}>
              {expoPhotos.map((item, idx) => (
                <div key={`expo-${item}`} style={slideItemStyle}>
                  <div style={emptyImagePlaceholder}>사진 {idx + 1} (추가 예정)</div>
                </div>
              ))}
            </div>
          </div>
          <div style={dotContainerStyle}>
            {expoPhotos.map((_, idx) => (
              <div key={`expo-dot-${idx}`} onClick={() => setExpoIdx(idx)} style={{ ...dotStyle, backgroundColor: expoIdx === idx ? '#fff' : 'rgba(255,255,255,0.3)' }} />
            ))}
          </div>
        </motion.section>

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

// 슬라이더 스타일
const sliderFrameStyle: React.CSSProperties = {
  width: '100%', height: '500px', margin: '0 auto',
  borderRadius: '24px', overflow: 'hidden', position: 'relative',
  border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(8px)',
};

const sliderTrackStyle: React.CSSProperties = {
  display: 'flex', width: '100%', height: '100%',
  transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
};

const slideItemStyle: React.CSSProperties = {
  flex: '0 0 100%', height: '100%',
  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '15px', boxSizing: 'border-box'
};

const emptyImagePlaceholder: React.CSSProperties = {
  width: '100%', height: '100%', borderRadius: '16px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  color: 'rgba(255,255,255,0.3)', fontSize: '1.2rem', fontWeight: 'bold',
  border: '1px solid rgba(255,255,255,0.05)'
};

const dotContainerStyle: React.CSSProperties = {
  display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '25px'
};

const dotStyle: React.CSSProperties = {
  width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer', transition: '0.3s'
};

const gridContainerStyle: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '40px', width: '100%'
};

const teamCardStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '12px' };
const teamTextWrapper: React.CSSProperties = { minHeight: '60px' };
const teamNameStyle: React.CSSProperties = { fontSize: '1.2rem', fontWeight: '700', margin: '0 0 5px 0' };
const teamTitleStyle: React.CSSProperties = { fontSize: '0.9rem', opacity: 0.6, margin: 0 };

const posterBoxStyle: React.CSSProperties = {
  width: '100%', aspectRatio: '1 / 1.414', backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(8px)',
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