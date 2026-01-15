import React from 'react';
import './TheoryContent.css';

const TheoryContent = () => {
  const theorySections = [
    {
      title: '3.2. Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội',
      subtitle: 'Hồ Chí Minh không đưa ra định nghĩa cố định về CNXH mà tiếp cận từ nhiều phương diện',
      content: [
        {
          title: '🔹 Về chính trị',
          text: 'CNXH là xã hội dân chủ, nhân dân lao động làm chủ, Nhà nước của dân do dân vì dân, dựa trên liên minh công-nông do Đảng Cộng sản lãnh đạo.',
          image: '🏛️'
        },
        {
          title: '🔹 Về kinh tế',
          text: 'Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu nhằm xóa bỏ bóc lột.',
          image: '🏭'
        },
        {
          title: '🔹 Về văn hóa - đạo đức',
          text: 'Xã hội có trình độ phát triển cao về văn hóa và đạo đức, bảo đảm sự công bằng, hợp lý; con người được tôn trọng.',
          image: '🎭'
        },
        {
          title: '🎯 Mục tiêu',
          text: 'Giải phóng nhân dân lao động khỏi áp bức, nghèo nàn, làm cho mọi người có việc làm, được ấm no và hạnh phúc thực sự.',
          image: '✨'
        }
      ]
    },
    {
      title: '3.2.2. Tính tất yếu khách quan',
      subtitle: 'Tiến lên CNXH là con đường phát triển tất yếu của lịch sử loài người',
      content: [
        {
          title: '📈 Theo quy luật lịch sử',
          text: 'CNXH là giai đoạn phát triển tất yếu sau chủ nghĩa tư bản theo học thuyết Mác-Lênin.',
          image: '📚'
        },
        {
          title: '🇻🇳 Đối với Việt Nam',
          text: 'Sau khi giành độc lập, CNXH là con đường duy nhất giữ vững quyền tự do, xóa bỏ nghèo nàn.',
          image: '🇻🇳'
        }
      ]
    },
    {
      title: '🔄 Động lực xây dựng CNXH',
      subtitle: 'Hồ Chí Minh đặc biệt nhấn mạnh động lực con người',
      content: [
        {
          title: '👥 Nội lực - Con người',
          text: 'Để xây dựng CNXH, trước hết cần có những con người xã hội chủ nghĩa với ý thức, đạo đức phù hợp.',
          image: '👨‍👩‍👧‍👦'
        },
        {
          title: '🏢 Nội lực - Các mặt',
          text: 'Động lực kinh tế - chính trị - văn hóa và sức mạnh khối đại đoàn kết toàn dân.',
          image: '🤝'
        },
        {
          title: '🌍 Ngoại lực',
          text: 'Sự đoàn kết, ủng hộ từ phong trào cộng sản và công nhân quốc tế.',
          image: '🌐'
        }
      ]
    },
    {
      title: '3.2.3. Tư tưởng về thời kỳ quá độ',
      subtitle: 'Giai đoạn tất yếu nhưng vô cùng gian khổ và lâu dài',
      content: [
        {
          title: '📋 Tính chất',
          text: 'Cuộc cách mạng cải biến sâu sắc nhất, phức tạp, lâu dài, khó khăn và gian khổ nhất.',
          image: '🔄'
        },
        {
          title: '🌾 Đặc điểm lớn nhất',
          text: 'Việt Nam tiến thẳng lên CNXH từ nước nông nghiệp lạc hậu, không qua giai đoạn tư bản.',
          image: '🚜'
        },
        {
          title: '🔀 Tình trạng xã hội',
          text: 'Đan xen yếu tố cũ (phong kiến, thực dân) và yếu tố mới của CNXH.',
          image: '⚖️'
        }
      ]
    },
    {
      title: '🎯 Nhiệm vụ cốt lõi trong thời kỳ quá độ',
      subtitle: 'Xây dựng nền tảng cho CNXH thông qua cải biến triệt để',
      content: [
        {
          title: '🏛️ Chính trị',
          text: 'Xây dựng chế độ dân chủ XHCN, bồi dưỡng năng lực làm chủ của nhân dân.',
          image: '🏛️'
        },
        {
          title: '🏭 Kinh tế',
          text: 'Cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới hiện đại.',
          image: '🏭'
        },
        {
          title: '🎭 Văn hóa - Xã hội',
          text: 'Tẩy trừ tàn tích thực dân, phong kiến, xây dựng văn hóa mới.',
          image: '🎭'
        }
      ]
    },
    {
      title: '⚖️ Các nguyên tắc xây dựng',
      subtitle: 'Nguyên tắc khoa học đảm bảo thành công',
      content: [
        {
          title: '📖 Dựa trên chủ nghĩa Mác-Lênin',
          text: 'Tư tưởng Hồ Chí Minh là sự vận dụng sáng tạo vào điều kiện Việt Nam.',
          image: '📖'
        },
        {
          title: '🇻🇳 Giữ vững độc lập dân tộc',
          text: 'Độc lập dân tộc là mục tiêu cao nhất.',
          image: '🇻🇳'
        },
        {
          title: '🤝 Học tập sáng tạo',
          text: 'Học kinh nghiệm nước ngoài nhưng vận dụng sáng tạo, không máy móc.',
          image: '🤝'
        },
        {
          title: '🛡️ Xây dựng đi đôi với chống',
          text: 'Chống tham ô, lãng phí, quan liêu và tư tưởng phi xã hội chủ nghĩa.',
          image: '🛡️'
        }
      ]
    },
    {
      title: '🌸 Hiệu ứng Cánh Bướm',
      subtitle: 'Mỗi quyết định tạo ra hiệu ứng lan tỏa',
      content: [
        {
          title: '🔄 Đi qua thời kỳ quá độ',
          text: 'Con đường kiên trì theo tư tưởng Hồ Chí Minh dẫn đến phát triển bền vững.',
          image: '🔄'
        },
        {
          title: '⚡ Bỏ qua thời kỳ quá độ',
          text: 'Kịch bản giả định bỏ qua giai đoạn lịch sử dẫn đến nhiều hệ lụy.',
          image: '⚡'
        },
        {
          title: '🎲 Trải nghiệm tương tác',
          text: 'Game butterfly effect giúp hiểu trực tiếp các lựa chọn lịch sử.',
          image: '🎲'
        }
      ]
    },
    {
      title: '📚 Ví dụ thực tế: Bắc Âu',
      subtitle: 'Mô hình xã hội phúc lợi thành công',
      content: [
        {
          title: '🇳🇴 Na Uy',
          text: 'Sử dụng dầu mỏ, năng lượng tái tạo để xây dựng hệ thống phúc lợi toàn diện.',
          image: '🇳🇴'
        },
        {
          title: '🇸🇪 Thụy Điển',
          text: 'Mức sống cao, bất bình đẳng thấp, phúc lợi xã hội toàn diện.',
          image: '🇸🇪'
        },
        {
          title: '📖 Bài học',
          text: 'Học hỏi thành tựu văn minh mà không bỏ qua thời kỳ lịch sử.',
          image: '📖'
        }
      ]
    }
  ];

  return (
    <div className="theory-content">
      <div className="theory-header">
        <h1>📚 Nội dung Lý thuyết</h1>
        <p>Tư tưởng Hồ Chí Minh về CNXH và thời kỳ quá độ</p>
      </div>

      <div className="theory-sections">
        {theorySections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="theory-section">
            <div className="section-header">
              <h2>{section.title}</h2>
              <p className="section-subtitle">{section.subtitle}</p>
            </div>

            <div className="section-content">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="content-card">
                  <div className="card-icon">{item.image}</div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Academic Integrity Section */}
      <div className="academic-section">
        <h2>🎓 Academic Integrity & AI Usage</h2>
        <div className="academic-grid">
          <div className="academic-card">
            <div className="academic-icon">🤖</div>
            <h3>AI Support</h3>
            <p>Sử dụng AI để tối ưu hóa cấu trúc nội dung, tạo ví dụ minh họa, hỗ trợ nghiên cứu tài liệu.</p>
          </div>
          <div className="academic-card">
            <div className="academic-icon">📚</div>
            <h3>Nguồn gốc</h3>
            <p>Tất cả nội dung được kiểm chứng từ: Văn kiện Đảng, tác phẩm Hồ Chí Minh, nghiên cứu học thuật.</p>
          </div>
          <div className="academic-card">
            <div className="academic-icon">✨</div>
            <h3>Sáng tạo ứng dụng</h3>
            <p>Kết hợp lý thuyết với công nghệ tương tác để giáo dục hiệu quả về tư tưởng Hồ Chí Minh.</p>
          </div>
          <div className="academic-card">
            <div className="academic-icon">🎯</div>
            <h3>Ứng dụng thực tiễn</h3>
            <p>Kết nối lý thuyết với các vấn đề đương đại như bất bình đẳng xã hội, phát triển bền vững.</p>
          </div>
        </div>
      </div>

      {/* Floating butterflies */}
      <div className="theory-butterflies">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="butterfly" style={{
            left: `${10 + i * 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${10 + i * 2}s`
          }}>🦋</div>
        ))}
      </div>
    </div>
  );
};

export default TheoryContent;