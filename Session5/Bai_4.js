// 1. Khai báo 3 mảng song song
let booksId = [];
let booksName = [];
let bookStatus = [];

// Hàm chuyển số sang trạng thái
function getStatus(choice) {
    switch (choice) {
        case 1: return "Hỏng nhẹ";
        case 2: return "Hỏng nặng";
        case 3: return "Cần sửa gấp";
        case 4: return "Đã sửa xong";
        case 5: return "Loại bỏ";
        default: return "";
    }
}

// Hàm in danh sách hiện tại
function printList(title) {
    console.log("==== " + title + " ====");
    if (booksId.length === 0) {
        console.log("Danh sách trống!");
        return;
    }
    for (let i = 0; i < booksId.length; i++) {
        console.log(
            (i + 1) + ". " +
            booksId[i] + " - " +
            booksName[i] + " - " +
            bookStatus[i]
        );
    }
}

// 2. Nhập số lượng sách cần kiểm tra
let n;
do {
    n = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");
} while (n <= 0 || isNaN(n));

// 3. Nhập thông tin ban đầu
for (let i = 0; i < n; i++) {
    let id = "";
    let name = "";
    let statusChoice;

    do {
        id = prompt("Nhập mã sách:");
    } while (id.trim() === "");

    do {
        name = prompt("Nhập tên sách:");
    } while (name.trim() === "");

    do {
        statusChoice = +prompt(
            "Chọn tình trạng:\n" +
            "1. Hỏng nhẹ\n" +
            "2. Hỏng nặng\n" +
            "3. Cần sửa gấp"
        );
    } while (![1, 2, 3].includes(statusChoice));

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(getStatus(statusChoice));
}

// 4. In danh sách ban đầu
printList("DANH SÁCH BAN ĐẦU");

// 5. Chế độ chỉnh sửa
let choice;
do {
    choice = +prompt(
        "Chọn thao tác:\n" +
        "1. Sửa tình trạng sách\n" +
        "2. Loại bỏ (xóa) sách\n" +
        "0. Kết thúc"
    );

    // ---- SỬA TÌNH TRẠNG ----
    if (choice === 1) {
        let findId = prompt("Nhập mã sách cần sửa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === findId) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            alert("Không tìm thấy mã sách!");
        } else {
            let newStatus;
            do {
                newStatus = +prompt(
                    "Chọn tình trạng mới:\n" +
                    "1. Hỏng nhẹ\n" +
                    "2. Hỏng nặng\n" +
                    "3. Cần sửa gấp\n" +
                    "4. Đã sửa xong\n" +
                    "5. Loại bỏ"
                );
            } while (![1, 2, 3, 4, 5].includes(newStatus));

            bookStatus[index] = getStatus(newStatus);
            printList("DANH SÁCH SAU KHI SỬA");
        }
    }

    // ---- XÓA SÁCH ----
    else if (choice === 2) {
        let deleteId = prompt("Nhập mã sách cần xóa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === deleteId) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            alert("Không tìm thấy mã sách!");
        } else {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
            printList("DANH SÁCH SAU KHI XÓA");
        }
    }

} while (choice !== 0);

// 6. Báo cáo cuối
let repairedCount = 0;
let removedCount = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") repairedCount++;
    if (bookStatus[i] === "Loại bỏ") removedCount++;
}

console.log("===== BÁO CÁO CUỐI =====");
console.log("Tổng số sách còn lại:", booksId.length);
console.log("Số sách đã sửa xong:", repairedCount);
console.log("Số sách loại bỏ:", removedCount);
printList("DANH SÁCH CÒN LẠI");
