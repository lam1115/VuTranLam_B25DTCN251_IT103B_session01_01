// ================= KHAI BÁO 4 MẢNG SONG SONG =================
let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

// ================= NHẬP SỐ LƯỢNG BẠN ĐỌC =================
let n;
do {
    n = +prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");
} while (!Number.isInteger(n) || n <= 0);

// ================= NHẬP THÔNG TIN TỪNG BẠN ĐỌC =================
for (let i = 0; i < n; i++) {
    let cardId, name, books, days;

    // Nhập mã thẻ (duy nhất)
    do {
        cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`).trim();
        if (cardId === "") {
            alert("Mã thẻ không được để trống!");
        } else {
            let isDuplicate = false;
            for (let j = 0; j < readerCardIds.length; j++) {
                if (readerCardIds[j] === cardId) {
                    isDuplicate = true;
                    alert("Mã thẻ đã tồn tại, vui lòng nhập lại!");
                    cardId = "";
                    break;
                }
            }
        }
    } while (cardId === "");

    // Nhập tên bạn đọc
    do {
        name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`).trim();
        if (name === "") {
            alert("Tên bạn đọc không được để trống!");
        }
    } while (name === "");

    // Nhập mã sách đang mượn
    do {
        books = prompt(
            `Nhập các mã sách đang mượn của bạn đọc thứ ${i + 1} (cách nhau bởi dấu phẩy):`
        ).trim();
        if (books === "") {
            alert("Danh sách mã sách không được để trống!");
        }
    } while (books === "");

    // Nhập số ngày quá hạn
    do {
        days = +prompt(`Nhập số ngày quá hạn của bạn đọc thứ ${i + 1}:`);
        if (!Number.isInteger(days) || days < 0) {
            alert("Số ngày quá hạn phải là số nguyên ≥ 0!");
        }
    } while (!Number.isInteger(days) || days < 0);

    // Lưu vào mảng
    readerCardIds.push(cardId);
    readerNames.push(name);
    borrowedBookCodes.push(books);
    overdueDays.push(days);
}

// ================= XỬ LÝ YÊU CẦU =================

// a. Đếm số bạn đọc quá hạn ≥ 10 ngày
let countOver10 = 0;
for (let i = 0; i < n; i++) {
    if (overdueDays[i] >= 10) {
        countOver10++;
    }
}
console.log(`Tổng số bạn đọc có quá hạn ≥ 10 ngày: ${countOver10}`);

// b. Tìm bạn đọc mượn cả sách bắt đầu bằng "JS" và "PYT"
console.log("Danh sách mã thẻ bạn đọc mượn cả sách bắt đầu bằng 'JS' và 'PYT':");

for (let i = 0; i < n; i++) {
    let booksArray = borrowedBookCodes[i].split(",");
    let hasJS = false;
    let hasPYT = false;

    for (let j = 0; j < booksArray.length; j++) {
        let code = booksArray[j].trim().toUpperCase();
        if (code.startsWith("JS")) hasJS = true;
        if (code.startsWith("PYT")) hasPYT = true;
    }

    if (hasJS && hasPYT) {
        console.log(readerCardIds[i]);
    }
}

// c. Tìm bạn đọc có số ngày quá hạn cao nhất
let maxIndex = 0;
for (let i = 1; i < n; i++) {
    if (overdueDays[i] > overdueDays[maxIndex]) {
        maxIndex = i;
    }
}

console.log("Bạn đọc có số ngày quá hạn cao nhất:");
console.log(
    `Tên bạn đọc: ${readerNames[maxIndex]}, Số ngày quá hạn: ${overdueDays[maxIndex]}`
);

// d. In cảnh báo theo tình hình
let countOver7 = 0;
for (let i = 0; i < n; i++) {
    if (overdueDays[i] >= 7) {
        countOver7++;
    }
}

if (countOver7 === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (countOver7 >= 1 && countOver7 <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
