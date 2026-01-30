let bookName = prompt("Nhập tên sách:");
let type = prompt("Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện):");
let status = prompt("Nhập tình trạng sách (có sẵn / đã mượn):");

type = type.trim();
status = status.trim().toLowerCase();

// Kiểm tra thể loại và in thông báo
if (type === "Khoa học" || type === "Lịch sử") {
    if (status === "có sẵn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (type === "Văn học" || type === "Truyện") {
    console.log("Sách này có thể đọc giải trí");
} else {
    console.log("Thể loại sách không được hỗ trợ");
}
