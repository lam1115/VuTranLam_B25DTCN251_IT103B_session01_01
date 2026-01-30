let userName = prompt("Nhập tên người dùng:");
let role = prompt("Nhập vai trò (admin / student / guest):");
let balance = parseInt(prompt("Nhập số dư tài khoản:")) || 0;
let cardStatus = prompt("Trạng thái thẻ thư viện (true / false):");
let expiredDay = parseInt(prompt("Nhập số ngày quá hạn trả sách:")) || 0;

role = (role || "").toLowerCase();
let card = (cardStatus === "true");
let noti = "";
switch (role) {
    case "admin":
        noti = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        noti = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        noti = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        noti = "Lỗi: Vai trò không hợp lệ!";
}

let result = "YÊU CẦU BỊ TỪ CHỐI";
let reason = "";

if (!userName) {
    reason = "Tên người dùng không được để trống";
} else if (!(role === "admin" || role === "student")) {
    reason = "Vai trò không được phép mượn sách";
} else if (balance <= 0) {
    reason = "Tài khoản không đủ số dư";
} else if (!card) {
    reason = "Thẻ thư viện đang bị khóa";
} else {
    result = "ĐƯỢC PHÉP MƯỢN SÁCH";
}

let find = 0;
let status = "";

if (expiredDay <= 0) {
    status = "Cảm ơn bạn đã trả đúng hạn";
} else if (expiredDay <= 5) {
    find = expiredDay * 5000;
    status = `Quá hạn ${expiredDay} ngày`;
} else if (expiredDay <= 10) {
    find = expiredDay * 10000;
    status = `Quá hạn ${expiredDay} ngày`;
} else {
    find = 200000;
    status = `Quá hạn ${expiredDay} ngày - TÀI KHOẢN BỊ KHÓA`;
}

console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---

Người dùng: ${userName ? userName.toUpperCase() : "KHÔNG XÁC ĐỊNH"}

Quyền hạn: ${noti}

Kết quả mượn: ${result}${reason ? " (" + reason + ")" : ""}

Tình trạng trả sách: ${status}

Tiền phạt: ${find.toLocaleString()} VNĐ
`);
