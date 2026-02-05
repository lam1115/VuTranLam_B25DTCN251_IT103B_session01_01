const USERNAME = "admin";
const PASSWORD = "12345";
let attempts = 0;
let loggedIn = false;

while (attempts < 3) {
    let user = prompt("Nhập tài khoản:");
    let pass = prompt("Nhập mật khẩu:");

    if (user === USERNAME && pass === PASSWORD) {
        console.log("Đăng nhập thành công!");
        loggedIn = true;
        break;
    } else {
        attempts++;
        alert(`Sai thông tin! Bạn còn ${3 - attempts} lần thử.`);
    }
}

if (!loggedIn) {
    console.log("Tài khoản đã bị khóa");
} else {
    let libraries = ["Toán", "Văn", "Anh"];
    let choice;
    do {
        choice = prompt(`
========= MENU =========
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
========================
Nhập lựa chọn của bạn:
        `);
        switch (choice) {
            case "1":
                let inputBooks = prompt("Nhập tên các sách (cách nhau bằng dấu phẩy):");
                if (inputBooks) {
                    let newBooks = inputBooks.split(",").map(book => book.trim()).filter(book => book !== "");
                    libraries.push(...newBooks);
                    console.log(`Đã thêm ${newBooks.length} sách vào kho.`);
                }
                break;
            case "2":
                console.log("Danh sách sách hiện có:");
                libraries.forEach((book, index) => {
                    console.log(`${index + 1}. ${book}`);
                });
                break;
            case "3":
                let searchBook = prompt("Nhập tên sách cần tìm:");
                let foundIndex = libraries.indexOf(searchBook);
                if (foundIndex !== -1) {
                    console.log(`Sách "${searchBook}" được tìm thấy tại vị trí ${foundIndex}`);
                } else {
                    console.log("Không tìm thấy");
                }
                break;
            case "4":
                let oldName = prompt("Nhập tên sách cần sửa:");
                let indexUpdate = libraries.indexOf(oldName);
                if (indexUpdate !== -1) {
                    let newName = prompt("Nhập tên sách mới:");
                    libraries[indexUpdate] = newName;
                    console.log("Cập nhật tên sách thành công!");
                } else {
                    console.log("Sách không tồn tại.");
                }
                break;
            case "5":
                libraries.reverse();
                console.log("Danh sách sau khi đảo ngược:");
                libraries.forEach((book, index) => {
                    console.log(`${index}: ${book}`);
                });
                break;
            case "6":
                let otherBranch = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(otherBranch);
                console.log("Đã gộp kho sách thành công");
                break;
            case "7":
                console.log("Hẹn gặp lại!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== "7");
}
