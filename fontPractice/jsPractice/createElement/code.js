// 要素を取得
let list = document.getElementById("list");

// 新しい要素の作成
let newLink = document.createElement("a");

//内容を挿入
newLink.innerHTML = "developer.mozilla.org";

//最後挿入
list.append(newLink);

// 新しいliを作成
let item = document.createElement("li");
list.append(item);
item.append(newLink);

// 要素を取得
let removeLink = document.getElementById("link-2");
// // 要素だけの削除(不包含前面的标签，只是内容)
// removeLink.remove();

// 子から見た親を消す
removeLink.parentNode.remove();

//ボタンをクリックしたら「ボタン1をクリックしました」をコンソールに表示
// 要素を取得
let btnEvent = document.getElementById("button1");
//省略形
/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */


// btnEvent.onclick = function(){
//     console.log("ボタン1をクリックしました.");
// }

// //只有最后的会被显示(2)
// btnEvent.onclick = function(){
//     console.log("ボタン2をクリックしました.");
// }


// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);

//lambda
/**対象の要素.addEventListener(種類, () => {
  // 処理を記述
}); */


//两个都会出现（推荐使用）
btnEvent.addEventListener("click", () =>{
    console.log("ボタン1をクリックしました.");
});

btnEvent.addEventListener("click", () =>{
    console.log("ボタン2をクリックしました.");
});

//hello method 作成
//処理内容
function hello(){
    console.log("hello");
}