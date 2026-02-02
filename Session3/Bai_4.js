let question = ""
let outOFbook = 0;
let bookLost = 0;
let bookID = "";
let bookName = "";
let quantity = "";
let status = "";
let total = 0;
do {
    question = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");
    if(question === "có"){
        bookID = prompt("Mã sách: ");
        bookName = prompt("Tên sách: ");
        quantity = +prompt("Số lượng thực tế đang có trong kho: ");
        status = +prompt("Tình trạng sách: 1. Bình thường(có thể cho mượn\n2. Mất(Không còn trong kho")
    
        if(status === 2){
            bookLost ++;
        }else if(status === 1 && quantity === 0){
            outOFbook ++;
        }else if(status === 1 && quantity >= 10){
            total ++;
        }else if(status === 1 && quantity >= 1 && quantity <= 9){
            total ++;
        }
    }
} while (question !== "không");

alert(`Tổng số sách đã thống kê: ${total} cuốn`);
alert(`Số sách mất ${bookLost} cuốn`);
alert(`Số sách hết hàng ${outOFbook} cuốn`);