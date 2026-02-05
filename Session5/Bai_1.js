let listBook = [];

let n = +prompt("Bạn muốn trả bao nhiêu cuốn sách");

for (let i = 1; i <= n; i++){
    listBook.push(prompt(`Nhập tên cuốn sách thứ ${i}: `));
}

console.log(`Tổng số sách đã trả: ${n}`);
for(let  i = 0; i < listBook.length; i++){
    console.log(listBook[i]);
}
