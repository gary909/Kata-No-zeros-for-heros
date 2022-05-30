function noBoringZeros(n) {
    myStr = n.toString();
    //myStr.slice(-1); // last letter
    if (n == 0 || n == '0') {
        return n;
    } else {
        while (myStr.slice(-1) == 0) {
            myStr = myStr.slice(0, -1);
        }
        newNum = parseFloat(myStr);
        return newNum;
    }
}

console.log(noBoringZeros(1450)); // 145
console.log(noBoringZeros(noBoringZeros(960000))); // 96
console.log(noBoringZeros(1050)); // 105
console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(0)); // -105
