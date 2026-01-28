// Khai báo các biến cần thiết
let bookName = "Lập trình FE với JavaScript"; // Tên sách
let authorName = "Nguyễn Văn Nam"; // Tên tác giả
let publish = "2020"; // Năm xuất bản
let price = 100000; // Giá của 1 cuốn sách
let quantity = 100; // Số lượng trong kho

// Xây dựng các chức năng theo yêu cầu
// 1. Chuẩn hóa dữ liệu:
// - Tên sách: Loại bỏ khoảng trắng thừa ở 2 đầu (trim) và chuyển tất cả thành chữ in hoa.
console.log("Tên sách sau khi chuyển hóa: ", bookName.trim().toUpperCase());


// - Tên tác giả: Chuyển thành chữ in hoa.
console.log("Tên tác giả sau khi chuyển hóa: ", authorName.toUpperCase());

// 2.Tạo mã định danh (Book ID):
// - Mã sách được tạo tự động theo công thức: 3 ký tự đầu của Tên tác giả + 
//   Năm xuất bản + một số ngẫu nhiên từ 1 đến 1000.
// - Ví dụ: Tác giả "NGUYEN VAN A", năm "2020", số ngẫu nhiên "123" -> Mã sách: "NGU2020-123"
console.log("3 Kí tự đầu của tên tác gỉả ", authorName.slice(0, 3));
console.log("Năm xuất bản: ", publish);
console.log("Số ngẫu nhiên từ 1 - 1000: ", Math.ceil(Math.random() * 1000));

let = bookID = `${authorName.slice(0, 3)}${publish}-${Math.ceil(Math.random() * 1000)}`;
console.log("Mã sách ngẫu nhiên là: ",bookID);


// 3. Tính toán số liệu:
// - Tuổi của sách: Tính xem sách đã xuất bản được bao nhiêu năm (Lấy năm hiện tại là 2026 trừ đi Năm xuất bản).
// Lấy ra năm hiện tại
let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
let date = new Date().getDate();
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
let millisecond = new Date().getMilliseconds();

console.log("Year: ", year);

// Tuổi của sách
let bookAge = year - publish;
console.log("Tuổi của sách là: ", bookAge);



// - Tổng giá trị nhập kho: Giá tiền x Số lượng.

let totalPrice = price * quantity;
console.log("Tống giá trị nhập kho: ", totalPrice);


//In ra phiếu nhập kho

console.log(
    `--- PHIẾU NHẬP KHO ---

Mã sách: ${bookID}

Tên sách: ${bookName.trim().toUpperCase()}

Tác giả: ${authorName.trim().toUpperCase()}

Năm xuất bản: ${publish}

Tuổi sách: ${bookAge} năm

Tổng giá trị: ${totalPrice} VNĐ

Ngăn kệ gợi ý: Kệ số ${Math.ceil(Math.random() * 10)} (Số ngẫu nhiên từ 1-10 tạo ra bằng Math Object)`
);
