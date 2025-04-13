let s = "Hello bhai kya haal chaal";
let arr = s.split(" ");
let word = "";
for (let i = 0; i < arr.length; i++) {
  let ans = arr[i];
  if (ans[i].length <= 2) ans[i];
  let word =
    word +
    ans[i].charAt(0).toUpperCase() +
    ans[i].substring(1, ans.length - 1) +
    ans[i].charAt(ans.length - 1).toUpperCase();
}
console.log(word);
