$(function(){
  // buttonのclassを取得、「.on」でclickイベント作成
  $(".sample-button").on("click", () => {
    $.ajax({
      url: "test.html",
      type: "GET",
      dataType: "html"
    }).done(function(data){
      $(".result").html(data)
    }).fail(function(){
      console.log("通信が失敗しました。")
    })
  })
});