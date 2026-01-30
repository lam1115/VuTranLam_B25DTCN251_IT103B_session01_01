let bookName = prompt("Nhập tên sách:");
let name = prompt("Nhập tên người mượn:");
let status = prompt("Nhập tình trạng sách (có sẵn / đã mượn / không có sẵn):");
let day = parseInt(prompt("Nhập số ngày mượn:"));
let card = prompt("Bạn có thẻ thư viện không? (có / không):");

status = status.trim().toLowerCase();
card = card.trim().toLowerCase();

if (status === "có sẵn" && card === "có") {
    console.log("Chúc mừng, bạn có thể mượn sách này");
} 
else if (status === "đã mượn" && day < 30) {
    if (card === "có") {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else if (card === "không") {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    } else {
        console.log("Thông tin không hợp lệ, vui lòng nhập lại");
    }
}
else if (status === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
}
else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}
