import cn from 'classnames';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', padding: '40px 20px', marginTop: '100px', color: '#888', fontSize: '13px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* 구분선 */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.15)', marginBottom: '20px' }} />
        
        {/* 하단 정보 영역 */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          
          {/* 저작권 */}
          <div style={{ color: '#888' }}>
            Copyright © 2026 AiEYES.
          </div>

          {/* 링크 영역 */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a 
              href="https://www.instagram.com/aieyes.official/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = '#888'}
            >
              {/* Instagram Logo SVG */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>

            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>

            <a 
              href="mailto:aieyes1357@gmail.com" 
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
              onMouseOut={(e) => e.currentTarget.style.color = '#888'}
            >
              {/* Email SVG */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}