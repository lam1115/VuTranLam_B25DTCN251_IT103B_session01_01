let check = 0;
let isReal = false;

while (check < 3) {
    let account = prompt("Mời bạn nhập tài khoản:");
    let password = prompt("Mời bạn nhập mật khẩu:");

    if (account === "admin" && password === "12345"){
        alert("Đăng nhập thành công!");
        isReal = true;
        break;
    }else {
        check++;
        let count = 3 - check;

    if (account !== "admin" && password !== "12345") {
        alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${count} lần thử.`);
    } else if (account !== "admin") {
        alert(`Sai tài khoản! Bạn còn ${count} lần thử.`);
    } else {
        alert(`Sai mật khẩu! Bạn còn ${count} lần thử.`);
    }
    }
}

if (!isReal) {
    alert("Tài khoản đã bị khóa");
}else{
    let choice;

    do {
        let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
            menu += "1. Phân loại mã số sách (Chẵn/Lẻ)\n";
            menu += "2. Thiết kế sơ đồ kho sách (Dạng lưới)\n";
            menu += "3. Dự toán phí bảo trì sách theo năm\n";
            menu += "4. Tìm mã số sách may mắn\n";
            menu += "5. Thoát\n";
            menu += "Vui lòng nhập lựa chọn của bạn (1-5):";

        choice = +prompt(menu);

        switch (choice) {
            case 1:
                let totalBooks = 0;
                let evenBooks = 0;
                let oddBooks = 0; 
                let bookId;
                alert("Nhập các mã số sách (Nhập 0 để dừng lại):");

                while (true) {
                    bookId = +prompt("Nhập mã số sách:");

                    if (isNaN(bookId)) {
                        alert("Vui lòng nhập số nguyên hợp lệ!");
                        continue;
                    }
                    if (bookId === 0) {
                        break;
                    }
                    totalBooks++;
                    if (bookId % 2 === 0) {
                        evenBooks++;
                    } else {
                        oddBooks++;
                    }
                }

                console.log("--- Kết quả phân loại mã sách ---");
                console.log(`- Tổng số lượng mã sách đã nhập: ${totalBooks}`);
                console.log(`- Số mã chẵn (Sách khoa học): ${evenBooks}`);
                console.log(`- Số mã lẻ (Sách nghệ thuật): ${oddBooks}`);
                alert("Đã phân loại xong!");
                    break;

            case 2:
                let rows = +prompt("Nhập số hàng của kho:");
                let cols = +prompt("Nhập số cột của kho:");

                if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
                    alert("Số hàng và cột phải là số dương!");
                    break;
                }

                console.log(`--- Bản đồ kho sách (${rows}x${cols}) ---`);
                for (let i = 1; i <= rows; i++) {
                    let rowLayout = "";
                for (let j = 1; j <= cols; j++) {
                    let position = `[${i}-${j}]`;
                if (i === j) {
                    position += "(Kệ ưu tiên)";
                }
                rowLayout += position + "  ";
                }
                console.log(rowLayout); 
                }
                alert("Đã in bản đồ kho ra Console (F12).");
                    break;
            case 3:
                let quantity = +prompt("Nhập số lượng sách hiện có:");
                let costPerBook = +prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ):");
                let years = +prompt("Nhập số năm dự toán:");

                if (isNaN(quantity) || isNaN(costPerBook) || isNaN(years)) {
                    alert("Dữ liệu nhập vào phải là số!");
                    break;
                }

                console.log("--- Dự toán phí bảo trì sách theo năm ---");
                let totalCost;
                for (let year = 1; year <= years; year++) {
                    totalCost = quantity * costPerBook;
                    console.log(
                    `Năm ${year}: ${totalCost.toLocaleString()} VNĐ (Đơn giá: ${costPerBook.toFixed(0)}/cuốn)`,
                    );

                    costPerBook = costPerBook * 1.1;
                }
                alert("Đã hoàn thành bảng dự toán tại Console.");
                        break;
            case 4:
                let n = +prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):");

                if (isNaN(n) || n <= 0) {
                    alert("Vui lòng nhập số N dương!");
                    break;
                }

                let luckyCount = 0;
                let luckyList = "";

                console.log(`--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---`);
                for (let i = 1; i <= n; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        luckyList += i + " ";
                        luckyCount++;
                    }
                }

                console.log(luckyList || "Không có mã nào thỏa mãn.");
                console.log(`=> Tổng cộng có ${luckyCount} mã may mắn.`);
                alert(`Tìm thấy ${luckyCount} mã may mắn. Xem chi tiết tại Console.`);
                        break;
            case 5:
                alert("Hệ thống đang đăng xuất... Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại!");
            }
    } while (choice !== 5);
}