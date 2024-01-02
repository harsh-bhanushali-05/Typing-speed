function makeString(str) {
    let ans = "";
    str.forEach(element => {
        ans += element + " ";
    });
    ans = ans.trim();
    return ans.split("");
}
export default makeString;