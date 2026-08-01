/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Layout from '@components/layout';
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

type Direction = 'center' | 'left' | 'right' | 'up' | 'down';
type PupilStyle = 'pie' | 'shiny' | 'dot' | 'solid' | 'crescent';

const RubberHoseEye = ({ cx, cy, dir, style, isLeft }: { cx: number, cy: number, dir: Direction, style: PupilStyle, isLeft: boolean }) => {
  let scleraRx = 26;
  let scleraRy = 42;
  
  let pupilCx = cx + (isLeft ? 4 : -4);
  let pupilCy = cy + 4;
  let pupilRx = 12;
  let pupilRy = 24;

  if (dir === 'left') {
    pupilCx = cx - 12;
  } else if (dir === 'right') {
    pupilCx = cx + 12;
  } else if (dir === 'up') {
    pupilCy = cy - 12;
  } else if (dir === 'down') {
    pupilCy = cy + 16;
  }

  return (
    <g className="cute-blink" style={{ transformOrigin: `${cx}px ${cy}px` }}>
      {/* Sclera */}
      <ellipse cx={cx} cy={cy} rx={scleraRx} ry={scleraRy} fill="#fff" />
      
      {/* Pupil Base with or without Pie Cut */}
      {style === 'pie' ? (
        <g>
          <defs>
            <mask id={`pie-cut-${cx}`}>
              <rect x={cx - 40} y={cy - 50} width="80" height="100" fill="#fff" />
              <polygon points={`${pupilCx},${pupilCy+2} ${pupilCx+20},${pupilCy-25} ${pupilCx+20},${pupilCy-5}`} fill="#000" />
            </mask>
          </defs>
          <ellipse cx={pupilCx} cy={pupilCy} rx={pupilRx} ry={pupilRy} fill="#000" mask={`url(#pie-cut-${cx})`} />
        </g>
      ) : (
        <ellipse cx={pupilCx} cy={pupilCy} rx={pupilRx} ry={pupilRy} fill="#000" />
      )}

      {/* Additional Highlights */}
      {style === 'shiny' && (
        <>
          <circle cx={pupilCx + 3} cy={pupilCy - 8} r="5" fill="#fff" />
          <circle cx={pupilCx - 4} cy={pupilCy + 8} r="2.5" fill="#fff" />
        </>
      )}

      {style === 'dot' && (
        <circle cx={pupilCx} cy={pupilCy} r="4" fill="#fff" />
      )}

      {style === 'crescent' && (
        <path d={`M ${pupilCx - 8} ${pupilCy + 12} Q ${pupilCx} ${pupilCy + 22} ${pupilCx + 8} ${pupilCy + 12} Q ${pupilCx} ${pupilCy + 16} ${pupilCx - 8} ${pupilCy + 12} Z`} fill="#fff" />
      )}
    </g>
  );
};

