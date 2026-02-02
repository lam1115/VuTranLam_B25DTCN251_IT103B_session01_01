let question = "";
let name = "";
let bookID = "";
let bookName = "";
let waitingDay = "";
let priority = "";
let count = 0;
let pass = 0;
let fail = 0;
let mid = 0;

do {
    question = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if(question === "có"){
        name = prompt("Tên bạn đọc: ");
        bookID = prompt("Mã sách muốn đặt trước: ");
        bookName = prompt("Tên sách: ");
        waitingDay = +prompt("Số ngày dự kiến chờ: ");
        priority = +prompt("1. Sinh viên bình thường\n2. Giảng viên/Nghiên cứu sinh\n3. Nhân viên thư viện/Đặc cách");

        count ++;
        if(waitingDay > 45){
            alert("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
            fail ++;
        }else if(priority === 3){
            alert("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
            pass ++;
        }else if(priority === 2 && waitingDay <= 30){
            alert("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
            pass++;
        }else if(priority === 1 && waitingDay <= 21){
            alert("Đặt trước thành công");
            pass ++;
        }else{
            alert("Đặt trước tạm thời - Chờ xét duyệt thêm");
            mid ++;
        }
    }
} while (question !== "không");

alert(`Tổng số yêu cầu đã xử lý ${count}\nSố yêu cầu được đặt trước thành công ${pass}\nSố yêu cầu bị từ chối ${fail}\nSố yêu cầu chờ xét duyệt ${mid}`)