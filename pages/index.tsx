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

import { Router, useRouter } from 'next/router';
import { SkipNavContent } from '@reach/skip-nav';

import Page from '@components/page';
import ConfContent from '@components/index';
import { META_DESCRIPTION } from '@lib/constants';
import Layout from '@components/layout';
import Head from 'next/head';

export default function Conf() {
  const router = useRouter();
  return(
    <>
      <Head>
        <title>AiEYES</title>
      </Head>

    <Layout>
      <div style = {{
        background: 'url("/stars.png")',
        backgroundColor:'#000',
        color: '#fff',
        minHeight:'100vh',
        fontFamily: 'Pretendard, -apple-system, sans-serif',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',

        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'center',
        padding: '0 20px',
        position:'relative'
        }} >

        <main style={{ marginTop: '-30px' }}>
          <h1 style={{ fontSize: '90px', fontWeight: '900', margin: '0', lineHeight: '1.1', letterSpacing:'1px' }}>
            AiEYES
          </h1>  
          

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '800', margin: '0', lineHeight: '1.2',letterSpacing:'-1px' }}>
              Unlearn the Obvious,
              See the <span style={{
                background: 'linear-gradient(to right, #1e3a8a, #3b82f6, #facc15)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Intelligence.</span>
            </h2>
          </div>
          
          <div style ={{marginTop: '70px', marginBottom: '100px'}}>
            <p style={{ fontSize: '1.1rem', fontWeight: '400', opacity: '0.7', marginBottom: '60px', lineHeight:'1.8', letterSpacing:'-0.5px'}}>
              AiEYES는 한국외국어대학교 Social Science & AI융합학부의 딥러닝학회입니다.<br/>
              기존의 관습과 고정관념을 내려놓는 언러닝(Unlearning)으로<br/>
              AI와 사회를 잇는 새로운 시각을 탐구합니다.<br/>

            </p>
          </div>

          <div style={{ 
            marginTop:'70px',
            marginBottom:'100px',
            display: 'flex', 
            flexDirection:'row',
            justifyContent: 'center', 
            alignItems:'center',
            gap:'12px',
            width:'100%'
            
          }}>
            <button style = {btnStyle}
            onClick={() => router.push('/recruiting')}>지원하기 ▶</button>
            <button style = {btnStyle}
            onClick={()=> router.push('/activities')}>활동보기 ▶</button>
          </div>
          </main>
      </div>
    </Layout>
    </>
  );
}

const btnStyle = {
  //width:'320px',
  padding: '15px 45px',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius:'50px',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  outline:'none',
  backdropFilter: 'blur(8px)',
};


