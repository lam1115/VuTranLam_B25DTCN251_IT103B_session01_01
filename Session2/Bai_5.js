let bookName = prompt("Nhập tên sách:");
let status = prompt("Nhập trạng thái sách (có sẵn / đã mượn):");
let publish = parseInt(prompt("Nhập năm xuất bản:"));

let year = new Date().getFullYear();

status = status.trim().toLowerCase();

if (status === "có sẵn" && year - publish <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
} else if (status === "đã mượn" && yeari - publish <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (status === "đã mượn" && year - publish > 10) {
    console.log("Sách này đã mượn và khá cũ");
} else if (status === "có sẵn" && year - publish > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
} else {
    console.log("Thông tin sách không hợp lệ");
}
