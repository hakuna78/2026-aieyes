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
import React, { useState } from 'react';

export default function Recruiting() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <Layout>
      <div 
        style={containerStyle}
        onClick={()=> setActiveId(null)}>
        
        {/* 헤더 섹션 */}
        <header style={headerSectionStyle}>
          <h1 style={titleStyle}>Recruiting</h1>
          <p style={subtitleStyle}>
            AiEYES와 함께 내일의 가치를 창의적으로 설계하는 오늘의 기술을 탐구할 동료를 찾습니다.
          </p>
        </header>

        {/* 1. 모집 일정 섹션 */}
        <section style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={iconStyle}>📅</span>
            <h2 style={sectionTitleStyle}>모집 일정</h2>
          </div>
          <div style={cardContainerStyle}>
            {[
              {
                label: "서류 접수",
                details: [
                  { target: "재학생", period: "2월 2일 (월) ~ 2월 15일 (일) 23:59" },
                  { target: "신입생", period: "2월 23일 (월) ~ 3월 1일 (일) 23:59" }
                ]
              },
              {
                label: "서류 합격 발표 및 면접 안내",
                details: [
                  { target: "재학생", period: "2월 21일 (토)" },
                  { target: "신입생", period: "3월 3일 (화)" }
                ]
              },
              {
                label: "면접",
                details: [
                  { target: "재학생", period: "2월 25일 (수) ~ 2월 26일 (목)" },
                  { target: "신입생", period: "3월 4일 (수)" }
                ]
              },
              {
                label: "최종 결과 발표",
                details: [
                  { target: "재학생", period: "2월 27일 (금)" },
                  { target: "신입생", period: "3월 8일 (일)" }
                ]
              }
            ].map((item, idx) => (
              <div key={idx} style={infoCardStyle}>
                <span style={{ ...cardLabelStyle, display: 'block', marginBottom: '15px' }}>{item.label}</span>

                <div style={{ display: 'grid',gap: '12px',gridTemplateColumns:'1fr 1fr' }}>
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} style={{
                      ...miniCardStyle,
                      flexDirection: 'column',
                      alignItems: 'flex-start', 
                      gap: '8px',
                      padding: '16px'
                    }}>
                      <span style={{
                        ...miniBadgeStyle,
                        backgroundColor: detail.target === '재학생' ? '#261145' : 'rgba(255, 255, 255, 0.1)',
                        color: detail.target === '재학생' ? '#6832bb' : 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '4px'
                      }}>
                        {detail.target}
                      </span>
                      <span style={{
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        color: '#fff',
                        lineHeight: '1.4'
                      }}>{detail.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. 모집 안내 섹션 */}
        <section style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <span style={iconStyle}>🔍</span>
            <h2 style={sectionTitleStyle}>모집 안내</h2>
          </div>
          <div style={gridContainerStyle}>
            <div style={glassBoxStyle}>
              <h3>모집 분야</h3>
              <p><strong>Dev</strong><br/>자연어처리(NLP), 컴퓨터비전(CV), 데이터 사이언스(Data Science), 생성형 AI(GenAI), 멀티모달(Multi-modal)</p>
              <p><strong>DA</strong><br/>데이터 분석(Data Analysis), 데이터 시각화(Data Visualization), 통계적 인사이트(Statistical Insight)</p>
            </div>
            <div style={glassBoxStyle}>
              <h3>지원 자격</h3>
              <ul>
                <li>한국외대 Social Science & AI융합학부 1전공 혹은 이중(부)전공 학생</li>
                <li>최소 활동기간 1년(2026.03 ~2027.02)을 충족할 수 있는 분</li>
                <li>매주 정기회의(화 18:30~20:00)를 포함해 주 2회 이상 학회 활동이 가능하신 분</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. 인재상 섹션 */}
        <section
           style={sectionStyle}
           onClick={(e) => e.stopPropagation()}
        >
          <div style={sectionHeaderStyle}>
            <span style={iconStyle}>✨</span>
            <h2 style={sectionTitleStyle}>인재상</h2>
          </div>
          
          <div style={talentContainerStyle}>
            <div style={vennDiagramContainerStyle}>
              {/* ① 유연한 사고 */}
              <div 
                onClick={(e) => {
                  setActiveId(activeId === 1 ? null : 1);
                }}
                style={{ 
                  ...circleStyle, 
                  top: '0', left: '50%', transform: 'translateX(-50%)',
                  border:'2px solid #6832bb', cursor: 'pointer', 
                  opacity: activeId === 1 || activeId === null ? 1 : 0.3 
                }}
              >
                <span style={circleTextStyle}>유연한 사고</span>
              </div>

              {/* 본질적 탐구 */}
              <div 
                onClick={(e) => {
                  setActiveId(activeId === 2 ? null : 2);
                }}
                style={{ 
                  ...circleStyle, 
                  bottom: '-2%', left: '44%', 
                  border:'2px solid #b62d41', cursor: 'pointer', 
                  opacity: activeId === 2 || activeId === null ? 1 : 0.3 
                }}
              >
                <span style={circleTextStyle}>본질적 탐구</span>
              </div>

              {/* ③ 공동체적 가치 */}
              <div 
                onClick={(e) => {
                  setActiveId(activeId === 3 ? null : 3);
                }}
                style={{ 
                  ...circleStyle, 
                  bottom: '-2%', right: '44%', 
                  border:'2px solid #ffffff', cursor: 'pointer', 
                  opacity: activeId === 3 || activeId === null ? 1 : 0.3 
                }}
              >
                <span style={circleTextStyle}>공동체적 가치</span>
              </div>
            </div>

            {/* 텍스트 상세 설명 영역 */}
            <div style={{ ...talentGridStyle, minHeight: '180px' }}>
              {activeId === 1 && (
                <div style={talentCardStyle}>
                  <h3 style={{ color: '#6832bb', marginBottom:'15px' }}>유연한 사고</h3>
                  <p>기존의 지식이나 관성에 얽매이지 않고, 새로운 기술과 변화를 받아들이기 위해 기꺼이 자신의 틀을 깰 줄 아는 사람</p>
                  <p>기존의 정답에 안주하지 않고 시행착오를 두려워하지 않는 사람</p>
                </div>
              )}
              {activeId === 2 && (
                <div style={talentCardStyle}>
                  <h3 style={{ color: '#b62d41', marginBottom:'15px' }}>본질적 탐구</h3>
                  <p>단순히 코드를 구현하는 데 그치지 않고, "이 기술이 사회에 어떤 의미를 갖는가?"를 끊임없이 질문하며 본질을 보는 사람</p>
                  <p>호기심을 학문적 성과와 실용적 가치로 연결하는 실행력을 가진 사람</p>
                </div>
              )}
              {activeId === 3 && (
                <div style={talentCardStyle}>
                  <h3 style={{ color: '#ffffff' , marginBottom:'15px'}}>공동체적 가치</h3>
                  <p>혼자만의 성장이 아닌, 동료와 지식을 나누고 서로의 성장을 돕는 ‘동반 성장’의 가치를 아는 사람</p>
                  <p>다양한 관심사를 가진 학회원들과 협업하며 학문적 시너지를 만드는 사람</p>
                </div>
              )}
              {!activeId && (
                <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', width: '100%' }}>원 안의 키워드를 클릭해보세요.</p>
              )}
            </div>
          </div>
        </section>

        {/* 지원폼은 여기에 */}
        <footer style={contactStyle}> 
          <button style={applyButtonStyle} onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd2ajSKTh7DyQqAhm0PXdz37U2lokn4mUgRZNFbt9tpC2eEsg/viewform?usp=header')}>
            지금 지원하기 ▶
          </button>
          <p style={{ marginTop: '40px' , color:'rgba(255,255,255,0.4)'}}>문의처: 학회장 김지현(010-5034-9789) | 부학회장 노윤혁(010-2722-1378)</p>
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
const infoCardStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '25px 30px' };
const cardLabelStyle: React.CSSProperties = { fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)' };
const cardContentStyle: React.CSSProperties = { fontSize: '1rem', fontWeight: '600', margin: 0 };
const gridContainerStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' };
const glassBoxStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '20px', padding: '30px' };
const contactStyle: React.CSSProperties = { marginTop: '40px', textAlign: 'center' };
const applyButtonStyle: React.CSSProperties = { padding: '15px 50px', backgroundColor: '#fff', color: '#000', borderRadius: '50px', fontWeight: '700', cursor: 'pointer' };
const talentContainerStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' };
const vennDiagramContainerStyle: React.CSSProperties = { position: 'relative', width: '300px', height: '300px' };
const circleStyle: React.CSSProperties = { position: 'absolute', width: '180px', height: '180px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.3s' };
const circleTextStyle: React.CSSProperties = { textAlign: 'center', fontSize: '1rem', fontWeight: '800' };
const talentGridStyle: React.CSSProperties = { width: '100%', maxWidth: '600px' };
const talentCardStyle: React.CSSProperties = { backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '25px', borderRadius: '15px', borderLeft: '4px solid #fff' };
const miniCardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px 15px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.05)'
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