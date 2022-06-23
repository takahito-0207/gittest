        // ビンゴ判定用配列
        let hitBox = new Array(25).fill(0);
        console.log("hitBox" + hitBox);

        // ビンゴの数字割り当て

        let bingoNumAry = new Array(25);
        for (i = 0; i < 25; i++) {
            if (i === 12) {
                bingoNumAry[12] = "Free";
            }
            else if (i < 5) {
                tempNum = Math.floor(Math.random() * (15 - 0)) + 0;
                if (bingoNumAry.includes(tempNum)) {
                    console.log(i + "回目　---------やり直し")
                    i--;
                } else {
                    bingoNumAry[i] = tempNum;
                    console.log(i + "回目　成功" + i + " <- " + tempNum)
                }
            }
            else if (i >= 5 && i < 10) {
                tempNum = Math.floor(Math.random() * (30 - 16)) + 16;
                if (bingoNumAry.includes(tempNum)) {
                    console.log(i + "回目　---------やり直し")
                    i--;
                } else {
                    bingoNumAry[i] = tempNum;
                    console.log(i + "回目　成功" + i + " <- " + tempNum)
                }
            }
            else if (i >= 10 && i < 15) {
                tempNum = Math.floor(Math.random() * (45 - 31)) + 31;
                if (bingoNumAry.includes(tempNum)) {
                    console.log(i + "回目　---------やり直し")
                    i--;
                } else {
                    bingoNumAry[i] = tempNum;
                    console.log(i + "回目　成功" + i + " <- " + tempNum)
                }
            }
            else if (i >= 15 && i < 20) {
                tempNum = Math.floor(Math.random() * (60 - 46)) + 46;
                if (bingoNumAry.includes(tempNum)) {
                    console.log(i + "回目　---------やり直し")
                    i--;
                } else {
                    bingoNumAry[i] = tempNum;
                    console.log(i + "回目　成功" + i + " <- " + tempNum)
                }
            }
            else if (i >= 20) {
                tempNum = Math.floor(Math.random() * (75 - 61)) + 61;
                if (bingoNumAry.includes(tempNum)) {
                    console.log(i + "回目　---------やり直し")
                    i--;
                } else {
                    bingoNumAry[i] = tempNum;
                    console.log(i + "回目　成功" + i + " <- " + tempNum)
                }
            }
        }
        console.log(bingoNumAry);

        // 番号表示　
        let boxNum = document.querySelectorAll(".box");
        console.log(boxNum);
        for (i = 0; 1 < 25; i++) {
            boxNum[i].textContent = bingoNumAry[i];
        }

        // 真ん中を取得状態に
        // hitBox[12] = 1;
        // boxNum[12].setAttribute("class",getBox);