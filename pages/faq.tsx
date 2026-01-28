import Layout from '@components/layout';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "AI와 코딩에 대한 지식이 부족해도 지원 가능한가요?",
      answer: "네 가능합니다! 저희 학회는 전공보다는 배우고자 하는 의지와 성실함을 더 중요하게 생각합니다. 커리큘럼을 따라올 수 있는 기본적인 자세만 있다면 충분히 함께하실 수 있습니다."
    },
    {
      question: "매주 정규 세션은 언제, 어디서 진행되나요?",
      answer: "매주 화요일 6시 30분에 교내 강의실에서 진행됩니다. 시험 기간 직전 2주 간은 휴식 기간입니다."
    },
    {
      question: "주 2회 활동이라고 명시되어 있는데 두 번 모두 고정된 시간에 참석해야 하나요?",
      answer: "아니요 그렇지 않습니다. 화요일에 진행하는 정규 세션 1회를 제외한 나머지 활동은 팀별 스터디로 진행됩니다. 따라서 1회의 구체적인 스터디 시간과 장소는 팀원들끼리 자율적으로 조율하여 진행하시면 됩니다."
    },
    {
      question: "방학 중에도 정규 활동이 계속되나요?",
      answer: "아니요. 학기 중에 집중적으로 활동하며, 방학 중 정규 활동은 없습니다. 다만, 여름 방학 기간에는 희망자를 대상으로 아이디어를 구상해보고 나누는 Ideathon이 진행될 예정입니다."
    },
    {
      question: "학번에 따라 지원 시기나 자격에 차이가 있나요?",
      answer: "네, 학번에 따라 모집 전형이 구분됩니다.\n*24, 25학번: '재학생 모집 기간'에 지원해 주시면 됩니다. \n*26학번(신입생): '신입생 모집 기간'에 맞춰 지원해 주시면 됩니다.\n본인의 학번에 맞는 기간을 꼭 확인 후 지원 부탁드립니다."
    },
    {
      question: "2개 학기를 반드시 연달아 활동해야 하나요?",
      answer: "불가피한 사유로 2개 학기 연속 활동이 어려울 경우 나눠서 활동을 진행하여 수료할 수 있습니다."
    }

  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div style={containerStyle}>
        <header style={headerSectionStyle}>
          <h1 style={titleStyle}>자주 묻는 질문</h1>
        </header>

        <div style={faqListStyle}>
          {faqData.map((item, index) => (
            <div key={index} style={faqItemStyle}>
              {/* 질문 영역 */}
              <div 
                style={questionBoxStyle} 
                onClick={() => toggleAccordion(index)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span>🙋</span>
                  <span style={questionTextStyle}>{item.question}</span>
                </div>
               
                <div style={{
                  ...arrowStyle,
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  {openIndex === index ? '−' : '+'}
                </div>
              </div>

              {/* 답변 영역 */}
              <div style={{
                ...answerBoxStyle,
                maxHeight: openIndex === index ? '200px' : '0',
                padding: openIndex === index ? '20px 30px' : '0 30px',
                opacity: openIndex === index ? 1 : 0
              }}>
                <p style={{whiteSpace: 'pre-wrap', ...answerTextStyle}}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

/* --- 스타일 정의 --- */
const containerStyle: React.CSSProperties = {
  backgroundColor: '#000', color: '#fff', minHeight: '100vh',
  padding: '120px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center'
};

const headerSectionStyle: React.CSSProperties = { textAlign: 'center', marginBottom: '60px' };
const titleStyle: React.CSSProperties = { fontSize: '44px', fontWeight: '700', marginBottom: '20px' };

const faqListStyle: React.CSSProperties = { width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '20px' };

const faqItemStyle: React.CSSProperties = {
  backgroundColor: '#111', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)',
  overflow: 'hidden', transition: 'all 0.3s ease'
};

const questionBoxStyle: React.CSSProperties = {
  padding: '25px 30px', display: 'flex', justifyContent: 'space-between',
  alignItems: 'center', cursor: 'pointer', userSelect: 'none'
};


const questionTextStyle: React.CSSProperties = { fontSize: '1rem', fontWeight: '600' };

const arrowStyle: React.CSSProperties = { fontSize: '12px', opacity: 0.5, transition: 'transform 0.3s ease' };

const answerBoxStyle: React.CSSProperties = {
  backgroundColor: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.05)',
  overflow: 'hidden', transition: 'all 0.3s ease-in-out'
};

const answerTextStyle: React.CSSProperties = {
  fontSize: '1rem', lineHeight: '1.6', color: '#ccc', margin: 0
};