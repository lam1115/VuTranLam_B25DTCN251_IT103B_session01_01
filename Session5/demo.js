// Cú pháp khai báo mảng
// Quy tắc đặt tên mảng: list + Tên_đối_tượng (listProduct, listUser) 
// hoặc thêm hậu tố (s, es) (users, products, numbers, branches)

const numbers = [1, 2, 3, 4, 5, 6];
console.log("numbers: ",numbers);

// Cách lấy độ dài của mảng
console.log("Độ dài của mảng", numbers.length);

// Cách truy xuất vào phần tử trong mảng
console.log("Phần tử nằm ở vị trí số 2: ", numbers[2]);

// Duyệt mảng 
let total = 0;
for(let i = 0; i < numbers.length; i++){
    console.log("number = ", numbers[i]);
    total += numbers[i];
}

console.log("total =",total);

const str = "Nguyễn Văn Nam An Khánh"
// Chuyển đổi từ mảng thành chuỗi
const strConvertToArray = str.split(" ");
console.log(strConvertToArray);
console.log("Tên trong chuỗi họ và tên: ",strConvertToArray[strConvertToArray.length - 1]);



// Chuyển đổi từ chuỗi thành mảng
const paragraphes = ["Xin", "chào", "các", "bạn"];
const arrayConvertToString = paragraphes.join(" ");
console.log(arrayConvertToString);

const fruits = ["Cam", "Xoài", "Bưởi", "Mận"];

// Các thao tác cơ bản với mảng (CRUD)
// 1. C - Create (Thêm phần tử vào mảng)
// 1.1. Thêm phần tử vào đầu mảng
fruits.push("Đào");
console.log(fruits);

// 1.2. Thêm phần tử vào đầu mảng
fruits.unshift("Cà chua");
console.log(fruits);;

// 1.3. Thêm phần tử vào vị trí bất kì
fruits.splice(1, 0, "Sầu riêng");
console.log(fruits);


// 2. R - Read (Đọc hoặc duyệt mảng)
for(let i = 0; i < fruits.length; i++){
    console.log("number = ", fruits[i]);
}

// 3. U - Update (Cập nhật phần tử trong mảng)
fruits[1] = "Mít thái";
console.log(fruits);

// 4. D - Delete (Xóa phần tử của mảng)
// 4.1. Xóa phần tử ở cuối mảng
const elementDeletedEnd = fruits.pop();
console.log(fruits);
console.log(elementDeletedEnd);

// 4.2. Xóa phần tử ở đầu mảng
const elementDeletedStart = fruits.shift();
console.log(fruits);
console.log(elementDeletedStart);

// 4.3. Xóa phần tử ở vị trí cụ thể
const resultDeletedPositon = fruits.splice(3, 1);
console.log(resultDeletedPositon);
console.log(fruits);

// 5. Sắp xếp
fruits.sort();
console.log(fruits);

// 6. Tìm kiếm
console.log(fruits.indexOf("Mận"));

// Cho 2 mảng firstNumbers và secondNumbers, hãy nối 2 mảng lại với nhau để tạo 1 mảng mới
let firstNumbers = ["a", "b", "c"];
let secondNumbers = ["d", "e", "f"];

let com = firstNumbers.concat(secondNumbers);

console.log(com);


// Cắt các phần tử trong mảng để trả về một mảng mới bắt đầu từ vị trí 0 đến 5

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let limit = 5;
let page = 1;

let start = (page - 1) * limit;
// Nếu page = 1 => start = 5 * (1 - 1) = 0; end = 0 + 5 = 5
// Nếu page = 2 => start = 5 * (2 - 1) = 5; end = 5 + 5 = 10

let end = start + limit;

let result = data.slice(start, end);
console.log(result);








