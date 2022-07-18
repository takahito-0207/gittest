
const array1 = []; //１列目の配列の箱

// 1列目 1-15
const createRandom1 = function (i) { //乱数を生成し、マスに入れる関数
    const numEl = document.querySelectorAll(".con1").item(i);// クラスを指定する変数
    const shuffle = 1 + Math.floor(Math.random() * 14);//1-15の乱数を発生

    if (!array1.includes(shuffle)) { //配列にまだ入ってない乱数のとき
        array1.push(shuffle); //配列に仲間入り
        console.log(i + "回目 <- " + shuffle); //仲間入りした数字を出力
    } else {
        // 被っていれば、もう一度この関数を実行する
        createRandom1(i);
    }
    // console.log(array1)
    numEl.textContent = array1[i];

}

for (let i = 0; i < 5; i++) {
    createRandom1(i); //添え字の数字を回すfor文。0-4の数字が引き渡される。.con1-0~.con1-4

}

console.log(array1);




// 2列目 16-30
const array2 = []; //2列目の配列の箱
const createRandom2 = function (i) { //乱数を生成し、マスに入れる関数
    const numEl = document.querySelectorAll(".con2").item(i);// クラスを指定する変数
    const shuffle = 16 + Math.floor(Math.random() * 14); //16-30の乱数を発生

    if (!array2.includes(shuffle)) { //配列にまだ入ってない乱数のとき
        array2.push(shuffle); //配列に仲間入り
        console.log(i + "回目 <- " + shuffle); //仲間入りした数字を出力
    } else {
        // 被っていれば、もう一度この関数を実行する
        createRandom2(i);
    }
    // console.log(array2)
    numEl.textContent = array2[i];
}

for (let i = 0; i < 5; i++) {
    createRandom2(i); //添え字の数字を回すfor文。0-4の数字が引き渡される。.con2-0~.con2-4

}

console.log(array2);

// 3列目 31-45
const array3 = []; //3列目の配列の箱
const createRandom3 = function (i) { //乱数を生成し、マスに入れる関数
    const numEl = document.querySelectorAll(".con3").item(i);// クラスを指定する変数
    const shuffle = 31 + Math.floor(Math.random() * 14); //31-45の乱数を発生
    if (!array3.includes(shuffle)) { //配列にまだ入ってない乱数のとき
        array3.push(shuffle); //配列に仲間入り
        console.log(i + "回目 <- " + shuffle); //仲間入りした数字を出力
    } else {
        // 被っていれば、もう一度この関数を実行する
        createRandom3(i);
    }
    // console.log(array3)
    numEl.textContent = array3[i];
}

for (let i = 0; i < 4; i++) {
    createRandom3(i); //添え字の数字を回すfor文。0-4の数字が引き渡される。.con3-0~.con3-4
}

console.log(array3);

// 4列目 46-60
const array4 = [];
const createRandom4 = function (i) {
    const numEl = document.querySelectorAll(".con4").item(i);// クラスを指定する変数
    // クリックしたときに、○×を作る関数
    const shuffle = 46 + Math.floor(Math.random() * 14);
    if (!array4.includes(shuffle)) {
        array4.push(shuffle);
        console.log(i + "回目 <- " + shuffle);
    } else {
        // 被っていれば、もう一度この関数を実行する
        createRandom4(i);
    }
    // console.log(array4)
    numEl.textContent = array4[i];
}

for (let i = 0; i < 5; i++) {
    createRandom4(i); //i=0のとき0,i=1のとき1が引数としてcreateMaruBatsuに渡される
}

console.log(array4);

// 5列目 61-75
const array5 = [];
const createRandom5 = function (i) {
    const numEl = document.querySelectorAll(".con5").item(i);// クラスを指定する変数
    // クリックしたときに、○×を作る関数
    const shuffle = 61 + Math.floor(Math.random() * 14);
    if (!array5.includes(shuffle)) {
        array5.push(shuffle);
        console.log(i + "回目 <- " + shuffle);
    } else {
        // 被っていれば、もう一度この関数を実行する
        createRandom5(i);
    }
    // console.log(array5)
    numEl.textContent = array5[i];
}

