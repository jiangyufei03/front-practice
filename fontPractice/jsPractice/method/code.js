function printHello(){
    console.log("Hello");
}

//methodの呼び出し
printHello();

//戻り値あり、引数あり
function sum(a, b){
    return a + b;
}

console.log(sum(3, 5));

// デフォルトパラメータ
function print(str1, str2 = "世界", str3 = "!!!"){
    console.log(str1 + " " + str2 + " " + str3);
}

//メソッド呼び出し
print("ヤッホー");
print("ヤッホー", "こんにちは");
print("ヤッホー", "こんにちは", "おやすみ");

//ラムダ式
let add = (x, y) => x + y;
console.log(add(5, 7));