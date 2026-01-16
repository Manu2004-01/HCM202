import React, { useState } from 'react';
import './TheoryContent.css';

const TheoryContent = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const theorySections = [
    {
      title: '3.2. Tư tưởng Hồ Chí Minh về CNXH',
      subtitle: 'Tiếp cận từ nhiều phương diện để nhân dân dễ hiểu',
      mainPoints: [
        {
          icon: '🏛️',
          title: 'Chính trị',
          summary: 'Nhà nước của dân, do dân, vì dân',
          details: 'Xã hội dân chủ XHCN: nhân dân lao động làm chủ thực sự. Liên minh công-nông do Đảng Cộng sản lãnh đạo.',
          example: {
            title: 'Ví dụ: Dân chủ trực tiếp',
            content: 'Hội nghị người lao động trong doanh nghiệp nhà nước, quyền giám sát của nhân dân qua Mặt trận Tổ quốc.',
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400'
          }
        },
        {
          icon: '🏭',
          title: 'Kinh tế',
          summary: 'Phát triển cao, xóa bỏ bóc lột',
          details: 'Lực lượng sản xuất hiện đại + Công hữu về tư liệu sản xuất chủ yếu = Xóa bỏ bóc lột, làm theo năng lực - hưởng theo lao động.',
          example: {
            title: 'Phân biệt: CNXH vs CNCS',
            content: 'CNXH: Làm theo năng lực, hưởng theo lao động (xóa giá trị thặng dư). CNCS: Làm theo năng lực, hưởng theo nhu cầu (sản xuất tự động hóa).',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'
          }
        },
        {
          icon: '🎭',
          title: 'Văn hóa',
          summary: 'Dân tộc, khoa học, đại chúng',
          details: 'Trình độ văn hóa, đạo đức cao. Con người được tôn trọng, các dân tộc đoàn kết. Công bằng và hợp lý.',
          example: {
            title: 'Thực tiễn VN',
            content: 'Chính sách ưu tiên giáo dục, y tế. Bảo tồn văn hóa 54 dân tộc trong khi hội nhập quốc tế.',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400'
          }
        }
      ]
    },
    {
      title: 'Ví dụ quốc tế: Các nước Bắc Âu',
      subtitle: 'Mô hình phúc lợi xã hội thành công (lưu ý: vẫn là TBCN)',
      isExample: true,
      mainPoints: [
        {
          icon: '🇳🇴',
          title: 'Na Uy',
          summary: 'Quỹ hưu trí lớn nhất thế giới',
          details: 'Sử dụng dầu mỏ xây dựng quỹ chủ quyền 1.4 nghìn tỷ USD. Đầu tư năng lượng tái tạo (thuỷ điện 95%, gió, sóng biển).',
          example: {
            title: 'Kết quả',
            content: 'GDP/người: $89,000. Phúc lợi toàn diện: Giáo dục miễn phí, Y tế công, Trợ cấp thất nghiệp cao. Bất bình đẳng thấp nhất thế giới.',
            image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400',
            note: '⚠️ Lưu ý: Đã qua giai đoạn TBCN phát triển, vẫn là chế độ tư hữu nhưng có phúc lợi xã hội cao'
          }
        },
        {
          icon: '🇸🇪',
          title: 'Thụy Điển',
          summary: 'Mô hình "Trung dung"',
          details: 'Kết hợp kinh tế thị trường với phúc lợi xã hội mạnh. Doanh nghiệp tư nhân phát triển + thuế cao để tái phân phối.',
          example: {
            title: 'Đặc điểm',
            content: 'Thuế thu nhập 52-57% để tài trợ: Y tế miễn phí, Giáo dục đại học miễn phí, Nghỉ thai sản 480 ngày có lương.',
            image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400',
            note: '📖 Bài học: Đã hoàn thành công nghiệp hóa, tích lũy vốn qua TBCN, sau đó chuyển sang phúc lợi cao'
          }
        },
        {
          icon: '🔍',
          title: 'So sánh với VN',
          summary: 'Tại sao không học theo?',
          details: 'Bắc Âu đã trải qua giai đoạn TBCN phát triển (200+ năm). VN tiến thẳng từ phong kiến lạc hậu → CNXH (bỏ qua TBCN về chính trị).',
          example: {
            title: 'Khác biệt cốt lõi',
            content: 'Bắc Âu: Tư hữu tư liệu sản xuất, tái phân phối qua thuế. VN: Công hữu chủ yếu, nhà nước giữ vai trò chủ đạo trong kinh tế.',
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400'
          }
        }
      ]
    },
    {
      title: '3.2.3. Thời kỳ quá độ lên CNXH',
      subtitle: 'Giai đoạn tất yếu, gian khổ và lâu dài',
      mainPoints: [
        {
          icon: '🌉',
          title: 'Khái niệm',
          summary: 'Cầu nối từ lạc hậu → văn minh',
          details: 'Thời kỳ quá độ như chiếc cầu dài và gập ghềnh để chuyển hóa hoàn toàn một đất nước nghèo nàn thành xã hội văn minh, hiện đại.',
          example: {
            title: 'Đặc điểm VN',
            content: 'Tiến THẲNG từ nông nghiệp lạc hậu → CNXH, bỏ qua giai đoạn TBCN về chính trị (nhưng học hỏi thành tựu kinh tế, khoa học).',
            image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400'
          }
        },
        {
          icon: '⚔️',
          title: 'Nhiệm vụ cốt lõi',
          summary: '3 trụ cột chuyển đổi',
          details: 'Chính trị: Dân chủ XHCN. Kinh tế: Cải tạo cũ, xây mới. Văn hóa: Tẩy trừ thực dân-phong kiến.',
          example: {
            title: 'Thực tiễn',
            content: 'Cải cách ruộng đất (1953-1957), Cải tạo công thương nghiệp (1958-1960), Xây dựng công nghiệp hóa.',
            image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=400'
          }
        },
        {
          icon: '⚖️',
          title: 'Nguyên tắc',
          summary: '4 nguyên tắc vàng',
          details: '1) Dựa trên Mác-Lênin 2) Giữ vững độc lập dân tộc 3) Học tập sáng tạo, không máy móc 4) Xây dựng đi đôi với chống (tham ô, lãng phí, quan liêu).',
          example: {
            title: 'Ý nghĩa "Bỏ qua TBCN"',
            content: 'Bỏ qua sự thống trị về chính trị, giai cấp tư sản cầm quyền. KHÔNG bỏ qua thành tựu khoa học, công nghệ, quản lý.',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400'
          }
        }
      ]
    },
    {
      title: 'Hiệu ứng Cánh Bướm',
      subtitle: 'Trải nghiệm tương tác để hiểu sâu hơn',
      isInteractive: true,
      mainPoints: [
        {
          icon: '🎮',
          title: 'Game: What If?',
          summary: 'Nếu VN không đi qua thời kỳ quá độ?',
          details: 'Trò chơi mô phỏng các kịch bản lịch sử giả định để hiểu rõ tầm quan trọng của con đường quá độ lên CNXH.',
          example: {
            title: 'Cách chơi',
            content: 'Chuyển sang tab "Game" để trải nghiệm cây quyết định tương tác. Mỗi lựa chọn tạo ra hệ quả khác nhau.',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400'
          }
        }
      ]
    }
  ];

  return (
    <div className="theory-content">
      <div className="theory-header">
        <h1>Tư tưởng Hồ Chí Minh về CNXH và thời kỳ quá độ</h1>
        <p className="header-subtitle">Click vào từng mục để xem chi tiết</p>
      </div>

      <div className="theory-sections">
        {theorySections.map((section, sectionIndex) => (
          <div 
            key={sectionIndex} 
            className={`theory-section ${section.isExample ? 'example-section' : ''} ${section.isInteractive ? 'interactive-section' : ''}`}
          >
            <div className="section-header">
              <h2>{section.title}</h2>
              <p className="section-subtitle">{section.subtitle}</p>
            </div>

            <div className="section-content">
              {section.mainPoints.map((point, pointIndex) => {
                const isExpanded = expandedSection === `${sectionIndex}-${pointIndex}`;
                return (
                  <div key={pointIndex} className="content-card">
                    <div 
                      className="card-header"
                      onClick={() => toggleSection(`${sectionIndex}-${pointIndex}`)}
                    >
                      <div className="card-icon">{point.icon}</div>
                      <div className="card-title">
                        <h3>{point.title}</h3>
                        <p className="card-summary">{point.summary}</p>
                      </div>
                      <div className={`expand-arrow ${isExpanded ? 'expanded' : ''}`}>
                        ▼
                      </div>
                    </div>
                    
                    {isExpanded && (
                      <div className="card-details">
                        <p className="details-text">{point.details}</p>
                        
                        {point.example && (
                          <div className="example-box">
                            <h4>{point.example.title}</h4>
                            <div className="example-content">
                              {point.example.image && (
                                <img 
                                  src={point.example.image} 
                                  alt={point.example.title}
                                  className="example-image"
                                />
                              )}
                              <p>{point.example.content}</p>
                              {point.example.note && (
                                <div className="example-note">
                                  {point.example.note}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* References Section */}
      <div className="references-section">
        <h2>📖 Tài liệu tham khảo</h2>
        <div className="references-grid">
          <div className="reference-card">
            <div className="ref-icon">📚</div>
            <h3>Nguồn chính thống</h3>
            <ul>
              <li>Hồ Chí Minh toàn tập (NXB Chính trị Quốc gia, 2011)</li>
              <li>Văn kiện Đại hội Đảng các thời kỳ</li>
              <li>Giáo trình Tư tưởng Hồ Chí Minh (Bộ GD&ĐT)</li>
            </ul>
          </div>
          <div className="reference-card">
            <div className="ref-icon">🌍</div>
            <h3>Ví dụ quốc tế</h3>
            <ul>
              <li>Norway Government Pension Fund Global</li>
              <li>OECD Data on Nordic Countries</li>
              <li>World Bank Development Indicators</li>
            </ul>
          </div>
          <div className="reference-card">
            <div className="ref-icon">📊</div>
            <h3>Dữ liệu thực tiễn</h3>
            <ul>
              <li>Tổng cục Thống kê Việt Nam</li>
              <li>Báo cáo phát triển con người (UNDP)</li>
              <li>World Inequality Database</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Connection to Current Issues */}
      <div className="current-issues-section">
        <h2>🔗 Liên hệ thực tiễn đương đại</h2>
        <div className="issues-grid">
          <div className="issue-card">
            <div className="issue-icon">💰</div>
            <h3>Bất bình đẳng gia tăng</h3>
            <p>Khoảng cách giàu nghèo tăng lên toàn cầu. Mỹ: 1% giàu nhất sở hữu 32% tài sản quốc gia.</p>
            <p className="issue-link">→ Liên hệ: Mục tiêu xóa bỏ bóc lột, công bằng xã hội của CNXH</p>
          </div>
          <div className="issue-card">
            <div className="issue-icon">🔫</div>
            <h3>Vấn đề súng đạn (Mỹ)</h3>
            <p>Hàng năm 40,000+ người chết do súng. Tự do cá nhân vs an ninh cộng đồng?</p>
            <p className="issue-link">→ Liên hệ: Vai trò nhà nước bảo vệ lợi ích tập thể, không phải tư bản cá nhân</p>
          </div>
          <div className="issue-card">
            <div className="issue-icon">🌡️</div>
            <h3>Biến đổi khí hậu</h3>
            <p>Lợi nhuận tư nhân vs trách nhiệm môi trường. Các tập đoàn dầu mỏ kìm hãm năng lượng sạch.</p>
            <p className="issue-link">→ Liên hệ: Công hữu tư liệu sản xuất để ưu tiên lợi ích chung, không chỉ lợi nhuận</p>
          </div>
          <div className="issue-card">
            <div className="issue-icon">🏥</div>
            <h3>Khủng hoảng y tế</h3>
            <p>Mỹ chi 18% GDP cho y tế nhưng 30 triệu người không có bảo hiểm. Thuốc insulin giá cao gấp 10 lần nước khác.</p>
            <p className="issue-link">→ Liên hệ: Y tế công miễn phí trong CNXH, con người quan trọng hơn lợi nhuận</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheoryContent;