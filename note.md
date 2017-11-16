Note các thứ cần thiết.

Các màn hình cần có.

Home Page
Each Book

User Page
About

Todo: 
+ Task 1: Hoàn thành 'book/:id'
    bao gồm: 
        trên:
            trái: 1 ảnh lớn
            phải: tên Sách, tên tác giả
                // làm giống https://www.microsoft.com/en-us/store/p/origin/FGQPF3H0L8P0
                để trống nguyên phần bên phải...

                + giá bìa (đường dẫn đến chỗ mua tại tiki)
                + thêm: số người đang mượn, cho mượn, có nhu cầu mượn -> đẩy đến bảng cho mượn cụ thể ở dưới
        giữa
            tóm tắt nội dung, review, nhận xét
+ Task 2: Mô tả các thao tác để mượn Sách:
    + ấn mượn: trong giao diện, người mượn Sách và người cho mượn Sách sẽ có một khung chat (được tạo bằng https://tlk.io/ với id là id của "mượn") 2 bên sẽ thực hiện công đoạn trao đổi thông tin với nhau
        + người cho mượn Sách chọn "đồng ý cho mượn"
            -> trạng thái mượn chuyển thành "đã cho mượn - chờ trao đổi"
            -> người mượn nhận Sách, ấn "đã mượn" -> "đang cho mượn"
        + người cho mượn Sách chọn "không đồng ý" -> trạng thái không thay đổi

+ Task  : Mô tả các thông tin đối với mỗi lần cho mượn
    + Tìm Sách
    + Chọn cho mượn quyển Sách này
        + các thông tin sẽ gồm có:
            Thông tin cơ bản của người mượn Sách
            Thông tin cơ bản của Sách
            Thời gian cho mượn tối đa
            // Yêu cầu: abc, xyz, bla bla (có thể không cần)

+ Task  : Thêm trang cá nhân,
    + hiển thị:
        Sách cho mượn
        Sách đang mượn
        Sách muốn mượn (công khai)
        Sách muốn mượn (ẩn)

+ Task  : Thêm khung tìm kiếm phía trên, ngay cạnh logo, giới hạn chỉ cho tìm kiếm theo tên
