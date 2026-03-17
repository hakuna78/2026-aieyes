import cn from 'classnames';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer 
      className={cn(styles.footer)} 
      style={{ 
       
        backgroundColor: '#000', 
        padding: '80px 40px 60px 40px', 
        marginTop: '100px' 
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