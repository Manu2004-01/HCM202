export const decisionTree = {
  id: 'root',
  title: 'TẦNG 0 – QUYẾT ĐỊNH LỚN (ROOT)',
  description: 'Bạn đang ở điểm khởi đầu của một hành trình quan trọng trong việc xây dựng chủ nghĩa xã hội ở Việt Nam. Mỗi lựa chọn đều tạo ra hiệu ứng cánh bướm với những hệ quả khác nhau.',
  theory: {
    title: 'Tư tưởng Hồ Chí Minh về CNXH và thời kỳ quá độ',
    sections: [
      {
        title: 'Bản chất CNXH',
        content: 'CNXH là xã hội dân chủ, nhân dân lao động làm chủ, nhà nước của dân do dân vì dân, nền kinh tế phát triển cao, công bằng xã hội.'
      },
      {
        title: 'Tính tất yếu khách quan',
        content: 'Tiến lên CNXH là con đường phát triển tất yếu của lịch sử, phù hợp với học thuyết Mác-Lênin và hoàn cảnh Việt Nam.'
      },
      {
        title: 'Động lực xây dựng',
        content: 'Nội lực: Con người XHCN, kinh tế chính trị văn hóa, đại đoàn kết. Ngoại lực: Sự ủng hộ của phong trào cộng sản quốc tế.'
      }
    ]
  },
  options: [
    {
      id: 'A',
      title: '🌱 A. Đi qua thời kỳ quá độ',
      description: 'Lựa chọn con đường chuyển đổi từng bước, kiên trì theo tư tưởng Hồ Chí Minh',
      theory: 'Đây là con đường tất yếu cho Việt Nam - một nước nông nghiệp lạc hậu tiến thẳng lên CNXH, đòi hỏi thay đổi triệt để nhưng kiên trì.',
      options: [
        {
          id: 'A1',
          title: 'A1. Xây dựng chế độ dân chủ XHCN',
          description: 'Nhân dân lao động làm chủ, nhà nước của dân do dân vì dân',
          options: [
            {
              id: 'A1.1',
              title: 'A1.1 Dân chủ hình thức, tập trung hóa quá mức',
              description: 'Quan liêu, xa rời nhân dân, mất niềm tin',
              outcome: 'Bad',
              result: 'Quan liêu - Xa rời nhân dân - Mất niềm tin quần chúng'
            },
            {
              id: 'A1.2',
              title: 'A1.2 Phát huy dân chủ thực chất',
              description: 'Nhân dân thực sự làm chủ, Đảng lãnh đạo, Nhà nước quản lý hiệu quả',
              outcome: 'Good',
              result: 'Dân chủ thực chất - Đảng lãnh đạo đúng đắn - Phát triển bền vững'
            }
          ]
        },
        {
          id: 'A2',
          title: 'A2. Xây dựng nền kinh tế phát triển cao',
          description: 'Kinh tế thị trường định hướng XHCN, công hữu chủ yếu về tư liệu sản xuất',
          options: [
            {
              id: 'A2.1',
              title: 'A2.1 Tư hữu hóa mạnh, bỏ qua công hữu',
              description: 'Tư bản chi phối, bất bình đẳng gia tăng, mất định hướng xã hội chủ nghĩa',
              outcome: 'Bad',
              result: 'Bất bình đẳng - Tư bản thống trị - Mất bản sắc xã hội chủ nghĩa'
            },
            {
              id: 'A2.2',
              title: 'A2.2 Phát triển kinh tế nhiều thành phần',
              description: 'Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân bổ sung, hướng tới công hữu',
              outcome: 'Good',
              result: 'Phát triển kinh tế - Giảm nghèo bền vững - Công bằng xã hội'
            }
          ]
        },
        {
          id: 'A3',
          title: 'A3. Xây dựng nền văn hóa mới',
          description: 'Văn hóa dân tộc, khoa học, đại chúng, hình thành con người XHCN',
          options: [
            {
              id: 'A3.1',
              title: 'A3.1 Máy móc tiếp thu kinh nghiệm nước ngoài',
              description: 'Mất bản sắc dân tộc, văn hóa bị pha tạp, giá trị truyền thống suy yếu',
              outcome: 'Bad',
              result: 'Mất bản sắc - Văn hóa suy đồi - Xã hội hỗn loạn'
            },
            {
              id: 'A3.2',
              title: 'A3.2 Vận dụng sáng tạo, giữ vững bản sắc',
              description: 'Học hỏi tinh hoa nhân loại, phát triển văn hóa dân tộc tiên tiến',
              outcome: 'Good',
              result: 'Văn hóa tiên tiến - Giữ vững bản sắc - Con người phát triển toàn diện'
            }
          ]
        },
        {
          id: 'A4',
          title: 'A4. Xây dựng con người XHCN',
          description: 'Động lực quan trọng nhất - con người là vốn quý nhất',
          options: [
            {
              id: 'A4.1',
              title: 'A4.1 Giáo dục hình thức, nặng tuyên truyền',
              description: 'Học vẹt lý thuyết, xa rời thực tiễn, thiếu kỹ năng sống',
              outcome: 'Bad',
              result: 'Thiếu năng lực - Xa rời thực tiễn - Không đáp ứng yêu cầu phát triển'
            },
            {
              id: 'A4.2',
              title: 'A4.2 Giáo dục gắn với thực tiễn',
              description: 'Học đi đôi với hành, lý luận gắn với thực tiễn, phát triển toàn diện',
              outcome: 'Good',
              result: 'Nguồn nhân lực chất lượng - Đổi mới sáng tạo - Phát triển bền vững'
            }
          ]
        }
      ]
    },
    {
      id: 'B',
      title: '🔥 B. Không đi qua thời kỳ quá độ',
      description: 'Lựa chọn con đường chuyển đổi nhanh chóng, bỏ qua giai đoạn lịch sử',
      theory: 'Bỏ qua thời kỳ quá độ đồng nghĩa với việc bỏ qua những thành tựu văn minh mà nhân loại đã tạo ra, dẫn đến nhiều hệ lụy.',
      options: [
        {
          id: 'B1',
          title: 'B1. Công nghiệp hóa thần tốc',
          description: 'Bỏ qua phúc lợi xã hội, tập trung tăng trưởng kinh tế',
          options: [
            {
              id: 'B1.1',
              title: 'B1.1 Bỏ qua quyền con người',
              description: 'Lao động cưỡng bức, bất ổn xã hội, xung đột giai cấp',
              outcome: 'Bad',
              result: 'Bất ổn xã hội - Xung đột giai cấp - Mất ổn định chính trị'
            },
            {
              id: 'B1.2',
              title: 'B1.2 Phát triển có trách nhiệm',
              description: 'Cân bằng tăng trưởng với phúc lợi, nhưng thiếu nền tảng chính trị vững chắc',
              outcome: 'Neutral',
              result: 'Phát triển nhanh - Nhưng thiếu định hướng xã hội chủ nghĩa'
            }
          ]
        },
        {
          id: 'B2',
          title: 'B2. Tư bản hóa hoàn toàn',
          description: 'Chuyển sang kinh tế thị trường tự do, tư hữu tư liệu sản xuất',
          options: [
            {
              id: 'B2.1',
              title: 'B2.1 Tư bản chi phối hoàn toàn',
              description: 'Nhà nước suy yếu, giai cấp tư sản thống trị, mất định hướng xã hội chủ nghĩa',
              outcome: 'Bad',
              result: 'Tư bản thống trị - Bất bình đẳng - Mất bản chất xã hội chủ nghĩa'
            },
            {
              id: 'B2.2',
              title: 'B2.2 Kinh tế thị trường hỗn hợp',
              description: 'Nhà nước cố gắng cân bằng, nhưng thiếu công cụ hiệu quả',
              outcome: 'Neutral',
              result: 'Cân bằng mong manh - Thiếu định hướng rõ ràng'
            }
          ]
        },
        {
          id: 'B3',
          title: 'B3. Phụ thuộc hoàn toàn ngoại lực',
          description: 'Dựa vào vốn và công nghệ nước ngoài để phát triển',
          options: [
            {
              id: 'B3.1',
              title: 'B3.1 Lệ thuộc kinh tế - chính trị',
              description: 'Mất chủ quyền dân tộc, bị thao túng bởi các thế lực bên ngoài',
              outcome: 'Bad',
              result: 'Mất chủ quyền - Lệ thuộc - Bị thao túng'
            },
            {
              id: 'B3.2',
              title: 'B3.2 Cố gắng độc lập',
              description: 'Trả giá lớn về kinh tế, xã hội rạn nứt, phát triển chậm lại',
              outcome: 'Bad',
              result: 'Trả giá quá lớn - Xã hội bất ổn - Phát triển chậm trễ'
            }
          ]
        },
        {
          id: 'B4',
          title: 'B4. Bỏ qua văn hóa - đạo đức',
          description: 'Tập trung kinh tế, coi nhẹ việc xây dựng con người',
          options: [
            {
              id: 'B4.1',
              title: 'B4.1 Chủ nghĩa vật chất cực đoan',
              description: 'Văn hóa suy đồi, đạo đức tha hóa, xã hội vô cảm',
              outcome: 'Bad',
              result: 'Văn hóa suy đồi - Đạo đức tha hóa - Xã hội vô cảm'
            },
            {
              id: 'B4.2',
              title: 'B4.2 Cố gắng duy trì giá trị',
              description: 'Khó khăn trong việc bảo tồn văn hóa truyền thống giữa dòng chảy hiện đại',
              outcome: 'Neutral',
              result: 'Bảo tồn khó khăn - Thiếu định hướng văn hóa rõ ràng'
            }
          ]
        }
      ]
    }
  ]
};

