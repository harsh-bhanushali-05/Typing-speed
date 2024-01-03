function makeString(str, numbers, punctuation) {
    let ans = "";
    str.forEach(element => {
        if (numbers) {
            let p = Math.random();
            if (p > 0.9) {
                let x = Math.floor(Math.random() * 1000) + 1;
                element = element + " " + x;
            }
        }
        if (punctuation) {
            let p = Math.random();
            if (p > .85) {
                let arr = [',', ':', '.', ';', '?', '!', '(', ')', '\\'];
                let put = Math.floor(Math.random() * arr.length);
                element = element + " " + arr[put];
            }
        }
        ans += element + " ";
    });
    ans = ans.trim();
    return ans.split("");
}
export default makeString;