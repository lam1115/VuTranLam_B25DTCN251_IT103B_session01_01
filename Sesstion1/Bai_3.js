let quantityold = prompt("Nhập số sách cũ:");
let quantitynew = prompt("Nhập số sách mới:");

quantityold = Number(quantityold);
quantitynew = Number(quantitynew);

let totalQuantity = quantityold + quantitynew;

alert(`Tổng số sách trong kho là: ${totalQuantity}`);