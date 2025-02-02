//要素の取得
//                              p tagのid
let text = document.getElementById("text-1");
//中身の確認
console.log(text);
// 要素の内容を取得
console.log(text.innerHTML);
// 要素の内容を変更
text.innerHTML = "Hello";

//要素の取得
let  text2 = document.getElementById("text-2");
//中身の確認
console.log(text2);
// 要素の内容を取得
console.log(text2.innerHTML);
// 要素の内容を変更(四連休)
text2.innerHTML = "明日から四連休";

// クラスを指定して値を取得する
let ex = document.getElementsByClassName("ex1");
console.log(ex);
console.log(ex[0].innerHTML);

//タグの名前を指定して値を取得
let ex2 = document.getElementsByClassName("ex1");
console.log(ex2);
console.log(ex2[1].innerHTML);

// 要素の取得
let link = document.getElementById("link-1"); 
// 要素の内容を取得
console.log(link.innerHTML);
// urlの内容を取得
console.log(link.href);
// urlの変更
link.href = "https://eng-entrance.com/what-is-dom";
link.target = "_blank";
