let question = "";
let count = "";
let failcount = "";

do {
    question = prompt("Có yêu cầu gia hạn không? (Có/Không)");

    if(question === "Có"){
        let name = prompt("Tên bạn đọc: ");
        let nameBook = prompt("Tên sách: ");
        let day = +prompt("Số ngày đã mượn hiện tại: ");
        let bonusDay = +prompt("Số ngày muốn gia hạn thêm: ");

        if(day < 1 && bonusDay < 1){
            alert("Lỗi");
        }else{
            let total = day + bonusDay;
            if(total > 60){
                alert("Không được gia hạn: Tổng thời gian đã vượt quá 60 ngày tối đa");
                failcount ++;
            }else if(bonusDay > 45){
                alert("Không được gia hạn: Đã mượn quá lâu (45 ngày");
                failcount ++;
            }else{
                alert("Gia hạn thành công");
                count ++;
            }
        }
    }
} while (question !== "Không");

alert(`Số lần gia hạn thành công: ${count}`);
alert(`Số lần gia hạn không thành công: ${failcount}`);
