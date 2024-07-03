$(function () {
  //要素の取得
  let text = $("#text-1")
  // 要素の内容を取得
  console.log(text.html());
  // 要素の内容を変更
  text.html("GoodBye");
  // 色を付ける
  text.css("color", "blue");

  //クラスに対して要素の取得
  let textClass = $(".text-class");
  // let textClass = $("p");
  //要素の内容を取得
  console.log(textClass.eq(0).html());
  // 色を付ける(指定)
  textClass.eq(1).css("color", "red");

  //要素の取得
  let link = $("#link-1");
  //hrefのリンクを取得
  console.log(link.attr("href"));

  //リンクの書き換え
  link.attr("href", "https://www.google.com/");
  link.attr("target", "_blank");


});