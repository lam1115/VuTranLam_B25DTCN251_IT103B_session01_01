// Khai báo 4 mảng song song
let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

// Nhập số lượng sách cần nhập
let n;
do {
    n = +prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
} while (!Number.isInteger(n) || n <= 0);

// Nhập thông tin từng sách
for (let i = 0; i < n; i++) {
    let id, name, category, quantity;

    // Nhập mã sách (không trống, không trùng)
    do {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`).trim();
        if (id === "") {
            alert("Mã sách không được để trống!");
        } else if (booksId.includes(id)) {
            alert("Mã sách đã tồn tại, vui lòng nhập mã khác!");
            id = "";
        }
    } while (id === "");

    // Nhập tên sách
    do {
        name = prompt(`Nhập tên sách thứ ${i + 1}:`).trim();
        if (name === "") {
            alert("Tên sách không được để trống!");
        }
    } while (name === "");

    // Nhập thể loại
    do {
        category = prompt(
            `Nhập các thể loại của sách thứ ${i + 1} (các thể loại cách nhau bởi dấu phẩy):`
        ).trim();
        if (category === "") {
            alert("Thể loại không được để trống!");
        }
    } while (category === "");

    // Nhập số lượng tồn kho
    do {
        quantity = +prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`);
        if (!Number.isInteger(quantity) || quantity < 0) {
            alert("Số lượng tồn kho phải là số nguyên ≥ 0!");
        }
    } while (!Number.isInteger(quantity) || quantity < 0);

    // Lưu vào mảng
    booksId.push(id);
    booksName.push(name);
    booksCategory.push(category);
    inventoryQuantity.push(quantity);
}

// ================= XỬ LÝ & IN KẾT QUẢ =================

// a. Đếm số sách thuộc thể loại "Lập trình" (không phân biệt hoa thường)
let countLapTrinh = 0;
for (let i = 0; i < n; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        countLapTrinh++;
    }
}

console.log(`Tổng số sách thuộc thể loại 'Lập trình': ${countLapTrinh}`);

// b. Tìm sách thuộc cả "JavaScript" và "Web"
console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");

for (let i = 0; i < n; i++) {
    let categoryLower = booksCategory[i].toLowerCase();
    if (
        categoryLower.includes("javascript") &&
        categoryLower.includes("web")
    ) {
        console.log(booksId[i]);
    }
}

// c. Tìm sách có tồn kho thấp nhất
let minIndex = 0;
for (let i = 1; i < n; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
        minIndex = i;
    }
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(
    `Mã sách: ${booksId[minIndex]}, ` +
    `Tên sách: ${booksName[minIndex]}, ` +
    `Tồn kho: ${inventoryQuantity[minIndex]}`
);
