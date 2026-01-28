// Cách khai báo biến: var(trước năm 2015 đến nay), let, const (từ 2015 đến nay)
// Các kiểu đặt tên biến: camel case (userName), snack case (user manio), pascal case _(username)
// 1. Từ khóa var
var userName = "Nguyễn Văn A";
console.log("Giá trị của username: ", userName);

// Tiêu chí khai báo lại (có)
var userName ="Nguyễn Văn B";
console.log("Giá trị của username sau khi khai báo lại: ", userName);

// Tiêu chí gắn báo lại (có)
var userName ="Nguyễn Văn C";
console.log("Giá trị của username sau khi gắn lại: ", userName);

// Phạm vi của biến (glolal -Ttoàn cục)

// Cơ chế hosting - Có thể sử dụng biến trước khi khai báo

console.log("age", age);  // sử dụng

var age = 20;

// 2. Từ khóa let
let address = "Thanh xuân, Hà Nội";

console.log("Giá trị của biếm address =", address);

// 2.1. Khai báo báo lại (không)

// let address = "ncnc";

// 2.2. Gán lại giá trị (có)

address = "Cầu giấy, Hà nội"
console.log("Giá trị của address sau khi gán lại: ", address);

// 2.3. Phạm vi của biến (block)

// 2.4. Cơ chế hosting (có - tuy nhiên biến được lưu trong TDZ)

// console.log("email: ", email);
// let email = "nva@gmail.com";

// 3. Từ khóa const
const gender = "Nam";

// 3.1. Khai báo lại (không)

// 3.2. Gán lại giá trị (không)

// 3.3. Phạm vi của biến (block)

// 3.4. Cơ chế hosting (có - Tương tự như let)


// Các kiểu dữ liệu cơ bản trong javascript
// number, string, boolean, null, undefined, NaN

let firstNumber = 10;
let secondNumber = 30;

console.log(firstNumber + " + " + secondNumber + " = ", firstNumber + secondNumber);
console.log(firstNumber + " - " + secondNumber + " = ", firstNumber - secondNumber);
console.log(firstNumber + " * " + secondNumber + " = ", firstNumber * secondNumber);
console.log(firstNumber + " / " + secondNumber + " = ", firstNumber / secondNumber);
console.log(firstNumber + " % " + secondNumber + " = ", firstNumber % secondNumber);

// 2. Kiều dữ liệu chuỗi
let positionName = "    Giám đốc";
let departmantName = "Phòng marketing"

console.log("Vị trí: " + positionName + " - " + "Phòng ban" + ": " + departmantName);

// Lấy ra chiều dài của một chuỗi
console.log("Chiều dài của phòng maketing: ", departmantName.length);


// template string: Kí tự ``

console.log(`Vị trí: ${positionName.trim()} - Phòng ban: ${departmantName.toLowerCase()}`);


// 3. Kiểu dữ liệu boolean (True/False)

// 4. Kiểu dữ liệu null (được sử dụng khi 1 biến được khai báo nhưng chưa xác định được giá trị của nó là gì nên gán là null)

// 5. Kiểu dữ liệu undefined (được sử dụng khi 1 biến được khai báo nhưng chưa gán giá trị)

let email;
console.log("Email: ", email);

// 6.Kiểu dũ kiệu NaN (Not a Number)
console.log("Result: ", 10/"abc");


// Nhập dữ liệu (Lấy dữ liệu từ người dùng)
// let phoneNumer = prompt("Vui lòng nhập số điện thoại");

// console.log("phonNumber", typeof phoneNumer);

// Xuất dữ liệu theo dạng hộp thoại 
// alert("Xin chào các bạn");

// Lấy xác nhận từ người dùng
// let isConfirm =  confirm("Bạn có chắc chắn muốn đăng xuất không?");


// console.log("isConfirm", isConfirm);

// Chuyển đổi dữ liệu tường minh
// Chuyển đổi từ sô sang chuỗi
let thirdNumber = 20;
// console.log("Kiểu dữ liệu: ",String(thirdNumber) );
console.log("Kiểu dữ liệu: ",thirdNumber.toString() );

// Chuyển từ chuỗi sang số
let numberString = "1234";
// console.log("Kết quả sau khi chuyển đổi: ", Number(numberString));
// console.log("Kết quả sau khi chuyển đổi: ", parseInt(numberString));
console.log("Kết quả sau khi chuyển đổi: ", + numberString);

// Chuyển đổi giá trị từ 1 giá trị cụ thể thành kiểu boolean
console.log("Kết quả sau khi chuyển đổi: ",Boolean(1)); // True
console.log("Kết quả sau khi chuyển đổi: ",Boolean(0)); // False
console.log("Kết quả sau khi chuyển đổi: ",Boolean("")); // False
console.log("Kết quả sau khi chuyển đổi: ",Boolean(null)); // False
console.log("Kết quả sau khi chuyển đổi: ",Boolean(undefined)); // False
console.log("Kết quả sau khi chuyển đổi: ",Boolean(NaN)); // False
console.log("Kết quả sau khi chuyển đổi: ",Boolean(false)); // False

// Đối tượng Math
console.log("PI: ", Math.PI);
console.log("Số random", Math.random()); //0 ->1
console.log("Làm tròn trên: ", Math.ceil(2.1)); //3
console.log("Làm tròn dưới: ", Math.floor(2.9)); //2
console.log("Làm tròn khi thập phân >= 5: ", Math.round(2.5)); //3





