// 1. Khai báo 3 mảng rỗng
let booksId = [];
let booksName = [];
let inventoryQuantity = [];

// 2. Hỏi số lượng sách cần kiểm tra
let n = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

// 3. Nhập thông tin từng loại sách
for (let i = 0; i < n; i++) {

    // Nhập mã sách (không rỗng)
    let id;
    do {
        id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    } while (id === "");

    // Nhập tên sách (không rỗng)
    let name;
    do {
        name = prompt(`Nhập tên sách thứ ${i + 1}:`);
    } while (name === "");

    // Nhập số lượng tồn kho (>= 0)
    let quantity;
    do {
        quantity = parseInt(prompt(`Nhập số lượng tồn kho của sách thứ ${i + 1}:`));
    } while (isNaN(quantity) || quantity < 0);

    // Thêm vào các mảng
    booksId.push(id);
    booksName.push(name);
    inventoryQuantity.push(quantity);
}

// 4. In tổng số loại sách đang kiểm tra
console.log("Tổng số loại sách đang kiểm tra:", booksId.length);

// 5. Đếm số sách có tồn kho ≤ 5
let lowStockCount = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        lowStockCount++;
    }
}
console.log("Số lượng sách có tồn kho ≤ 5 bản:", lowStockCount);

// 6. In mã sách đã hết hàng (tồn kho = 0)
console.log("Các mã sách đã hết hàng:");
let hasOutOfStock = false;

for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        console.log("- " + booksId[i]);
        hasOutOfStock = true;
    }
}

if (!hasOutOfStock) {
    console.log("Không có sách nào hết hàng");
}

// 7. In danh sách chi tiết
console.log("Danh sách chi tiết các sách:");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        `${i + 1}. Mã sách: ${booksId[i]} | Tên sách: ${booksName[i]} | Tồn kho: ${inventoryQuantity[i]}`
    );
}
