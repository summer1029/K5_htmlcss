document.addEventListener("DOMContentLoaded", () => {
    // 방법 3
    const handleSelChange = (sel1, sel2, unit1, unit2) => {
        unit1.innerHTML = sel1.value;

        if(sel1.value == '℃') {
            sel2.value = '℉';
            unit2.innerHTML = "℉";
        }
        else {
            sel2.value = '℃';
            unit2.innerHTML = "℃"
        }
    }

    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const unit1 = document.querySelector("#unit1");
    const unit2 = document.querySelector("#unit2");

    // select box 제어
    sel1.addEventListener("change", () => {
        handleSelChange(sel1, sel2, unit1, unit2);

        // console.log(e.target.value);

        // 방법 2
        // unit1.innerHTML = e.target.value;

        // 방법 1
        // if(e.target.value == 'c') unit1.innerHTML = '℃';
        // else unit1.innerHTML = '℉';

        // 방법 2
        // if(e.target.value == '℃') {
        //     sel2.value = '℉';
        //     unit2.innerHTML = "℉";
        // }
        // else {
        //     sel2.value = '℃';
        //     unit2.innerHTML = "℃"
        // }

    });

    sel2.addEventListener("change", () => {
        handleSelChange(sel2, sel1, unit2, unit1)
    });

    // text box 제어
    txt1.addEventListener("change", () => {
        if (sel1.value == '℃') { // 섭씨 온도를 화씨 온도로 변환
            txt2.value = (parseInt(txt1.value * 9/5 + 32)).toFixed(4);
        }
        else { // 화씨 온도를 섭씨 온도로 변환
            txt2.value = (parseInt(txt1.value - 32) * 5/9).toFixed(4);
        }
    })
});