//Bài 2
function typeOfTriangle(a, b, c) {
    if (0 < a <= Math.pow(10, 9) & 0 < b <= Math.pow(10, 9) & 0 < c <= Math.pow(10, 9)) {
        if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
            return ("Không tồn tại");
        }
        else if (a == b || b == c || c == a) {
            return ("Tam giác cân");
        }
        else if (a == b == c) {
            return ("Tam giác đều");
        }
        else if (a != b & b != c & c != a) {
            return ("Tam giác thường");
        }
    }

}

