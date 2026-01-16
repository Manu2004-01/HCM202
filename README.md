# 🌸 Hiệu ứng Cánh Bướm - Tư tưởng Hồ Chí Minh

Trò chơi tương tác và công cụ thuyết trình về Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam.

## 📋 Mô tả

Đây là một ứng dụng web React.js tích hợp cả chế độ **game tương tác** và **chế độ thuyết trình**, mô phỏng hiệu ứng cánh bướm thông qua cây quyết định. Người dùng có thể:

- 🎮 **Chơi game tương tác**: Khám phá các quyết định trong thời kỳ quá độ
- 📊 **Chế độ thuyết trình**: Hướng dẫn thuyết trình với timeline 45 phút
- 📚 **Học lý thuyết**: Hiểu sâu về tư tưởng Hồ Chí Minh về CNXH

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

## 🎮 Chế độ Game Tương tác

### Cách chơi:
1. Bắt đầu từ **TẦNG 0 – QUYẾT ĐỊNH LỚN (ROOT)**
2. Chọn một trong hai con đường chính:
   - **A. 🌱 Đi qua thời kỳ quá độ** (theo tư tưởng Hồ Chí Minh)
   - **B. 🔥 Không đi qua thời kỳ quá độ** (bỏ qua giai đoạn lịch sử)
3. Tiếp tục chọn các quyết định ở các tầng tiếp theo
4. Xem kết quả của từng lựa chọn (Good ✅, Bad ❌, hoặc Neutral ⚖️)
5. Sử dụng nút "Quay lại" để khám phá các nhánh khác
6. Nhấn "Bắt đầu lại" để bắt đầu từ đầu

### Lý thuyết tích hợp:
Mỗi lựa chọn đều có phần giải thích lý thuyết liên quan đến tư tưởng Hồ Chí Minh về:
- Bản chất chủ nghĩa xã hội
- Tính tất yếu khách quan
- Động lực xây dựng CNXH
- Các nguyên tắc trong thời kỳ quá độ

## 📊 Chế độ Thuyết trình (45 phút)

### Timeline chi tiết:
1. **🎮 Game mở đầu** (5 phút): Giới thiệu khái niệm hiệu ứng cánh bướm
2. **📚 Lý thuyết** (25 phút):
   - Tư tưởng HCM về CNXH (bản chất, mục tiêu)
   - Tư tưởng HCM về thời kỳ quá độ (tính chất, nhiệm vụ)
   - Động lực và nguyên tắc xây dựng
3. **❓ Phần Q&A** (10 phút): Thảo luận và giải đáp thắc mắc
4. **🎯 Game tương tác cuối** (5 phút): Thử thách áp dụng lý thuyết

### Cách sử dụng chế độ thuyết trình:
- Nhấn nút "📊 Chế độ Thuyết trình" ở header
- Sử dụng nút điều hướng để chuyển giữa các slide
- Có thể quay lại game bất cứ lúc nào

## 📁 Cấu trúc dự án

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DecisionTree.js          # Component game tương tác
│   │   ├── DecisionTree.css         # Style cho game
│   │   ├── Header.js                # Header với nút chuyển chế độ
│   │   ├── Header.css               # Style cho header
│   │   ├── PresentationScreen.js    # Component thuyết trình
│   │   └── PresentationScreen.css   # Style cho thuyết trình
│   ├── data/
│   │   └── decisionTree.js          # Dữ liệu cây quyết định
│   ├── App.js                       # App chính với state management
│   ├── App.css                      # Style chung
│   ├── index.js                     # Entry point
│   └── index.css                    # Style cơ bản
├── package.json
└── README.md
```

## 🎨 Tính năng

### Game tương tác:
- ✨ Giao diện hiện đại với gradient và animation mượt mà
- 🦋 Hiệu ứng cánh bướm bay lơ lửng trong background
- 📊 Cây quyết định tương tác với nhiều tầng lựa chọn
- 🎯 Hiển thị kết quả với mã màu (Good ✅, Bad ❌, Neutral ⚖️)
- 🧭 Breadcrumb navigation để theo dõi đường đi
- 📚 Lý thuyết tích hợp tại mỗi quyết định
- 📱 Responsive design, hỗ trợ mobile và desktop

### Chế độ thuyết trình:
- 📊 Timeline thuyết trình có cấu trúc (45 phút)
- 🎯 Phân chia rõ ràng: Game → Lý thuyết → Q&A → Game cuối
- 🖥️ Giao diện trình chiếu chuyên nghiệp
- ⏱️ Hiển thị thời gian cho từng phần
- 🔄 Điều hướng linh hoạt giữa các slide

## 🔧 Công nghệ sử dụng

- React 18.2.0
- CSS3 với animations
- React Hooks (useState)
- Font Inter từ Google Fonts

## 🤖 AI Usage & Học thuật

### Cam kết liêm chính học thuật:
- ✅ **Phụ lục AI Usage minh bạch**: Tất cả nội dung được nghiên cứu và tổng hợp từ tài liệu chính thống về tư tưởng Hồ Chí Minh
- ✅ **Kiểm chứng thông tin**: Thông tin được kiểm chứng từ nguồn đáng tin cậy
- ✅ **Cam kết liêm chính**: Không sao chép nguyên văn, có trích dẫn và nguồn gốc rõ ràng
- ✅ **Ứng dụng sáng tạo**: Áp dụng tư tưởng vào dạng game tương tác để tăng tính trải nghiệm

### Nguồn tài liệu tham khảo:
- Tài liệu chính thức về tư tưởng Hồ Chí Minh
- Các bài nghiên cứu về thời kỳ quá độ ở Việt Nam
- Học thuyết hình thái kinh tế - xã hội của Mác - Lênin

## 📝 License

Dự án này được tạo cho mục đích giáo dục về Tư tưởng Hồ Chí Minh. Phù hợp cho giảng dạy, thuyết trình và nghiên cứu học thuật.