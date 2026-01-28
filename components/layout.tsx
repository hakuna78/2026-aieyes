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

import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';
import { NAVIGATION } from '@lib/constants';
import styles from './layout.module.css';
import Footer from './footer';
import React, { useState } from 'react';
import DemoButton from './hms/demo-cta';
import RoomCta from './hms/demo-cta/room-cta';
import { hmsConfig } from './hms/config';
import ViewSource from './view-source';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function Layout({
  children,
  className,
  hideNav,
  layoutStyles,
  isLive = false
}: Props) {
  const router = useRouter();
  const activeRoute = router.asPath;
  const disableCta = ['/curriculum', '/contact', '/faq'];
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <style jsx global>{`
        html, body {
          overflow-x: hidden !important;
          overflow-y: auto !important; 
          height: auto !important;
          background-color: #000;
        }
        @media (max-width: 950px) {
          .nav-tabs-desktop {
            display: none !important; 
          }
          .mobile-menu-btn {
            display: flex !important; 
          }
        }  
          
        @media (min-width: 951px) {
          .mobile-menu-btn {
            display: none !important; 
          }
        }
      `}</style>
        
       
      <div className={styles.background}>
        {!hideNav && (
          <header 
            className={cn(styles.header)}
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height:'100px',
              backgroundColor: 'transparent', 
              display: 'flex',
              alignItems: 'center', // 세로 중앙 정렬
              justifyContent: 'space-between', 
              zIndex: 1000,
              padding: '20px 50px',
              border:'none',
              
            }}
          >
            <div style={{ position: 'absolute', left: '40px', display:'flex',alignItems:'center',height:'100%', width:'fit-content', zIndex:1010}}>
              <Link href="/">
                <img src='/logo.png' alt = 'aieyes logo'style={{ height: '110px', cursor: 'pointer', width:'auto', marginRight:'10px', display:'block' }}></img>
              </Link>
            </div>

            <div 
            className="nav-tabs-desktop"
            style={{display:'flex',gap: '60px', flex: 1, justifyContent:'center'}}>
              {NAVIGATION.map(({ name, route }) => (
                <Link
                  key={name}
                  href={route}
                  className={cn(styles.tab, {
                    [styles['tab-active']]: activeRoute.startsWith(route)
                  })}
                  style={{ letterSpacing: '1px', fontSize: '16px' , color:'#fff',  whiteSpace:'nowrap'}}
                >
                  {name}
                </Link>
              ))}
            </div>

            <div 
              className='mobile-menu-btn'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ 
                flex: '0 0 120px', display: 'flex', flexDirection: 'column', 
                alignItems: 'flex-end', gap: '6px', cursor: 'pointer', zIndex: 1100 
              }}
            >
              <div style={{ width: '28px', height: '2px', backgroundColor: '#fff' }}></div>
              <div style={{ width: '28px', height: '2px', backgroundColor: '#fff' }}></div>
              <div style={{ width: '28px', height: '2px', backgroundColor: '#fff' }}></div>
            </div>

            {isMenuOpen && (
              <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
                backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', gap: '30px', zIndex: 1050
              }}>
                {NAVIGATION.map(({ name, route }) => (
                  <Link 
                    key={name} 
                    href={route} 
                    onClick={() => setIsMenuOpen(false)}
                    style={{ fontSize: '32px', fontWeight: '800', color: '#fff', textDecoration: 'none', userSelect:'none' }}
                    
                  >
                    {name}
                  </Link>
                ))}

                {/* 닫힘버튼 */}
                <div 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ marginTop: '50px', fontSize: '20px', letterSpacing: '2px', color: '#ffffff', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  X
                </div>
              </div>
            )}
          </header>
        )}

        <ViewSource />
        <div className={styles.page}>
          <main className={styles.main} style={{...layoutStyles, overflow: 'visible', paddingTop: '100px'}}>
            <SkipNavContent />
            <div className={cn(styles.full, className)}>{children}</div>
          </main>
          {!activeRoute.startsWith('/stage') && <Footer />}
        </div>
      </div>
    </>
  );
}
