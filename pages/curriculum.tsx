import Layout from '@components/layout';
import React from 'react';

export default function Curriculum() {
  const scheduleData = [
    { 
      date: '2월 2일 (월) ~ 2월 15일 (일) 23:59', 
      title: '재학생 서류 접수', 
      desc: '지원서는 제출 후 수정이 불가합니다.', 
      isHighlight: true 
    },
    { 
      date: '2월 21일 (토)', 
      title: '재학생 서류 합격 발표', 
      desc: '서류 합격자 대상 개별 연락 및 면접 안내가 진행됩니다.', 
      isHighlight: false 
    },
    { 
      date: ' 2월 23일 (월) ~ 3월 1일 (일) 23:59', 
      title: '신입생 서류 접수', 
      desc: '지원서는 제출 후 수정이 불가합니다.', 
      isHighlight: false 
    },
    { 
      date: ' 3월 3일 (화)', 
      title: '신입생 서류 합격 발표', 
      desc: '서류 합격자 대상 개별 연락 및 면접 안내가 진행됩니다.',
      isHighlight: false 
    },
    { 
      title: '면접 및 결과 발표', 
      isSplit: true, 
      details: [
        { label: '재학생', schedule: '면접: 2월 25일 (수) ~ 2월 26일 (목) | 최종 발표: 2월 27일 (금)' },
        { label: '신입생', schedule: '면접: 3월 5일 (목) | 최종 발표: 3월 6일 (금)' }
      ]
    },
    { 
      date: '3월 초 ~ 5월', 
      title: 'CORE Term', 
      desc: '분야별 스터디 및 정기 세션이 시작됩니다.', 
      isHighlight: false 
    },
    { 
      date: '6월 ~ 8월', 
      title: 'Bridge to PRO:Ideathon', 
      desc: '방학 기간 동안 기획 역량 발전에 집중하는  Ideathon이 진행됩니다.', 
      isHighlight: false 
    },
    { 
      date: '9월 초 ~ 12월', 
      title: 'PRO Term', 
      desc: '그동안 학습한 내용을 프로젝트에 직접 적용합니다.', 
      isHighlight: false 
    },
  ];

  return (
    <Layout>
      <div style={sectionContainerStyle}>
        {/* 섹션 헤더 */}
        <div style={sectionHeaderStyle}>
          <h1 style={sectionTitleStyle}>Curriculum</h1>
        </div>

        <p style={descriptionStyle}>
          AiEYES의 커리큘럼은 <b>CORE Term</b>, <b>Bridge to PRO</b>, <b>PRO Term</b>을 거쳐 총 1년 과정으로 진행됩니다. <br/>1년 과정을 완수 시 AiEYES 수료가 가능합니다.
        </p>

        
        <div style={cardGridStyle}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: '800' }}>세션 구성</h2>
          </div>

          {/* 1. CORE Card */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h2 style={{ color: '#ffffff', margin: 0 }}>CORE</h2>
              <span style={typeBadgeStyle}>1학기</span>
            </div>
            <div style={subCardGridStyle}>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>스터디 활동</h4>
                <p style={subCardDescStyle}>공부하고자 하는 분야가 같은 학회원끼리 팀을 이루어 팀 헤더와 팀원 구성으로 심도 있게 학습합니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>팀 기반 학습</span>
                  <span style={tagStyle}>협업 구조</span>
                </div>
              </div>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>정기회의</h4>
                <p style={subCardDescStyle}>매주 화요일 18:30~20:00 까지 진행한 스터디 내용의 브리핑과 피드백을 통해 타 분야를 간접적으로 경험합니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>지식 공유</span>
                  <span style={tagStyle}>크로스 러닝</span>
                </div>
              </div>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>Monthly Article Archiving</h4>
                <p style={subCardDescStyle}>매달 각 팀 별 스터디와 피드백 내용을 기록해 카드뉴스를 발행합니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>지식 아카이빙</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Bridge Card */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h2 style={{ color: '#ffffff', margin: 0 }}>Bridge to PRO</h2>
              <span style={typeBadgeStyle}>여름방학</span>
            </div>
            <div style={subCardGridStyle}>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>제로 AI</h4>
                <p style={subCardDescStyle}>랜덤으로 뽑은 두 가지 키워드를 결합하여 AI툴 사용 없이 아이디어를 발굴합니다. '무'에서 '유'를 창조하는 기획력을 기릅니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>아이디어 발굴</span>
                  <span style={tagStyle}>창의적 기획</span>
                </div>
              </div>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>리버스 피칭</h4>
                <p style={subCardDescStyle}>성공한 AI 서비스를 거꾸로 해부하여 역기획합니다. 완성된 '유'에서 '무'까지의 과정을 분해하여 로직을 파악합니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>역기획</span>
                  <span style={tagStyle}>서비스 해부</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. PRO Card */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h2 style={{ color: '#ffffff', margin: 0 }}>PRO</h2>
              <span style={typeBadgeStyle}>2학기</span>
            </div>
            <div style={subCardGridStyle}>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>공모전 참가</h4>
                <p style={subCardDescStyle}>학회원들이 협업하여 사회 문제를 정의하고 솔루션을 설계합니다. 공모전 수상 경력과 실전 프로젝트 경험의 가치를 얻을 수 있습니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>문제 해결 역량</span>
                  <span style={tagStyle}>실전 프로젝트</span>
                </div>
              </div>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>학술 박람회</h4>
                <p style={subCardDescStyle}>문제 정의, 모델 설계, 프로토타입 구현까지 전 과정을 직접 전시하고 발표합니다. 가시적인 포트폴리오 구축과 네트워킹의 기회를 얻습니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>AI 모델링</span>
                  <span style={tagStyle}>네트워킹</span>
                </div>
              </div>
              <div style={subCardStyle}>
                <h4 style={subCardTitleStyle}>Monthly Article Archiving</h4>
                <p style={subCardDescStyle}>매달 AI 트렌드 관련 논문과 기사를 요약해 카드뉴스를 발행합니다.</p>
                <div style={tagWrapperStyle}>
                  <span style={tagStyle}>지식 아카이빙</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 통합 일정 타임라인 섹션 --- */}
        <div style={{ marginTop: '160px', width: '100%', maxWidth: '800px' }}>
          <h2 style={{ ...sectionTitleStyle, fontSize: '30px', textAlign: 'center', marginBottom: '60px' }}>
            전체 일정
          </h2>
          
          <div style={timelineWrapperStyle}>
            <div style={verticalLineStyle} />

            {scheduleData.map((item, index) => (
              <div key={index} style={itemWrapperStyle}>
                <div style={{
                  ...dotStyle,
                  backgroundColor: item.isHighlight ? '#6832bb' : '#1a1a1e',
                  border: item.isHighlight ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  marginTop:'30px',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  zIndex:2
                }}>
                  {item.isHighlight && <span style={{ color: '#fff', fontSize: '14px' }}>✔</span>}
                </div>

                <div style={{
                  ...scheduleCardStyle,
                  border: item.isHighlight ? '1px solid #6832bb' : '1px solid rgba(255,255,255,0.08)', padding:'25px', flex:1
                }}>
                  <div style={{
                    display :'flex',
                    justifyContent:'space-between',
                    alignItems:'flex-start',
                    flexDirection:'row'
                  }}></div>
                  <div style={scheduleHeaderStyle}>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: '500', 
                      color: item.isHighlight ? '#6832bb' : '#ffffff', 
                      textAlign:'right',
                      minWidth:'100px',
                      display:'inline-block',
                      lineHeight:'1',
                      marginTop:'0px'
                    }}>
                      {item.date}
                    </span>
                    {!item.isSplit && <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: 0 ,textAlign:'left', lineHeight:'1.2', color: item.isHighlight ? '#6832bb' : '#ffffff'}}>{item.title}</h3>}
                  </div>

                  {/* 재학생, 신입생 섹션 */}
                  {!item.isSplit ? (
                    <p style={scheduleDescStyle}>{item.desc}</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '0',marginTop:'-10px' }}>{item.title}</h3>
                      {item.details?.map((detail, idx) => (
                        
                        <div key={idx} style={{
                          display:'flex',
                          alignItems:'center',
                          gap:'12px',
                          padding:'12px 15px',
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderRadius: '12px'
                        }}>
                          <span style={splitBadgeStyle}>{detail.label}</span>
                          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>{detail.schedule}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* --- 스타일 정의 --- */
const sectionContainerStyle: React.CSSProperties = {
  backgroundColor: '#000', color: '#fff', minHeight: '100vh',
  padding: '120px 20px 80px', fontFamily: 'Pretendard, sans-serif',
  display: 'flex', flexDirection: 'column', alignItems: 'center'
};

const sectionHeaderStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '8px' };
const sectionTitleStyle: React.CSSProperties = { fontSize: '48px', fontWeight: '900', marginBottom: '5px', lineHeight: '1.6' };
const descriptionStyle: React.CSSProperties = { fontSize: '1.1rem', opacity: 0.8, textAlign: 'center' };

const cardGridStyle: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: '40px', width: '100%', maxWidth: '1000px', marginTop: '80px'
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#16161a', border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px', padding: '35px', display: 'flex', flexDirection: 'column', gap: '20px', boxSizing: 'border-box'
};

const cardHeaderStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const typeBadgeStyle: React.CSSProperties = { fontSize: '0.85rem', opacity: 0.4 };

const subCardGridStyle: React.CSSProperties = {
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px'
};

const subCardStyle: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', height: '100%', gap: '15px'
};

