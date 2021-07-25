//Bài 4
function divisibility(a, b) {
    let cap = prompt("Nhập số N:");
    while (i < Math.sqrt(cap)) {
        if (((a + i) % b) == 0) {
            return ((a + i) % b);
        }
        i++;
    }
}


