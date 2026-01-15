import React from 'react';
import './Header.css';

const Header = ({ currentMode, onSwitchToGame, onSwitchToTheory }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          Tư tưởng Hồ Chí Minh về CNXH
        </h1>
        <h2 className="header-subtitle">
          và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam
        </h2>

        <div className="header-navigation">
          <div className="nav-tabs">
            <button
              className={`nav-tab ${currentMode === 'game' ? 'active' : ''}`}
              onClick={onSwitchToGame}
            >
              🎮 Trò chơi tương tác
              <span className="tab-description">Hiệu ứng cánh bướm</span>
            </button>
            <button
              className={`nav-tab ${currentMode === 'theory' ? 'active' : ''}`}
              onClick={onSwitchToTheory}
            >
              📚 Lý thuyết
              <span className="tab-description">Nội dung chi tiết</span>
            </button>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;