for (let i = 0; i < 5; i++) {
    createRandom5(i); //i=0のとき0,i=1のとき1が引数としてcreateMaruBatsuに渡される
}

console.log(array5);

const arrayAll = array1.concat(array2, array3, array4, array5); //乱数の25個の数字全て配列にいれる
console.log("ビンゴカード25個の数" + arrayAll);//出力


//残りやりたいこと

//※抽選
const lotNum = []; //抽選した数字を入れていく箱
const lotButton = document.getElementById("button"); //htmlボタンのなまえ
const lotButtonP = document.getElementById("p")
let bngCount = 0; //何回抽選したかカウント

// 抽選ボタンを押したときに、抽選して表示された数と25個のマスの数字のどれかが一致してたら、背景色を青にする
// 一致していなかったら繰り返し

document.getElementById('lotButton').addEventListener('click', function () { //抽選ボタンをクリックするたびにおこる動作
    // 抽選回数カウントのエリア
    bngCount++ //ボタン押すごとに１増える
    console.log(bngCount + "回目"); //コンソールに回数を出力
    const countPrint = document.querySelector("#count");  //htmlのid countを選択
    countPrint.textContent = bngCount + "回目" //id countに回数を出力

    // ランダム数のエリア
    const randomNum = 1 + Math.floor(Math.random() * 75); //1-75までの乱数発生
    const lotNumPrint = document.querySelector("#lotNum"); //htmlのid lotNumを選択
    lotNumPrint.textContent = randomNum //id lotNumに抽選した乱数を出力

    // ランダム数出力のエリア
    lotNum.push(randomNum);//配列lotNumに乱数を格納
    const lotNumBox = document.querySelector("#lotNumBox");//id lotNumBoxを選択
    lotNumBox.textContent = lotNum //配列lotNumを出力

    // カードと同じ数字出たら青くする
    //for外に出さないと25個全部あおくなっちゃうわ、1っこだけまわしたい

    const classAll = document.querySelectorAll("#container div div");
    for (let i = 0; i < 25; i++) {
        if (arrayAll[i] === randomNum) {
            classAll[i].style.backgroundColor = "blue"
            // ここで判定用のマークを判定配列[i]につける　＞その後終了判定
        }
    }
    // const colorChange = function (i) {
    //     const classAll = document.querySelectorAll("#container div div").item(i) 
    //     //cssで考えたら#containerの中のdivの中のdiv +添字
    //     if (arrayAll.includes(randomNum)) { //もしarrayAll配列に抽選した乱数が入ってたら

    //         classAll.style.backgroundColor = "blue" //その番号だけ青くしてほしい
    //     }
    // }
    // for (let i = 0; i < 25; i++) {
    //     colorChange(i);
    // }
})






    // while (true) {
    //     const classAll = document.querySelectorAll("#container div div").item(i) //cssで考えたら#containerの中のdivの中のdiv +添字
    //     //arrayAll[i]; //25個マスの配列要素を取得
    //     const randomNum = 1 + Math.floor(Math.random() * 75);  //75個の乱数生成

    //     if (arrayAll.includes(randomNum)) { //arrayAllのなかに生成した乱数が入ってるかチェック
    //         // lotNum.push(randomNum)
    //         classAll.style.backgroundColor = "blue" //入ってたら青にする
    //         console.log(" ------------------ やり直し " + randomNum);
    //     } else {
    //         bngCount++;
    //         console.log(bngCount + "回目 randomNum　" + randomNum);
    //         lotNum.push(randomNum);

    //         console.log("lotNum  " + lotNum);
    //         break;
    //     }
    //     lotButtonP.textContent = lotNum
    // }


// 抽選ボタン→html
//押したら@回目の文字と乱数１つ出力

//リピートする
// 抽選ナンバー出す
// あってたら区別

//※縦横斜めの判定
//リーチアラート
//ビンゴアラート
