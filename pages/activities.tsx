import Layout from '@components/layout';
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

export default function Activities() {
  const [activeTab, setActiveTab] = useState<'프로젝트' | '활동사진'>('프로젝트');
  const [projectFilter, setProjectFilter] = useState("전체");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 모달 상태 선언
  const [selectedPoster, setSelectedPoster] = useState<any>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // 갤러리 슬라이더 상태
  const studyPhotos = [
    "/images/study/1.jpg", "/images/study/2.jpeg", "/images/study/4.jpeg",
    "/images/study/7.jpg", "/images/study/8.png", "/images/study/9.jpg"
  ];
  const expoPhotos = [
    "/images/fair/4.jpg", "/images/fair/5.jpg", "/images/fair/6.jpg", "/images/fair/10.jpg"
  ];
  const confPhotos = [
    "/images/conference/2.jpg", "/images/conference/3.jpg", "/images/conference/5.jpg"
  ];
  const ideathonPhotos = [
    "/images/ideathon/1.jpg", "/images/ideathon/2.jpg", "/images/ideathon/3.jpg",
    "/images/ideathon/4.jpg", "/images/ideathon/5.jpg", "/images/ideathon/6.jpg",
    "/images/ideathon/7.jpg", "/images/ideathon/8.jpg", "/images/ideathon/9.jpg",
    "/images/ideathon/10.jpg", "/images/ideathon/11.jpg", "/images/ideathon/12.jpg"
  ]; // 아이디어톤
  
  const [studyIdx, setStudyIdx] = useState(0);
  const [expoIdx, setExpoIdx] = useState(0);
  const [confIdx, setConfIdx] = useState(0);
  const [ideathonIdx, setIdeathonIdx] = useState(0);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#study' || hash === '#fair' || hash === '#ideathon' || hash === '#conference') {
      setActiveTab('활동사진');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (activeTab !== '활동사진') return;
    const timer1 = setInterval(() => setStudyIdx((prev) => (prev + 1) % studyPhotos.length), 4000);
    const timer2 = setInterval(() => setExpoIdx((prev) => (prev + 1) % expoPhotos.length), 4000);
    const timer3 = setInterval(() => setConfIdx((prev) => (prev + 1) % confPhotos.length), 4000);
    const timer4 = setInterval(() => setIdeathonIdx((prev) => (prev + 1) % ideathonPhotos.length), 4000);
    return () => { clearInterval(timer1); clearInterval(timer2); clearInterval(timer3); clearInterval(timer4); };
  }, [activeTab, studyPhotos.length, expoPhotos.length, confPhotos.length, ideathonPhotos.length]);

  const teams = [
    { 
      title: "Mind&Mood", 
      name: "CLIP모델 기반 사용자 감정 최적화 음악 추천 서비스 ", 
      link: "https://youtu.be/pEmTiWlbnJI?si=vIahb20Q2XRMiG6W",
      poster: "/team mm.pdf",
      aspectRatio: '1 / 1.414',
      type: '학술 박람회'
    },
    { 
      title: "콕", 
      name: "Synthetic Phase-Shifting기반 DPO기법 활용 상담 AI", 
      link: "https://youtu.be/SM93h0spbR4?si=uwWQxMsqBe4CZTBF",
      poster: "/team콕.pdf",
      aspectRatio: '1 / 1.414',
      type: '학술 박람회'
    },
    { 
      title: "soul", 
      name: "서울특별시 상권 침체 조기경보 지수 형성 시스템", 
      link: "https://youtu.be/uyqboNJdHJI?si=FbSsm86WtTvIy5SM",
      poster: "/team 소울.pdf",
      aspectRatio: '1 / 1.414',
      type: '학술 박람회'
    },
    { 
      title: "SHAP", 
      name: "SHAP모델 기반 멀티모달 주가 예측 분석", 
      poster: "/team ai팀.pdf",
      aspectRatio: '1 / 1.414',
      type: '학술 박람회'
    },
    {
      title: "이현우, 서하윤, 장대웅, 유현준", 
      name: "LSTM-Based Samsung Electronics Stock Price Prediction Model", 
      poster: "/team_lstm.pdf",
      aspectRatio: '1 / 1.414',
      type: '학술 박람회'
    },
    {
      title: "Moonlight",
      name: "AI 기반 심야 라스트마일 자율주행 DRT",
      poster: "/ideathon_thumbs/1조.pptx.pptx.png",
      fileUrl: "/ideathon/1조.pptx.pptx",
      aspectRatio: '16 / 9',
      isImageOnly: true,
      type: '아이디어톤'
    },
    {
      title: "NOTAIEYES",
      name: "디지털 소외계층을 위한 길찾기 보조 시스템",
      poster: "/ideathon_thumbs/2조.pdf.png",
      fileUrl: "/ideathon/2조.pdf",
      aspectRatio: '16 / 9',
      isImageOnly: true,
      type: '아이디어톤'
    },
    {
      title: "3조",
      name: "XAI 기반 공공지원금 판정 설명 서비스",
      poster: "/ideathon_thumbs/3조.pptx.png",
      fileUrl: "/ideathon/3조.pptx",
      aspectRatio: '16 / 9',
      isImageOnly: true,
      type: '아이디어톤'
    },
    {
      title: "4조",
      name: "학생 심리 스크리닝 및 조기 연계 솔루션",
      poster: "/ideathon_thumbs/4조.pdf.png",
      fileUrl: "/ideathon/4조.pdf",
      aspectRatio: '16 / 9',
      isImageOnly: true,
      type: '아이디어톤'
    },
    {
      title: "5조",
      name: "기업 환경 피해 추적 플랫폼",
      poster: "/ideathon_thumbs/5조 발표.pdf.png",
      fileUrl: "/ideathon/5조 발표.pdf",
      aspectRatio: '16 / 9',
      isImageOnly: true,
      type: '아이디어톤'
    }
  ];

  const filteredTeams = teams.filter(t => projectFilter === "전체" || t.type === projectFilter);

  const renderTeamCard = (team: any, idx: number) => (
    <motion.div variants={fadeInUp} key={team.title || idx} style={teamCardStyle}>
      <div style={teamTextWrapper}>
        <h3 style={teamNameStyle}>{team.name}</h3>
        <p style={teamTitleStyle}>[ {team.title} ]</p>
      </div>

      <div 
        className="poster-box"
        style={{ ...posterBoxStyle, aspectRatio: team.aspectRatio || '1 / 1.414' }} 
        onClick={() => setSelectedPoster(team)}
      >
        <div className="hover-overlay" style={hoverOverlayStyle}></div>
        
        {team.isImageOnly ? (
          <img src={team.poster} alt={team.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={previewScaleContainer}>
            <iframe
              src={`${team.poster}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title={team.name}
            />
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <div style={containerStyle}>
        {/* 1. 페이지 헤더 */}
        <header style={headerSectionStyle}>
          <h1 style={titleStyle}>Activities</h1>
          <p style={subtitleStyle}>
            AiEYES가 진행한 활동들을 소개합니다.
          </p>
        </header>

        {/* 상단 탭 메뉴 */}
        <div style={tabContainerStyle}>
          {['프로젝트', '활동사진'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              style={{
                ...tabButtonStyle,
                backgroundColor: activeTab === tab ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: activeTab === tab ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={contentWrapperStyle}>
          {activeTab === '프로젝트' && (
            <motion.section 
              key={projectFilter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ width: '100%', marginBottom: '100px' }}
              id="project"
            >
              <div style={filterContainerStyle}>
                <div style={{ position: 'relative' }}>
                  <div 
                    style={dropdownStyle} 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {projectFilter}
                  </div>
                  {isDropdownOpen && (
                    <div style={dropdownMenuBoxStyle}>
                      {["전체", "학술 박람회", "아이디어톤"].map(opt => (
                        <div 
                          key={opt}
                          className="custom-option"
                          style={dropdownOptionStyle}
                          onClick={() => {
                            setProjectFilter(opt);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {projectFilter === "전체" ? (
                <>
                  <h2 style={{...sectionLabelStyle, marginTop: '20px'}}>학술 박람회</h2>
                  <div style={gridContainerStyle}>
                    {teams.filter(t => t.type === '학술 박람회').map(renderTeamCard)}
                  </div>
                  
                  <h2 style={{ ...sectionLabelStyle, marginTop: '80px' }}>아이디어톤</h2>
                  <div style={gridContainerStyle}>
                    {teams.filter(t => t.type === '아이디어톤').map(renderTeamCard)}
                  </div>
                </>
              ) : (
                <>
                  <h2 style={{...sectionLabelStyle, marginTop: '20px'}}>{projectFilter}</h2>
                  <div style={gridContainerStyle}>
                    {filteredTeams.map(renderTeamCard)}
                  </div>
                </>
              )}
            </motion.section>
          )}

          {activeTab === '활동사진' && (
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              {/* 정규 스터디 활동 슬라이더 */}
              <motion.section 
                variants={fadeInUp}
                style={sectionWrapperStyle}
                id="study"
              >
                <h2 style={sectionLabelStyle}>정규 스터디 활동</h2>
                <div style={sliderFrameStyle}>
                  <div style={{ ...sliderTrackStyle, transform: `translateX(-${studyIdx * 100}%)` }}>
                    {studyPhotos.map((item, idx) => (
                      <div key={`study-${idx}`} style={slideItemStyle}>
                        <img src={item} alt={`정규 스터디 ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                variants={fadeInUp}
                style={sectionWrapperStyle}
                id="fair"
              >
                <h2 style={sectionLabelStyle}>학술 박람회</h2>
                <div style={sliderFrameStyle}>
                  <div style={{ ...sliderTrackStyle, transform: `translateX(-${expoIdx * 100}%)` }}>
                    {expoPhotos.map((item, idx) => (
                      <div key={`expo-${idx}`} style={slideItemStyle}>
                        <img src={item} alt={`학술 박람회 ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

              {/* 아이디어톤 슬라이더 */}
              <motion.section 
                variants={fadeInUp}
                style={sectionWrapperStyle}
                id="ideathon"
              >
                <h2 style={sectionLabelStyle}>아이디어톤</h2>
                <div style={sliderFrameStyle}>
                  <div style={{ ...sliderTrackStyle, transform: `translateX(-${ideathonIdx * 100}%)` }}>
                    {ideathonPhotos.map((item, idx) => (
                      <div key={`ideathon-${idx}`} style={slideItemStyle}>
                        <img src={item} alt={`아이디어톤 ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div style={dotContainerStyle}>
                  {ideathonPhotos.map((_, idx) => (
                    <div key={`ideathon-dot-${idx}`} onClick={() => setIdeathonIdx(idx)} style={{ ...dotStyle, backgroundColor: ideathonIdx === idx ? '#fff' : 'rgba(255,255,255,0.3)' }} />
                  ))}
                </div>
              </motion.section>

              {/* 외부 컨퍼런스 교류 슬라이더 */}
              <motion.section 
                variants={fadeInUp}
                style={sectionWrapperStyle}
                id="conference"
              >
                <h2 style={sectionLabelStyle}>외부 컨퍼런스 교류</h2>
                <div style={sliderFrameStyle}>
                  <div style={{ ...sliderTrackStyle, transform: `translateX(-${confIdx * 100}%)` }}>
                    {confPhotos.map((item, idx) => (
                      <div key={`conf-${item}`} style={slideItemStyle}>
                        <img src={item} alt={`외부 컨퍼런스 교류 ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div style={dotContainerStyle}>
                  {confPhotos.map((_, idx) => (
                    <div key={`conf-dot-${idx}`} onClick={() => setConfIdx(idx)} style={{ ...dotStyle, backgroundColor: confIdx === idx ? '#fff' : 'rgba(255,255,255,0.3)' }} />
                  ))}
                </div>
              </motion.section>
            </motion.div>
          )}
        </div>
      </div>

      {/* 모달 섹션 */}
      {selectedPoster && (
        <div style={modalOverlayStyle} onClick={() => setSelectedPoster(null)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={() => setSelectedPoster(null)}>✕ 닫기</button>
            {selectedPoster.isImageOnly ? (
               <div style={{width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                 <img src={selectedPoster.poster} style={{ maxWidth: '100%', maxHeight: '90%', objectFit: 'contain', borderRadius: '8px' }} alt={selectedPoster.name} />
                 <a href={selectedPoster.fileUrl} download style={{ marginTop:'20px', color:'#fff', textDecoration:'underline', fontSize:'1.1rem' }}>원본 파일 다운로드</a>
               </div>
            ) : (
               <div style={{width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                 <iframe
                   src={`${selectedPoster.poster}#view=FitH`}
                   style={{ width: '100%', height: selectedPoster.link ? 'calc(100% - 50px)' : '100%', border: 'none', borderRadius: '8px' }}
                 />
                 {selectedPoster.link && (
                   <a href={selectedPoster.link} target="_blank" rel="noopener noreferrer" style={{ marginTop:'15px', color:'#fff', textDecoration:'underline', fontSize:'1.2rem', fontWeight: 'bold' }}>영상으로 확인하기 ▶</a>
                 )}
               </div>
            )}
          </div>
        </div>
      )}
      {/* CSS Styles */}
      <style>{`
        .custom-option:hover {
          background-color: rgba(255,255,255,0.1);
        }
        .poster-box {
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .poster-box:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 0 30px 5px rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 1) !important;
          z-index: 20;
        }
        .hover-overlay {
          opacity: 0;
          background-color: rgba(0,0,0,0.4);
        }
        .poster-box:hover .hover-overlay {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </Layout>
  );
}

const containerStyle: React.CSSProperties = {
  backgroundColor: '#000', color: '#fff', minHeight: '100vh',
  padding: '120px 20px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center'
};

const headerSectionStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '80px' };
const titleStyle: React.CSSProperties = { fontSize: '48px', fontWeight: '700', marginBottom: '20px' };
const subtitleStyle: React.CSSProperties = { fontSize: '1.1rem', opacity: 0.7 };

const tabContainerStyle: React.CSSProperties = {
  display: 'flex', gap: '10px', width: '100%', maxWidth: '1100px',
  justifyContent: 'center', marginBottom: '60px'
};

const tabButtonStyle: React.CSSProperties = { 
  padding: '12px 30px', 
  borderRadius: '50px', 
  cursor: 'pointer', 
  fontWeight: '600', 
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(8px)',
  fontSize: '1.1rem'
};

const filterContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '20px',
  width: '100%'
};

const dropdownStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)',
  padding: '10px 40px 10px 20px', borderRadius: '20px', outline: 'none', cursor: 'pointer',
  fontSize: '1rem',
  backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 8px center',
  userSelect: 'none',
};

const dropdownMenuBoxStyle: React.CSSProperties = {
  position: 'absolute',
  top: '110%',
  right: 0,
  background: 'rgba(30, 30, 30, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '16px',
  overflow: 'hidden',
  zIndex: 100,
  minWidth: '150px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
};

const dropdownOptionStyle: React.CSSProperties = {
  padding: '12px 20px',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background 0.2s',
  fontSize: '1rem',
};

const contentWrapperStyle: React.CSSProperties = {
  width: '100%', maxWidth: '1100px'
};

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
  width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(8px)',
  borderRadius: '12px', overflow: 'hidden', position: 'relative',
  cursor: 'pointer'
};

const previewScaleContainer: React.CSSProperties = {
  width: '800px', height: '1131px', transform: 'scale(0.31)',
  transformOrigin: 'top left', pointerEvents: 'none'
};

const hoverOverlayStyle: React.CSSProperties = {
  position: 'absolute', inset: 0,
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  transition: '0.3s ease', zIndex: 10, color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)'
};

const youtubeLinkStyle: React.CSSProperties = { color: '#6832bb', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' };

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, cursor: 'zoom-out'
};

const modalContentStyle: React.CSSProperties = { width: '90%', maxWidth: '900px', height: '85vh', position: 'relative', cursor: 'default' };
const closeButtonStyle: React.CSSProperties = { position: 'absolute', top: '-40px', right: 0, color: '#fff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' };