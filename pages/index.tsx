import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import Layout from '@components/layout';
import Head from 'next/head';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;
    let time = 0;

    const lines = 20; // 최적화를 위해 라인 수 약간 감소
    let gradients: CanvasGradient[] = [];
    
    // 리렌더링마다 생성되던 그라데이션을 미리 계산
    const updateGradients = () => {
      gradients = [];
      for (let i = 0; i < lines; i++) {
        const alpha = 0.2 + (i / lines) * 0.5;
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(14, 165, 233, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(104, 50, 187, ${Math.min(1, alpha * 1.5)})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, ${alpha})`);
        gradients.push(gradient);
      }
    };
    updateGradients();

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        // 렌더링 부하 감소를 위해 x 스텝을 15에서 30으로 증가
        for (let x = 0; x <= width; x += 30) {
          const normalizedX = x / width;
          const amplitude = height * 0.35 * Math.sin(normalizedX * Math.PI);
          
          const wave1 = Math.sin(normalizedX * 4 + time * 0.007 + i * 0.15);
          const wave2 = Math.cos(normalizedX * 3 - time * 0.005 + i * 0.08);
          
          const y = height * 0.6 + (wave1 + wave2) * amplitude + (i * 8 - (lines * 4));
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = gradients[i];
        ctx.lineWidth = 1.6;
        // 성능 저하의 주 원인인 shadowBlur 제거
        ctx.stroke();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      updateGradients();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', backgroundColor: '#000' }} />;
};

export default function Conf() {
  const router = useRouter();
  const carouselItems = [
    { title: "정규 스터디", desc: "관심 분야별 심도 있는 스터디와 인사이트를 공유하는 정기 세션", img: "/images/study/1.jpg", link: "/activities#study" },
    { title: "학술 박람회", desc: "학회원들과 함께 완성한 모델과 프로토타입 전시 및 네트워킹", img: "/images/fair/10.jpg", link: "/activities#fair" },
    { title: "아이디어톤", desc: "기획력 강화를 위한 리버스 피칭과 팀 빌딩 해커톤", img: "/images/ideathon/10.jpg", link: "/activities#ideathon" },
    { title: "외부 컨퍼런스 교류", desc: "다양한 외부 컨퍼런스 참여를 통해 정규 활동을 넘어선 폭넓은 인사이트 습득", img: "/images/conference/3.jpg", link: "/activities#conference" },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      <Head>
        <title>AiEYES</title>
      </Head>

      <Layout>
        {/* --- 섹션 1: 메인 히어로 --- */}
        <div style={heroContainerStyle}>
          <WaveBackground />

          <main style={{ marginTop: '-30px', position: 'relative', zIndex: 10 }}>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ ...gradientTextStyle, fontSize: '90px', fontWeight: '900', margin: '0', lineHeight: '1.1', letterSpacing: '1px', display: 'inline-block' }}
            >
              AiEYES
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} 
              style={{ marginTop: '20px' }}
            >
              <h2 style={{ fontSize: '40px', fontWeight: '800', margin: '0', lineHeight: '1.2', letterSpacing: '-1px' }}>
                Unlearn the Obvious, See the Intelligence.
              </h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ marginTop: '70px', marginBottom: '40px' }}
            >
              <p style={{ fontSize: '1.1rem', fontWeight: '400', opacity: '0.7', lineHeight: '1.8', letterSpacing: '-0.5px' }}>
                AiEYES는 한국외국어대학교 Social Science & AI융합학부의 인공지능학회입니다.<br />
                기존의 관습과 고정관념을 내려놓는 언러닝(Unlearning)으로<br />
                AI와 사회를 잇는 새로운 시각을 탐구합니다.<br />
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '12px', width: '100%', marginTop: '30px' }}
            >
              <button style={btnStyle} onClick={() => router.push('/curriculum')}>커리큘럼 {'▶'}</button>
              <button style={btnStyle} onClick={() => router.push('/members')}>멤버소개 {'▶'}</button>
            </motion.div>
          </main>
        </div>

        {/* --- 섹션 2: 활동 하이라이트 --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ width: '100%', padding: '240px 0 120px 0', backgroundColor: '#000', overflow: 'hidden', position: 'relative' }}
        >
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              gap: 30px;
              width: max-content;
              animation: marquee 25s linear infinite;
              padding: 0 15px;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            .carousel-card {
              flex: 0 0 auto;
              width: 380px;
              height: 480px;
              background-color: rgba(255, 255, 255, 0.04);
              border: 1px solid rgba(255, 255, 255, 0.08);
              border-radius: 24px;
              padding: 40px;
              display: flex;
              flex-direction: column;
              box-sizing: border-box;
              position: relative;
              box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0,0,0,0.3);
              will-change: transform;
              transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.4s ease;
              cursor: pointer;
            }
            .carousel-card:hover {
              transform: translateY(-10px);
              border-color: rgba(255, 255, 255, 0.3);
            }
            .inner-box {
              flex: 1;
              margin-top: 30px;
              position: relative;
              border-radius: 16px;
              background: linear-gradient(135deg, rgba(104, 50, 187, 0.2), rgba(59, 130, 246, 0.1));
              border: 1px solid rgba(255,255,255,0.05);
              overflow: hidden; /* 내부에서 사진이 위로 올라오도록 설정 */
            }
            .card-arrow {
              position: absolute;
              bottom: 40px;
              right: 40px;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.05);
              display: flex;
              justify-content: center;
              align-items: center;
              color: rgba(255, 255, 255, 0.3);
              transition: all 0.3s ease;
              opacity: 0;
              transform: translateX(-10px) rotate(-45deg);
            }
            .carousel-card:hover .card-arrow {
              opacity: 1;
              transform: translateX(0) rotate(-45deg);
              background: rgba(255, 255, 255, 0.2);
              color: #fff;
            }
          `}</style>

          <motion.div variants={fadeInUp} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '-1px' }}>
              About AiEYES
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', marginTop: '15px' }}>
              AiEYES가 만들어가는 끊임없는 탐구와 기록들
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="marquee-track">
            {[...carouselItems, ...carouselItems].map((item, idx) => (
              <div key={idx} className="carousel-card" onClick={() => router.push(item.link)}>
                <div style={{ zIndex: 2, position: 'relative' }}>
                  <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 10px 0', color: '#fff', letterSpacing: '-0.5px' }}>{item.title}</h3>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: '1.5', wordBreak: 'keep-all' }}>{item.desc}</p>
                </div>
                
                {/* 썸네일 이미지가 있으면 표시, 없으면 기본 그라데이션 */}
                <div className="inner-box">
                  {item.img && (
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  )}
                </div>
                
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
}

/* --- 스타일 정의 --- */

const heroContainerStyle: React.CSSProperties = {
  backgroundColor: '#000', color: '#fff', minHeight: '100vh',
  fontFamily: 'Pretendard, -apple-system, sans-serif',
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px', position: 'relative', overflow: 'hidden'
};

const gradientTextStyle: React.CSSProperties = {
  background: 'linear-gradient(to right, #f0f9ff 0%, #e0d4f7 50%, #8ca5c9 100%)',
  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
};

const btnStyle: React.CSSProperties = {
  padding: '12px 35px', background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50px',
  color: '#fff', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', transition: 'all 0.3s ease', backdropFilter: 'blur(8px)',
};
