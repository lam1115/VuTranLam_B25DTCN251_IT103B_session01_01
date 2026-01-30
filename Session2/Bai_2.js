let number = parseInt(prompt("Nhập số lượng sách trong thư viện:"));

if (number < 10) {
    console.log("Thư viện có ít sách");
} else if (number >= 10 && number <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else {
    console.log("Thư viện có nhiều sách");
}
