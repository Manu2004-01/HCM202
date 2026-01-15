import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          🌸 Hiệu ứng Cánh Bướm
        </h1>
        <h2 className="header-subtitle">
          Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam
        </h2>
        <p className="header-description">
          Mỗi quyết định đều tạo ra những hệ quả khác nhau. Hãy khám phá con đường phía trước!
        </p>
      </div>
    </header>
  );
};

export default Header;

