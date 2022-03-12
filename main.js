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
    var ketQuaSX;

    if (a <= b && a <= c){
        if (b <= c){
            ketQuaSX = a + " - " + b + " - " + c;
        }else {
            ketQuaSX = a + " - " + c + " - " + b;
        };
    }else if (b <= a && b <= c){
        if (a <= c){
            ketQuaSX = b + " - " + a + " - " + c;

        }else{
            ketQuaSX = b + " - " + c + " - " + a;
        };
    }else {
        if(a <= b){
            ketQuaSX = c + " - " + a + " - " + b;
        }else {
            ketQuaSX = c + " - " + b + " - " + a;
        };
    };


    document.getElementById("ketQuaSapXep").innerHTML = "3 số theo thứ tự tăng dần là: "  + ketQuaSX;

};


/**
 * BT2:
 * - Đầu vào: giá trị người dùng nhập
 * 
 * - Xử lý: 
 * B1: bắt sự kiện click 
 * B2: tạo biến value lưu giá trị nhập
 * B3: dùng câu điều kiện if để kiểm tra value
 * 
 * - Đầu ra: xuất câu chào tương ứng ra web
 */


document.getElementById("hoi").onclick = function(){
    var value = document.getElementById("ai").value;
    var thongBao;

    if(value === "B"){
        thongBao = "Chào Bố!";
    }else if(value === "M"){
        thongBao = "Chào Mẹ!";
    }else if(value === "A"){
        thongBao = "Chào Anh trai!";
    }else if(value === "E"){
        thongBao = "Chào Em gái!";
    }else{
        thongBao = "Chào Bạn!";
    };

    document.getElementById("xuatCauChao").innerHTML = thongBao;
};

/**
 * BT3:  Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
 * - Đầu vào: cho 3 số nguyên ngẫu nhiên
 * 
 * -Xử lý:
 * B1: tạo biến  x = 1; y = 2; z = 3;
 *  Ta sẽ có 4 trường hợp: 
 * TH1: 3 chẵn 0 lẻ
 * TH2: 2 chẵn 1 lẻ
 * TH3: 1 chẵn 2 lẻ
 * TH4: 0 chẵn 3 lẻ
 * 
 * B2: số chẵn là số nguyên chia hết cho 2 => dùng toán tử % để kiểm tra
 * và if để kiểm tra từng trường hợp
 * TH1: ta dùng (x%2 == 0 && y%2 == 0 && z%2 == 0)
 * trong TH2: ta có 3 trường hợp tiếp (x%2 == 0 && y%2 == 0 && z%2 != 0) || (x%2 == 0 && y%2 != 0 && z%2 == 0) || (x%2 != 0 && y%2 == 0 && z%2 == 0)
 * trong TH3: ta có 3 trường hợp tiếp (x%2 == 0 && y%2 != 0 && z%2 != 0) || (x%2 != 0 && y%2 == 0 && z%2 != 0) || (x%2 != 0 && y%2 != 0 && z%2 == 0)
 * TH4: còn lại
 * 
 * -Đầu ra: in kết quả ra màn hình console
 */

var x = 1;
var y = 2;
var z = 3;
// => 1 chẵn 2 lẻ
if(x%2 == 0 && y%2 == 0 && z%2 == 0){
    console.log("3 chẵn 0 lẻ");
}else if ((x%2 == 0 && y%2 == 0 && z%2 != 0) || (x%2 == 0 && y%2 != 0 && z%2 == 0) || (x%2 != 0 && y%2 == 0 && z%2 == 0)) {
    console.log("2 chẵn 1 lẻ");
}else if ((x%2 == 0 && y%2 != 0 && z%2 != 0) || (x%2 != 0 && y%2 == 0 && z%2 != 0) || (x%2 != 0 && y%2 != 0 && z%2 == 0)) {
    console.log("1 chẵn 2 lẻ");
}else {
    console.log("0 chẵn 3 lẻ");
};

/**
 * BT4:
 * - Đầu vào: nhập độ dài 3 cạnh 
 * 
 * - Xử lý:
 * B1: bắt sự kiện click
 * B2: lấy giá trị nhập vào 3 cạnh lưu vào biến var a, b, c và ép kiểu
 * B3: Kiểm tra có phải là tam giác hay không (nếu là tam giác thì thực thi tiếp B4
 * nếu không phải tam giác thì thông báo thoát chương trình)
 * B4: kiểm tra là tam giác gì ( thường - cân - đều - vuông)
 * 
 * - Đầu ra: in kết qua kiểm tra là tam giác gì ra màn hình web
 */

document.getElementById("kiemTraTamGiac").onclick = function () {
    var a = document.getElementById("canhA").value * 1;
    var b = document.getElementById("canhB").value * 1;
    var c = document.getElementById("canhC").value * 1;
    var ketQuaKTTG;

    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && a == c && b == c) {
            ketQuaKTTG = "Đây là tam giác ĐỀU";
        }else if (a == b || a == c || b == c) {
            ketQuaKTTG = "Đây là tam giác CÂN";
        }else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == b*b + a*a){
            ketQuaKTTG = "Đây là tam giác VUÔNG";
        } else {
            ketQuaKTTG = "Đây là tam giác THƯỜNG";
        };
    }else {
        ketQuaKTTG = "Đây là không phải tam giác";
    };

    document.getElementById("ketQuaTamGiac").innerHTML = ketQuaKTTG;
};