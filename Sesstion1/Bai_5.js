let bookName = prompt("Nhập tên sách: ");
let publish = prompt("Nhập năm xuất bản: ");

publish = Number(publish);
let year = new Date().getFullYear();

let age = year - publish;

console.log("Sách: ", bookName);
console.log("Năm xuất bản: ",publish);
console.log("Tuổi của sách: ", age, "năm");


