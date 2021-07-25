//Bài 1
function perfectSquare(i) {

    // In ra tất cả số chính phương nhỏ hơn 1000

    let n = prompt("Nhập số N:");
    // let i = 0;

    console.log("Các số chính phương nhỏ hơn " + n + " là: \n");
    for (let i = 0; i <= n; i++) {
        if (i == Math.floor(Math.sqrt(i)) * Math.floor(Math.sqrt(i))) {
            console.log(i);
        }
    }

    // Cách 2:
    console.log("Các số chính phương nhỏ hơn " + n + " là: \n");
    let a = Math.sqrt(n);
    for (let i = 0; i <= a; i++) {
        if (Math.pow(i, 2) < n) {
            console.log(Math.pow(i, 2));
        }
    }
    
}


