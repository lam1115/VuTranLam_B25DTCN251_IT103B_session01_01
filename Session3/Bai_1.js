let question = +prompt("Hôm nay có bao nhiêu lượt mượn sách?");

if(question < 0 ){
    alert("Lỗi!");
}else{
    for (let i = 1; i <= question; i++){
        let name = prompt("Tên người mượn: ");
        let nameBook = prompt("Tên sách: ");
        let day = +prompt("Số ngày mượn: ");
    
        if(day < 0){
            alert("Lỗi!");
        }else if(day > 14){
            alert("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
        }else{
            alert("Mượn thành công");
        }
    }

    alert(`Tổng số lượt mượn: ${question}`);
}
