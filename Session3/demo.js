// Loại vòng lập mà biết trước số lần lặp (for)
// for (Khởi tạo; điều kiện dừng; bước nhảy) {
//     Block code để viết logic nghiệp vụ
// }

// Ví dụ: In ra các số từ 1 đến 10
for(let index = 1; index <= 10; index ++){
    console.log("Số thứ tự: ",index);
}

// B1: index = 1
// B2: Kiểm tra điều kiện
// B2.1: Nếu điều kiện đúng => Code sẽ chạy vào block và in ra index = 1
// B2.1.1: Sau khi thực hiện xong logic trong block code -> tăng giá trị lên 1(vào bước nhảy)
// B2.1.2: Đi kiểm tra điều kiện -> Quay về bước 2
// B2.2: Điều kiện sai => Kết thúc vòng lặp

// Tính tổng các số từ 1 đến 20

let sum = 0;
for (let i = 1; i <= 20; i ++){
    // Cứ mỗi lần duyệt, tiến hành cộng dồn các giá trị
    sum += i;
}
console.log("Tổng từ 1 đến 20: ",sum);

// In ra bảng cửu chương

for (let i = 1; i <= 10; i++){
    console.log("Bảng cửu chương số: ",i);
    for (let j = 1; j <= 10; j++)
        console.log(`${i} x ${j} = ${i * j}`);       
}

// Vòng lặp không biết trước số lần lặp (while, do - while)
// In ra các số từ 1 đến 10
// let index = 1;
// while (index <= 10) {
//     console.log(index);
//     index ++;
// }

// // Xây dựng ứng dụng đoán số
// let number = "";
// while(number !== "123"){
//     number = prompt("Vui lòng nhập số:");
// }

// console.log("Số bạn đoán đúng là: ",number);

// Xây dựng ứng dụng đoán số nguyên dương
// let number = "";
// while(number <= 0){
//     number = +prompt("Vui lòng nhập số: ");
// }
// console.log("Số bạn đoán đúng là: ",number);

// Vòng lặp do - while
let number = 1;
do {
    console.log("number: ",number);
    number ++;
} while (number <= 10);

// Giới hạn nhập mật khấu đăng nhập vào app ngân hàng
let count = 0;
let password = ""
do {
    password = prompt("Vui lòng nhập mật khẩu: ");
    if(password !== "123"){
        count ++;
    }
} while (count < 3 && password !== "123");

if (count === 3) {
    alert("Tài khoản đã bị khóa")
}else{
    alert("Đăng nhập thành công");

}
