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

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const lines = 25;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        for (let x = 0; x <= width; x += 15) {
          const normalizedX = x / width;
          // 부드럽게 퍼져나가는 파동
          const amplitude = height * 0.35 * Math.sin(normalizedX * Math.PI);
          
          const wave1 = Math.sin(normalizedX * 4 + time * 0.007 + i * 0.15);
          const wave2 = Math.cos(normalizedX * 3 - time * 0.005 + i * 0.08);
          
          const y = height * 0.6 + (wave1 + wave2) * amplitude + (i * 8 - (lines * 4));
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        // 투명도(깊이감) 계산
        const alpha = 0.2 + (i / lines) * 0.5;
        
        // 끊기지 않고 전체가 다 보이는 가로 색상 그라데이션
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(14, 165, 233, ${alpha})`); // 좌측: 청록색
        gradient.addColorStop(0.5, `rgba(104, 50, 187, ${Math.min(1, alpha * 1.5)})`); // 중앙: 보라색 (밝게)
        gradient.addColorStop(1, `rgba(59, 130, 246, ${alpha})`); // 우측: 파란색
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(104, 50, 187, 0.8)';
        ctx.stroke();
      }

      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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
    { title: "Project & Research", desc: "사회 문제를 정의하고 솔루션을 설계하는 실전 AI 프로젝트", img: "" },
    { title: "Regular Study", desc: "관심 분야별 심도 있는 스터디와 인사이트를 공유하는 정기 세션", img: "" },
    { title: "Academic Fair", desc: "학회원들과 함께 완성한 모델과 프로토타입 전시 및 네트워킹", img: "" },
    { title: "Ideathon", desc: "기획력 강화를 위한 리버스 피칭과 팀 빌딩 해커톤", img: "" },
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
          {/* 파란색 그물망 연속 파동 캔버스 배경 (절대 깨지지 않음) */}
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

        {/* --- 섹션 2: 활동 하이라이트 (Carousel) --- */}
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
              <div key={idx} style={carouselCardStyle}>
                <div style={{ zIndex: 2, position: 'relative' }}>
                  <h3 style={{ fontSize: '28px', fontWeight: '800', margin: '0 0 10px 0', color: '#fff', letterSpacing: '-0.5px' }}>{item.title}</h3>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: '1.5', wordBreak: 'keep-all' }}>{item.desc}</p>
                </div>
                
                {item.img ? (
                  <div style={{ flex: 1, marginTop: '30px', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                  </div>
                ) : (
                  <div style={{ flex: 1, marginTop: '30px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(104, 50, 187, 0.2), rgba(59, 130, 246, 0.1))', border: '1px solid rgba(255,255,255,0.05)' }} />
                )}
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

const carouselCardStyle: React.CSSProperties = {
  flex: '0 0 auto',
  width: '380px',
  height: '480px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '24px',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
  backdropFilter: 'saturate(180%) blur(20px)',
  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0,0,0,0.3)'
};