import React from 'react';
import './Header.css';

const Header = ({ currentMode, onSwitchToGame, onSwitchToTheory }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          🌸 Hiệu ứng Cánh Bướm
        </h1>
        <h2 className="header-subtitle">
          Tư tưởng Hồ Chí Minh về CNXH và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam
        </h2>
        <p className="header-description">
          Mỗi quyết định đều tạo ra những hệ quả khác nhau. Hãy khám phá con đường phía trước!
        </p>

        <div className="header-navigation">
          <div className="nav-tabs">
            <button
              className={`nav-tab ${currentMode === 'game' ? 'active' : ''}`}
              onClick={onSwitchToGame}
            >
              🎮 Game Tương Tác
              <span className="tab-description">Trải nghiệm butterfly effect</span>
            </button>
            <button
              className={`nav-tab ${currentMode === 'theory' ? 'active' : ''}`}
              onClick={onSwitchToTheory}
            >
              📚 Nội Dung Lý Thuyết
              <span className="tab-description">Tư tưởng Hồ Chí Minh</span>
            </button>
          </div>

          <div className="mode-info">
            {currentMode === 'game' ? (
              <div className="info-panel game-info">
                <h3>🎮 Chế độ Game</h3>
                <p>Khám phá các lựa chọn lịch sử thông qua cây quyết định tương tác</p>
                <div className="info-features">
                  <span>🌸 Hiệu ứng cánh bướm</span>
                  <span>📊 Cây quyết định</span>
                  <span>🎯 Kết quả đa dạng</span>
                </div>
              </div>
            ) : (
              <div className="info-panel theory-info">
                <h3>📚 Chế độ Lý thuyết</h3>
                <p>Nội dung chi tiết về tư tưởng Hồ Chí Minh và thời kỳ quá độ</p>
                <div className="info-features">
                  <span>📖 Lý thuyết đầy đủ</span>
                  <span>🎯 Ví dụ thực tế</span>
                  <span>🤖 AI Usage</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

