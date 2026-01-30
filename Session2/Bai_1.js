let tenSach = prompt("Nhập tên sách:");
let tacGia = prompt("Nhập tên tác giả:");
let publish = parseInt(prompt("Nhập năm xuất bản:"));

let year = new Date().getFullYear();

if (publish === year) {
    console.log("Đây là sách mới!");
} else if (year - publish <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}
