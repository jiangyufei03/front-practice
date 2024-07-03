let label = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");


//値を定数で保持
const BASE_TEST = "値";
let result = 0;

//値を表示するメソッド
// function changeResultText(){
//     label.innerHTML =  BASE_TEST + result;
// }


//値を計算するためのメソッド
// function calculateResult(setValue){
//     resultValue = 0;
//     changeResultText();
// }

button1.addEventListener("click", () =>{
    result = 0;
    label.innerHTML = "値：" + result;
    // changeResultText();
});

button2.addEventListener("click", () =>{
    result += 1;
    label.innerHTML = "値：" + result;
     // changeResultText();
    //  calculateResult(1);

});

button3.addEventListener("click", () =>{
    result -= 1;
    label.innerHTML = "値：" + result;
     // changeResultText();
    //  calculateResult(-1);
});
