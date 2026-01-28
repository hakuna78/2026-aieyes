import cn from 'classnames';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer 
      className={cn(styles.footer)} 
      style={{ 
       
        backgroundColor: '#000', 
        padding: '80px 40px 60px 40px', // 상단 패딩을 늘려 선을 콘텐츠보다 위로 올림
        marginTop: '100px' // 페이지 본문과의 간격 확보
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ marginBottom: '80px' }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Copyright © AiEYES. All Rights Reserved.
          </p>
        </div>

       </div>
    </footer>
  );
}