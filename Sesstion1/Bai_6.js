let bookName = prompt("Nhập tên sách:");
let bookorder = prompt("Nhập số thứ tự sách: ");

bookName = bookName.trim().toUpperCase();

console.log("Tên sách gốc: ", bookName);
console.log(`Mã sách sau chuẩn hóa: LIB - ${bookName} - ${bookorder}`);
