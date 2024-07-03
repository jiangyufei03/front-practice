$(function () {

  const BASE_TEXT1 = "直近1つ目";
  const BASE_TEXT2 = "直近2つ目";

  let firstText = "";
  let secondText = "";

  //テキストを表示するメソッド
  function printText(setFirstText) {
    //二つめの値を一つ目の値を上書き
    secondText = firstText;
    //1つめのテキストの内容を更新
    /* 将传递给 printText 方法的参数 setFirstText 的值赋给了全局变量 firstText。
    这个值通常是来自于按钮点击事件的回调函数中，根据点击的不同按钮传递不同的文本内容。 */
    firstText = setFirstText;

    $(".one").html(BASE_TEXT1 + firstText);
    $(".two").html(BASE_TEXT2 + secondText);
  }

  //リンゴを押したときの処理
  $("#btn1").on("click", () => {
    printText("リンゴ");
  })

  $("#btn2").on("click", () => {
    printText("バナナ");
  })

  $("#btn3").on("click", () => {
    printText("ミカン");
  })


});
