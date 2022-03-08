var currentFormat = new Intl.NumberFormat("vn-VN");

/**
 * BT1: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
 * 
 * -Đầu vào:  3 nguyên bất kỳ người dùng nhập vào
 * 
 * - Xử lý:
 * B1: bắt lấy sự kiện click
 * B2: tạo biến a, b, c ép kiểu số và lấy giá trị đã nhập
 * B3: dùng if else để lọc ra số nhỏ nhất giữa 3 số -> sau đó lồng thêm 
 * 1 câu điều kiện để lọc ra số nhỏ nhất giữa 2 số và in ra
 * -> Nếu a <= b và a <= c >>> a là số nhỏ nhất >>> nếu b <= c thì a <= b <= c ngược lại a <= c <= b
 * -> Tiếp theo nếu b <= a và b <= c >>> b là số nhỏ nhất >>> nếu a <= c thì b <= a <= c ngược lại b <= c <= a
 * -> Tiếp theo trường hợp còn lại c <= a và c <= b >>> c là số nhỏ nhất >>> nếu a <= b thì c <= a <= b ngược lại c <= b <= a
 * 
 * - Đầu ra: xuất kết quả ra màn hình web
 */



document.getElementById("btnSapXep").onclick = function() {
    var a = document.getElementById("a").value *1;
    var b = document.getElementById("b").value *1;
    var c = document.getElementById("c").value *1;
    if (a <= b && a <= c){
        if (b <= c){
            // console.log(a, b, c);
            document.getElementById("ketQuaSapXep").innerHTML = "3 số theo thứ tự tăng dần là: "  + a + " - " + b + " - " + c;
        }else {
            // console.log(a, c, b);
            document.getElementById("ketQuaSapXep").innerHTML = "3 số theo thứ tự tăng dần là: "  + a + " - " + c + " - " + b;
        }
    }else if (b <= a && b <= c){
        if (a <= c){
            // console.log(b, a, c);
            document.getElementById("ketQuaSapXep").innerHTML = "3 số theo thứ tự tăng dần là: " + b + " - " + a + " - " + c;

        }else{
            // console.log(b, c, a);
            document.getElementById("ketQuaSapXep").innerHTML = "3 số theo thứ tự tăng dần là: "  + b + " - " + c + " - " + a;
        }
    }else {
        if(a <= b){
            // console.log(c, a, b);
            document.getElementById("ketQuaSapXep").innerHTML = "3 số theo thứ tự tăng dần là: "  + c + " - " + a + " - " + b;
        }else {
            // console.log(c, b, a);
            document.getElementById("ketQuaSapXep").innerHTML = "3 số theo thứ tự tăng dần là: "  + c + " - " + b + " - " + a;
        }
    }

}
