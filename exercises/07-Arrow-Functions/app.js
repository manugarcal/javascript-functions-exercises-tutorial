const rapid = (s) => {
    // string.toUpperCase().split("").filter(ele => ele == 'A' || ele == 'E' || ele == 'I' || ele == 'O' || ele == 'U' ? "" : ele).join("")
    let string = s.toUpperCase().split("");
    let newStr = [];
    for (let ele of string) {
        ele == 'A' || ele == 'E' || ele == 'I' || ele == 'O' || ele == 'U' ? "" : newStr.push(ele);
    }
    return newStr.join("")
}
// From this line up Do not change code below
let str = "John";
console.log(rapid(str));