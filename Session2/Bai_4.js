let bookName = prompt("Nhập tên sách:");
let name = prompt("Nhập tên người mượn:");
let like = parseInt(prompt("Nhập mức độ yêu thích (1 - 5):"));

if (like === 5 || like === 4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (like === 3) {
    console.log("Sách này khá ổn, có thể mượn");
} else if (like === 2 || like === 1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else {
    console.log("Mức độ yêu thích không hợp lệ");
}