export default function Recruiting() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [eyeState, setEyeState] = useState<{dir: Direction, style: PupilStyle}>({ dir: 'center', style: 'pie' });

  useEffect(() => {
    const states: {dir: Direction, style: PupilStyle}[] = [
      { dir: 'center', style: 'pie' },
      { dir: 'right', style: 'shiny' },
      { dir: 'up', style: 'solid' },
      { dir: 'center', style: 'dot' },
      { dir: 'left', style: 'shiny' },
      { dir: 'down', style: 'crescent' },
      { dir: 'right', style: 'pie' },
      { dir: 'center', style: 'crescent' },
      { dir: 'left', style: 'dot' },
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % states.length;
      setEyeState(states[i]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div 
        style={containerStyle}
        onClick={()=> setActiveId(null)}>
        
        {/* 헤더 섹션 */}
        <style>{`
          @keyframes cute-blink {
            0%, 88%, 100% { transform: scaleY(1); }
            94% { transform: scaleY(0.1); }
          }
          .cute-blink {
            animation: cute-blink 3s infinite;
          }
          @keyframes bounce-up {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .bounce-up { animation: bounce-up 1s infinite ease-in-out; }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            75% { transform: translateX(3px); }
          }
          .shake { animation: shake 0.2s infinite ease-in-out; }
          
          .apple-title {
            font-size: 56px;
            font-weight: 800;
            line-height: 1.3;
            margin: 0;
            word-break: keep-all;
            letter-spacing: -1px;
          }
          @media (max-width: 768px) {
            .apple-title { font-size: 36px; }
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
        `}</style>
        <header style={{ textAlign: 'center', marginBottom: '160px', marginTop: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', height: '110px' }}>
            <svg width="200" height="100" viewBox="0 0 200 100">
              <RubberHoseEye cx={60} cy={50} dir={eyeState.dir} style={eyeState.style} isLeft={true} />
              <RubberHoseEye cx={140} cy={50} dir={eyeState.dir} style={eyeState.style} isLeft={false} />
            </svg>
          </div>
          <h1 className="apple-title" style={{ fontSize: '56px', lineHeight: '1.2' }}>
            AiEYES Recruiting
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.8, lineHeight: '1.6', marginTop: '40px' }}>
            AiEYES와 함께 내일의 가치를 창의적으로 설계하는 오늘의 기술을 탐구할 동료를 찾습니다.
          </p>
        </header>

        {/* 2. 모집 안내 섹션 */}
        <motion.section 
          style={{ ...sectionStyle, maxWidth: '100%' }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp}
        >
          <div style={{ ...sectionHeaderStyle, maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px', justifyContent: 'center' }}>
            <h2 style={{ ...sectionTitleStyle, fontSize: '36px', fontWeight: '800', textAlign: 'center' }}>모집 안내</h2>
          </div>
          
          <div style={{ marginBottom: '80px', width: '100%', overflow: 'hidden' }}>
            {/* DEV */}
            <div style={{ maxWidth: '900px', margin: '0 auto 20px auto', padding: '0 20px' }}>
              <h3 style={{ fontSize: '26px', color: '#fff', fontWeight: '800', margin: 0 }}>DEV</h3>
            </div>
            <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative', overflow: 'hidden', padding: '10px 0' }}>
              <div className="marquee-track" style={{ animationDuration: '35s' }}>
                {[...Array(4)].flatMap((_, i) => [
                  { text: '자연어처리 (NLP)', icon: '💬' },
                  { text: '컴퓨터비전 (CV)', icon: '👁️' },
                  { text: '데이터 사이언스', icon: '📊' },
                  { text: '생성형 AI (GenAI)', icon: '✨' },
                  { text: '멀티모달', icon: '🧩' },
                ]).map((card, idx) => (
                  <div key={idx} style={{
                    width: '280px', flexShrink: 0, height: '180px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.4)', backdropFilter: 'saturate(180%) blur(16px)',
                    borderRadius: '24px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    gap: '15px', marginRight: '20px', transition: 'transform 0.2s', cursor: 'pointer'
                  }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                    <span style={{ fontSize: '36px' }}>{card.icon}</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{card.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DA */}
            <div style={{ maxWidth: '900px', margin: '0 auto 20px auto', padding: '0 20px', marginTop: '60px' }}>
              <h3 style={{ fontSize: '26px', color: '#fff', fontWeight: '800', margin: 0 }}>DA</h3>
            </div>
            <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative', overflow: 'hidden', padding: '10px 0' }}>
              <div className="marquee-track" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                {[...Array(6)].flatMap((_, i) => [
                  { text: '데이터 분석', icon: '📈' },
                  { text: '데이터 시각화', icon: '🎨' },
                  { text: '통계적 인사이트', icon: '💡' }
                ]).map((card, idx) => (
                  <div key={idx} style={{
                    width: '280px', flexShrink: 0, height: '180px',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.4)', backdropFilter: 'saturate(180%) blur(16px)',
                    borderRadius: '24px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    gap: '15px', marginRight: '20px', transition: 'transform 0.2s', cursor: 'pointer'
                  }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                    <span style={{ fontSize: '36px' }}>{card.icon}</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>{card.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ ...sectionTitleStyle, fontSize: '36px', fontWeight: '800', marginBottom: '40px', color: '#fff', textAlign: 'center' }}>지원 자격</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                "한국외국어대학교 재학생",
                "최소 활동기간 1년(2026.03 ~ 2027.02)을 충족할 수 있는 분",
                "매주 정기회의(화 18:30~20:00)를 포함해 주 2회 이상 학회 활동이 가능하신 분"
              ].map((text, idx) => (
                <div key={idx} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'saturate(180%) blur(16px)',
                  borderRadius: '16px',
                  padding: '25px 30px',
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  lineHeight: '1.6',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                }}>
                  <span style={{ color: '#fff', fontWeight: '900' }}>✓</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 3. 인재상 섹션 */}
        <motion.section
           style={{ ...sectionStyle, marginTop: '160px' }}
           onClick={(e) => e.stopPropagation()}
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeInUp}
        >
          <div style={{ ...sectionHeaderStyle, justifyContent: 'center', marginBottom: '50px' }}>
            <h2 style={{ ...sectionTitleStyle, fontSize: '36px', fontWeight: '800', textAlign: 'center' }}>인재상</h2>
          </div>
          
          <div style={talentContainerStyle}>
            <div style={vennDiagramContainerStyle}>
              {/* ① 유연한 사고 */}
              <div 
                onClick={() => setActiveId(activeId === 1 ? null : 1)}
                style={{ 
                  ...circleStyle, 
                  top: '0', left: '50%', transform: 'translateX(-50%)',
                  border: '2px solid #f0f9ff', cursor: 'pointer', 
                  boxShadow: (activeId === 1 || activeId === null) ? '0 0 20px rgba(240, 249, 255, 0.6)' : 'none',
                  opacity: activeId === 1 || activeId === null ? 1 : 0.3 
                }}
              >
                <span style={circleTextStyle}>유연한 사고</span>
              </div>

              {/* 본질적 탐구 */}
              <div 
                onClick={() => setActiveId(activeId === 2 ? null : 2)}
                style={{ 
                  ...circleStyle, 
                  bottom: '-2%', left: '44%', 
                  border: '2px solid #e0d4f7', cursor: 'pointer', 
                  boxShadow: (activeId === 2 || activeId === null) ? '0 0 20px rgba(224, 212, 247, 0.6)' : 'none',
                  opacity: activeId === 2 || activeId === null ? 1 : 0.3 
                }}
              >
                <span style={circleTextStyle}>본질적 탐구</span>
              </div>

              {/* ③ 공동체적 가치 */}
              <div 
                onClick={() => setActiveId(activeId === 3 ? null : 3)}
                style={{ 
                  ...circleStyle, 
                  bottom: '-2%', right: '44%', 
                  border: '2px solid #8ca5c9', cursor: 'pointer', 
                  boxShadow: (activeId === 3 || activeId === null) ? '0 0 20px rgba(140, 165, 201, 0.6)' : 'none',
                  opacity: activeId === 3 || activeId === null ? 1 : 0.3 
                }}
              >
                <span style={circleTextStyle}>공동체적 가치</span>
              </div>
            </div>

            {/* 텍스트 상세 설명 영역 */}
            <div style={{ ...talentGridStyle, minHeight: '180px' }}>
              {activeId === 1 && (
                <div style={{ ...talentCardStyle, borderLeft: '4px solid #f0f9ff' }}>
                  <h3 style={{ color: '#f0f9ff', marginBottom:'15px' }}>유연한 사고</h3>
                  <p>기존의 지식이나 관성에 얽매이지 않고, 새로운 기술과 변화를 받아들이기 위해 기꺼이 자신의 틀을 깰 줄 아는 사람</p>
                  <p>기존의 정답에 안주하지 않고 시행착오를 두려워하지 않는 사람</p>
                </div>
              )}
              {activeId === 2 && (
                <div style={{ ...talentCardStyle, borderLeft: '4px solid #e0d4f7' }}>
                  <h3 style={{ color: '#e0d4f7', marginBottom:'15px' }}>본질적 탐구</h3>
                  <p>단순히 코드를 구현하는 데 그치지 않고, "이 기술이 사회에 어떤 의미를 갖는가?"를 끊임없이 질문하며 본질을 보는 사람</p>
                  <p>호기심을 학문적 성과와 실용적 가치로 연결하는 실행력을 가진 사람</p>
                </div>
              )}
              {activeId === 3 && (
                <div style={{ ...talentCardStyle, borderLeft: '4px solid #8ca5c9' }}>
                  <h3 style={{ color: '#8ca5c9', marginBottom:'15px' }}>공동체적 가치</h3>
                  <p>혼자만의 성장이 아닌, 동료와 지식을 나누고 서로의 성장을 돕는 ‘동반 성장’의 가치를 아는 사람</p>
                  <p>다양한 관심사를 가진 학회원들과 협업하며 학문적 시너지를 만드는 사람</p>
                </div>
              )}
              {!activeId && (
                <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', width: '100%' }}>원 안의 키워드를 클릭해보세요.</p>
              )}
            </div>
          </div>
        </motion.section>

        {/* 지원폼은 여기에 */}
        <footer style={contactStyle}> 
          <button 
            onClick={() => window.open('https://forms.gle/SY32mGb8kxhNamyn7', '_blank')}
            style={{ ...applyButtonStyle, backgroundColor: '#fff', color: '#000', cursor: 'pointer' }}
          >
            지금 지원하기 ▶
          </button>
          <p style={{ marginTop: '40px' , color:'rgba(255,255,255,0.4)'}}>문의처: 학회장 민건우(010-4049-4866) | 부학회장 노윤혁(010-2722-1378)</p>
          {/* <p style={{ fontWeight: '500', marginBottom: '20px', color: 'rgba(255,255,255,0.4)' }}>공식 계정</p> */}

          {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
           
            <a href="https://instagram.com/aieyes.official" target="_blank" rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#1a1a1a', padding: '8px', borderRadius: '10px', display: 'flex', alignItems:'center',justifyContent: 'center'}}>
                <img src="/insta.png" alt="ig" style={{ width: '20px', height: '20px' }} />
              </div>
              <span style={{ fontSize: '13px' }}>@aieyes.official</span>
            </a>
            <a href="https://github.com/AiEYES" target="_blank" rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', textDecoration: 'none' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '8px', borderRadius: '10px', display: 'flex', alignItems:'center',justifyContent: 'center' }}>
            <img src="/github.png" alt="git" style={{ width: '20px', height: '20px' }} />
            </div>
            <span style={{ fontSize: '13px' }}>AiEYES Github</span>
          </a>
        </div>  */}
        </footer>
      </div>
    </Layout>
  );
}

/* --- 스타일 정의  --- */
const containerStyle: React.CSSProperties = {
  backgroundColor: '#000', color: '#fff', minHeight: '100vh',
  padding: '120px 20px 80px', fontFamily: 'Pretendard, sans-serif',
  display: 'flex', flexDirection: 'column', alignItems: 'center'
};
const headerSectionStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '80px' };
const titleStyle: React.CSSProperties = { fontSize: '48px', fontWeight: '900', marginBottom: '20px' };
const subtitleStyle: React.CSSProperties = { fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.6' };
const sectionStyle: React.CSSProperties = { width: '100%', maxWidth: '900px', marginBottom: '60px' };
const sectionHeaderStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' };
const sectionTitleStyle: React.CSSProperties = { fontSize: '24px', fontWeight: '700' };
const iconStyle: React.CSSProperties = { fontSize: '24px' };
const cardContainerStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '15px' };
const infoCardStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '25px 30px', backdropFilter: 'blur(10px)' };
const cardLabelStyle: React.CSSProperties = { fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)' };
const cardContentStyle: React.CSSProperties = { fontSize: '1rem', fontWeight: '600', margin: 0 };
const gridContainerStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' };
const glassBoxStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '30px', backdropFilter: 'blur(10px)' };
const contactStyle: React.CSSProperties = { marginTop: '40px', textAlign: 'center' };
const applyButtonStyle: React.CSSProperties = { padding: '15px 50px', backgroundColor: '#fff', color: '#000', borderRadius: '50px', fontWeight: '700', cursor: 'pointer' };
const talentContainerStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' };
const vennDiagramContainerStyle: React.CSSProperties = { position: 'relative', width: '300px', height: '300px' };
const circleStyle: React.CSSProperties = { position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s' };
const circleTextStyle: React.CSSProperties = { textAlign: 'center', fontSize: '1rem', fontWeight: '800' };
const talentGridStyle: React.CSSProperties = { width: '100%', maxWidth: '600px' };
const talentCardStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '25px', borderRadius: '15px', borderLeft: '4px solid #fff', backdropFilter: 'blur(10px)' };
const miniCardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px 15px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(8px)'
};

const miniBadgeStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: '800',
  padding: '3px 8px',
  borderRadius: '5px',
  flexShrink: 0
};

const miniContentStyle: React.CSSProperties = {
  fontSize: '0.95rem',
  fontWeight: '600',
  color: '#fff'
};