// let val = "hello";
// console.log(val);

// val2 = "こんにちわ";
// console.log(val2);

// function sum(val1, val2) {
//     return val1 + val2;
// }

// let result = sum(15, 20);
// console.log("たしざん" + result);


// console.log("かけざん");

// function multiply(val3, val4) {
//     return val3 * val4;
// }

// console.log("掛け算結果" + multiply(8, 11));
// console.log(multiply(5.5, -13));

// function test() {
//     return '引数のない関数テストを表示';
// }

// console.log(test());

// //単純な関数の呼び出し方
// test()

//------------------------------------------------
// let count = 0;
// document.getElementById('sikaku').addEventListener('click', function () {

//     //textcontentには、文字（テキスト）が入る
// console.log(this.textContent);

//     if(count%4 === 0){
//         this.style.backgroundColor = "blue";
//         this.textContent ="青い四角形"
//     }
//     else if(count%4 === 1){
//         this.style.backgroundColor = "green";
//         this.textContent ="緑い四角形"
//     }
//     else if(count%4 === 2){
//         this.style.backgroundColor = "orange";
//         this.textContent ="オレンジい四角形"
//     }
//     else if(count%4 === 3){
//         this.style.backgroundColor = "red";
//         this.textContent ="赤い四角形"
//     }
//     console.log(count);
//     count = count + 1;

// })
//------------------------------------------------

let count = 0;
document.getElementById('sikaku').addEventListener('click', function () {

    if(count === 0){
                this.style.backgroundColor = "white";
                this.textContent ="●";
                this.style.fontSize = "60px";
                this.style.padding = "10px";
                this.style.color = "red";
                count = 1;
            }
            else if(count === 1){
                this.style.backgroundColor = "#cccccc";
                this.textContent ="×"
                this.style.fontSize = "60px";
                this.style.padding = "10px";
                this.style.color = "blue";
                count = 0;
            }


})


// document.getElementById('sikaku').addEventListener('mouseleave',function(){
//     this.style.backgroundColor = "green"
// })

// document.getElementById('sikaku').addEventListener('mousedown',function(){
//     this.style.backgroundColor = "orange"
// })
// document.getElementById('sikaku').addEventListener('mouseup',function(){
//     this.style.backgroundColor = "red"
// })

// const fruit = "りんご";
// if (fruit) { console.log("フルーツが見つかりました"); }

// if (fruit === "ばなな")
//  { console.log("バナナが見つかりました"); }

// if (fruit === "ばなな")
//  { console.log("りんごが見つかりました"); }
// else { console.log("elseばななやんけ"); }

// let num = 1;

// if (num == 1) {
//     console.log("num==1でtrue");
// }

// if (num === "1") {
//     console.log("num===1でtrue");
// } else {
//     console.log("num===1でfalse");
// }

