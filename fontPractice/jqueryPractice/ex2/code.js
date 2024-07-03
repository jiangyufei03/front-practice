$(function () {
  //<ol>の取得
  let list = $("#list");
  // 新しい<a>要素を追加
  let newLink = $("<a>");
  //作成したaタグの中に文字を挿入
  newLink.html("developer.mozilla.org");
  //リストの末尾に追加
  list.append(newLink);

  // 新しい<li>を作成
  let item = $("<li>");
  list.append(item);
  item.append(newLink);

  // 要素の作成<p>
  let item2 = $("<p>");
  // <p>の内容：And more
  item2.html("And more");
  // <ol>の外側に要素を追加
  //上面的list变量中已经放入ol变量
  list.after(item2);

  // 要素の全部削除
  // list.remove();

  // 要素の中を空にする
  list.empty();

  //onCLick
  // $("#button1").click(() => {
  //   console.log("ボタン１");
  // });

  //addEventListener
  $("#button1").on("click", () => {
    console.log("ボタン１");
    $("#text").css("color", "red");
  });

  $("#button1").on("click", () => {
    console.log("ボタン２");
  });

  //

});