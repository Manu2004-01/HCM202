export const decisionTree = {
  id: 'root',
  title: 'TẦNG 0 – QUYẾT ĐỊNH LỚN (ROOT)',
  description: 'Bạn đang ở điểm khởi đầu của một hành trình quan trọng...',
  options: [
    {
      id: 'A',
      title: '🌱 A. Đi qua thời kỳ quá độ',
      description: 'Lựa chọn con đường chuyển đổi từng bước',
      options: [
        {
          id: 'A1',
          title: 'A1. Ưu tiên ổn định chính trị – xã hội',
          description: 'Tập trung vào việc duy trì trật tự và ổn định',
          options: [
            {
              id: 'A1.1',
              title: 'A1.1 Giữ cơ chế tập trung quá lâu',
              description: 'Trì trệ - Quan liêu - Nhưng xã hội ít xung đột',
              outcome: 'Bad',
              result: 'Trì trệ - Quan liêu - Nhưng xã hội ít xung đột'
            },
            {
              id: 'A1.2',
              title: 'A1.2 Điều chỉnh linh hoạt (Đổi mới)',
              description: 'Kinh tế thị trường định hướng XHCN - Nhà nước vẫn dẫn dắt - Xã hội ổn định',
              outcome: 'Good',
              result: 'Kinh tế thị trường định hướng XHCN - Nhà nước vẫn dẫn dắt - Xã hội ổn định'
            }
          ]
        },
        {
          id: 'A2',
          title: 'A2. Ưu tiên cải tạo kinh tế cũ',
          description: 'Tập trung vào việc chuyển đổi cơ cấu kinh tế',
          options: [
            {
              id: 'A2.1',
              title: 'A2.1 Cải tạo quá nhanh',
              description: 'Sản xuất giảm - Thiếu động lực - Đời sống khó khăn',
              outcome: 'Bad',
              result: 'Sản xuất giảm - Thiếu động lực - Đời sống khó khăn'
            },
            {
              id: 'A2.2',
              title: 'A2.2 Cải tạo từng bước',
              description: 'Kinh tế nhiều thành phần - Tránh sốc xã hội - Phù hợp tư tưởng HCM',
              outcome: 'Good',
              result: 'Kinh tế nhiều thành phần - Tránh sốc xã hội - Phù hợp tư tưởng HCM'
            }
          ]
        },
        {
          id: 'A3',
          title: 'A3. Ưu tiên xây dựng con người mới',
          description: 'Tập trung vào việc phát triển nhân lực và giáo dục',
          options: [
            {
              id: 'A3.1',
              title: 'A3.1 Nặng tuyên truyền, nhẹ hiệu quả',
              description: 'Hình thức - Hiệu quả thấp - Mất niềm tin',
              outcome: 'Bad',
              result: 'Hình thức - Hiệu quả thấp - Mất niềm tin'
            },
            {
              id: 'A3.2',
              title: 'A3.2 Gắn giáo dục với thực tiễn',
              description: 'Con người là động lực - Xã hội bền vững - Đổi mới tư duy',
              outcome: 'Good',
              result: 'Con người là động lực - Xã hội bền vững - Đổi mới tư duy'
            }
          ]
        }
      ]
    },
    {
      id: 'B',
      title: '🔥 B. Không đi qua thời kỳ quá độ',
      description: 'Lựa chọn con đường chuyển đổi nhanh chóng',
      options: [
        {
          id: 'B1',
          title: 'B1. Công nghiệp hóa thần tốc',
          description: 'Tập trung phát triển công nghiệp với tốc độ cao',
          options: [
            {
              id: 'B1.1',
              title: 'B1.1 Bỏ qua phúc lợi',
              description: 'Bất ổn xã hội - Đình công, xung đột',
              outcome: 'Bad',
              result: 'Bất ổn xã hội - Đình công, xung đột'
            },
            {
              id: 'B1.2',
              title: 'B1.2 Tăng trưởng có kiểm soát',
              description: 'Giảm rủi ro - Nhưng thiếu nền tảng chính trị',
              outcome: 'Neutral',
              result: 'Giảm rủi ro - Nhưng thiếu nền tảng chính trị'
            }
          ]
        },
        {
          id: 'B2',
          title: 'B2. Tư nhân hóa mạnh',
          description: 'Mở rộng vai trò của khu vực tư nhân',
          options: [
            {
              id: 'B2.1',
              title: 'B2.1 Tư bản chi phối chính sách',
              description: 'Nhà nước bị thao túng - Mất định hướng xã hội',
              outcome: 'Bad',
              result: 'Nhà nước bị thao túng - Mất định hướng xã hội'
            },
            {
              id: 'B2.2',
              title: 'B2.2 Nhà nước làm "trọng tài"',
              description: 'Cân bằng khó - Thiếu công cụ kiểm soát',
              outcome: 'Neutral',
              result: 'Cân bằng khó - Thiếu công cụ kiểm soát'
            }
          ]
        },
        {
          id: 'B3',
          title: 'B3. Phụ thuộc vốn – công nghệ ngoại',
          description: 'Dựa vào nguồn lực bên ngoài để phát triển',
          options: [
            {
              id: 'B3.1',
              title: 'B3.1 Phụ thuộc hoàn toàn',
              description: 'Lệ thuộc kinh tế – chính trị - Mất chủ quyền',
              outcome: 'Neutral',
              result: 'Lệ thuộc kinh tế – chính trị - Mất chủ quyền'
            },
            {
              id: 'B3.2',
              title: 'B3.2 Cố gắng thoát phụ thuộc',
              description: 'Trả giá lớn - Xã hội rạn nứt',
              outcome: 'Bad',
              result: 'Trả giá lớn - Xã hội rạn nứt'
            }
          ]
        }
      ]
    }
  ]
};

