let question = +prompt("Hôm nay có bao nhiêu lượt trả sách?");
let count = "";
let day = "";
if(question < 0){
    alert("Lỗi!");
}else{
    for(let i = 1; i <= question; i++){
        let name = prompt("Tên người trả: ");
        let nameBook = prompt("Tên sách: ");

        do {
            day = +prompt("Số ngày mượn thực tế: ");

            if(day <= 14){
                alert("Trả đúng hạn");
            }else if(day === 15 && day <= 21){
                alert("Trả muộn nhé ");
                alert("Phạt nhắc nhở");
                count ++;
            }else{
                alert("Quá hạn nhiệm trọng");
                alert("Cần ghi biên bản phạt");
                count ++;
            }
        } while (day < 1);
    }

    alert(`Tổng lượt trả sách: ${question}`);
    alert(`Số lượt trả muộn: ${count}`);
}