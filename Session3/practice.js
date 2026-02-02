// Xây dựng chức năng đăng nhập
let password = "";
let count = 0;
let flag = false;
do {
    password = prompt("Nhập mật khẩu: ");

    if (password !== "admin123") {
        count ++;
        if(count === 3){
            alert("Tài khoản đã bị khóa");
        }
    }else{
        alert("Đăng nhập thành công");
        flag = true;
    }
} while (count < 3 && password !== "admin123");

if(flag){
    let choice;
    let totalBook;
    let totalPrice = 0;
    // Nhập sách vào kho
    do {
        choice = +prompt("Vui lòng nhập lựa chọn: ");
        switch (choice) {
            case 1:
                totalBook = prompt("Nhập số lượng sách: ");

                // Nhập giá cho từng cuốn sách
                for(let i = 0; i < totalBook; i++){
                    // Lấy giá tiền của sách
                    let price = +prompt(`Nhập giá tiền của cuốn sách ${i + 1}`);

                    if(price <= 0 || isNaN(price)){
                        alert(`Giá tiền của sách thứ ${i + 1} không hợp lệ`)
                        continue;
                    }

                // Tính tổng giá tiền của các cuốn sách
                totalPrice += price;
                }

                alert(`Tổng tiền của lô sách: ${totalPrice}`);
                break;
            case 2:
                for(let i = 1; i <= 3; i++){
                    for(let j = 1; j <= 5; j++){

                        if(i === 2 && j === 3){
                            console.log("Đang sửa chữa"); 
                            continue; // Loại bỏ thông báo này khỏi log bên dưới
                        }
                        console.log(`Khu vực ${i} - Kệ ${j}`);
                    }
                }
                break;
            case 3:
                alert("Kết thúc chương trình.");
                break;
            
            default:
                alert("Nhập sai lựa chọn")
                break;
        }
    } while (choice !== 3);
}