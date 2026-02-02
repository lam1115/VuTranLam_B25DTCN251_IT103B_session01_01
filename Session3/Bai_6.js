let question = "";
let name = "";
let cardID = "";
let feedBack = "";
let type = "";
let totalCount = 0;
let posCount = 0;
let proposeCount = 0;
let lightCount = 0;
let medCount = 0;
let serCount = 0;

do {
    question = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không (có/không)");
    totalCount   ++;
    if(question === "có"){
        name = prompt("Tên bạn đọc: ");
        cardID = prompt("Mã thẻ bạn đọc: ");
        feedBack = +prompt("1. Phàn nàn / Khiếu nại\n2. Đề xuất cải thiện\n3. Phản hồi tích cực / Khen ngợi");
        if(feedBack === 1){
            type = +prompt("1. Nhẹ\n2. Trung bình\n3. Nghiệm trọng");
            if(type === 3){
                console.log("Chuyển ngay lãnh đạo - Khiếu nại nghiệm trọng");
                serCount ++;
            }else if(type === 2){
                console.log("Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
                medCount ++;
            }else if(type === 1){
                console.log("Khiếu nại ngay tại quầy - Khiếu nại nhẹ");
                lightCount ++;
            }
        }else if(feedBack === 2){
            console.log("Cảm ơn! Đề xuất đã được ghi nhận");
            proposeCount ++;
        }else if(feedBack === 3){
            console.log("Cảm ơn bạn đã phản hồi tích cực!");
            posCount ++;
        }
    }

} while (question !== "không");

alert(`Tổng số phản hồi/khiếu nại đã xử lý: ${totalCount}
    \nSố khiếu nại nghiêm trọng (mức 3): ${serCount}
    \nSố khiếu nại trung bình (mức 2): ${medCount}
    \nSố khiếu nại nhẹ (mức 1): ${lightCount}
    \nSố đề xuất cải thiện: ${proposeCount}
    \nSố phản hồi tích cực: ${posCount}`);