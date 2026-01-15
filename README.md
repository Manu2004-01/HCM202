# 🌸 Hiệu ứng Cánh Bướm - Tư tưởng Hồ Chí Minh

Trò chơi tương tác về Tư tưởng Hồ Chí Minh về thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam.

## 📋 Mô tả

Đây là một ứng dụng web React.js mô phỏng hiệu ứng cánh bướm thông qua cây quyết định. Người dùng có thể khám phá các quyết định khác nhau và xem kết quả của từng lựa chọn trong quá trình phát triển đất nước.

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy ứng dụng
```bash
npm start
```

Ứng dụng sẽ mở tại [http://localhost:3000](http://localhost:3000)

### Build cho production
```bash
npm run build
```

## 🎮 Cách chơi

1. Bắt đầu từ **TẦNG 0 – QUYẾT ĐỊNH LỚN (ROOT)**
2. Chọn một trong hai con đường chính:
   - **A. Đi qua thời kỳ quá độ**
   - **B. Không đi qua thời kỳ quá độ**
3. Tiếp tục chọn các quyết định ở các tầng tiếp theo
4. Xem kết quả của từng lựa chọn (Good ✅, Bad ❌, hoặc Neutral ⚖️)
5. Sử dụng nút "Quay lại" để khám phá các nhánh khác
6. Nhấn "Bắt đầu lại" để bắt đầu từ đầu

## 📁 Cấu trúc dự án

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DecisionTree.js
│   │   ├── DecisionTree.css
│   │   ├── Header.js
│   │   └── Header.css
│   ├── data/
│   │   └── decisionTree.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Tính năng

- ✨ Giao diện hiện đại với gradient và animation mượt mà
- 🦋 Hiệu ứng cánh bướm bay lơ lửng trong background
- 📊 Cây quyết định tương tác với nhiều tầng
- 🎯 Hiển thị kết quả với mã màu (Good/Bad/Neutral)
- 🧭 Breadcrumb navigation để theo dõi đường đi
- 📱 Responsive design, hỗ trợ mobile và desktop

## 🔧 Công nghệ sử dụng

- React 18.2.0
- CSS3 với animations
- React Hooks (useState)
- Font Inter từ Google Fonts

## 📝 License

Dự án này được tạo cho mục đích giáo dục về Tư tưởng Hồ Chí Minh.