const subCardTitleStyle: React.CSSProperties = { fontSize: '1.15rem', fontWeight: '700', color: '#fff', margin: 0 };
const subCardDescStyle: React.CSSProperties = { fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)', flexGrow: 1, wordBreak: 'keep-all' };
const tagWrapperStyle: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: '8px' };
const tagStyle: React.CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.06)', padding: '6px 14px', borderRadius: '10px',
  fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)'
};

const timelineWrapperStyle: React.CSSProperties = { position: 'relative', display: 'flex', flexDirection: 'column', gap: '40px', width: '100%' };
const verticalLineStyle: React.CSSProperties = { position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' };
const itemWrapperStyle: React.CSSProperties = { display: 'flex', gap: '25px', position: 'relative', zIndex: 1 };
const dotStyle: React.CSSProperties = { width: '40px', height: '40px', borderRadius: '50%',  flexShrink: 0, position:'relative',zIndex:2, transform:'translateY(5px)'};
const scheduleCardStyle: React.CSSProperties = { flex: 1, backgroundColor: '#111', borderRadius: '20px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '10px' };
const scheduleHeaderStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' , flexDirection:'row-reverse'};
const scheduleDescStyle: React.CSSProperties = { fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.5)', margin: 0, lineHeight: '1.6', wordBreak: 'keep-all' };
const splitDetailStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px' };
const splitBadgeStyle: React.CSSProperties = { fontSize: '0.75rem', fontWeight: '800', padding: '4px 8px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' };