// Xây dựng menu cho phép người dùng nhập lại nhiều lần 
let choice;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

do {
    choice = +prompt(`
        --- THƯ VIỆN KHOA HỌC ---
            1. Xem danh sách
            2. Nhập sách mới
            3. Mượn sách (Xóa)
            4. Sửa tên sách
            5. Sắp xếp kệ
            0. Thoát
        `);
    switch (choice) {
        case 1:
            console.log("==== Danh sách tên cuốn sách ====");
            for (let i = 0; i < books.length; i++) {
                console.log(`${i + 1}. ${books[i]}`);
            }
            break;
        case 2:
            // Lấy ra tên sách từ người dùng cần thêm
            const newBookName = prompt("Nhập tên cuốn sách mới");

            // Thêm phần sách mới vào cuối mảng (push())
            books.push(newBookName);

            // In ra thông báo thêm mới thành công 
            alert("Thêm sách thành công");
            break;
        case 3:
            // Nhập tên sách cần mượn
            const bookToBorrow = prompt("Nhập tên cuốn sách cần mượn");

            // Tìm kiếm sách (indexOf())
            const index = books.indexOf(bookToBorrow);

            // Kiểm tra điều kiện
            if(index !== -1){
                // In ra thông báo thành công
                alert(`Đã cho mượn sách ${books[index]}`);

                // Nếu tìm thấy sẽ xóa sách khỏi mảng
                books.splice(index, 1);
            }else{
                // Nếu không tìm thấy sẽ thông báo không tìm thấy
                alert("Không có sách trong kho")
            }
            break;
        case 4:
            // Nhập tên sách cần cập nhật
            const bookToUpdate = prompt("Nhập tên sách cần chỉnh sửa");

            // Tìm kiếm sách cần cập nhật trong mảng
            const bookIndexToSearch = books.indexOf(bookToUpdate);

            // Kiểm tra điều kiện
            if(bookIndexToSearch !== -1){
                // Nếu có, thì nhập tên sách mới và tiến hành gán lại giá trị dựa vào index
                const newBookUpdate = prompt("Nhập tên sách mới");

                // Tiến hành gán lại giá trị dựa vào index
                books[bookIndexToSearch] = newBookUpdate;

                // Hiện thị thông báo cập nhật thành công
                alert("Cập nhật sách thành công");
            }else{
                // Nếu không, in ra không tìm thấy tên sách
                alert("Không tìm thấy sách")
            }
            break;
        case 5:
            // Sử dụng hàm sort()
            books.sort();

            console.log("Mảng sau khi được sắp xếp", books);
            
            break;
        case 0:
            alert("Thoát chương trình. Hẹn gặp lại");
            break;
    
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập lại!");
            break;
    }
} while (choice !== 0);