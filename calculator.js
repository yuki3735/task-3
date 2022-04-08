let pointFlg ="false";//小数点の確認用
let checkNum ="";//
let disVal = document.querySelector("input");

function element (set) {
    //最初の入力が０または.の時
    if((disVal.value =="" && set =="0") || (disVal.value =="" && set ==".") || (disVal.value =="" && set =="00")){
        disVal.value +="0.";
        pointFlg ="true";//小数点を使えないようにする
    }else if(pointFlg =="true" && set =="."){
        set ="";
    }else {
        checkNum =isNaN(disVal.value.slice(-1));
        if((checkNum ==true) && (set ==".")){
            return;
        }else {
        disVal.value += set;
        }
    }
}

function calc(set) {
    if(disVal ==""&& set !="-"){
        return;
    }else {
        checkNum =isNaN(disVal.value.slice(-1));
        if(checkNum ==true){
        return;
        }else {
            disVal.value += set;
            pointFlg ="false";
        } 
    }
}

function reset(set) {
    disVal.value ="";
    pointFlg ="false";
}

function equal(set) {
    try{
        let keta =100000000;
        let total =eval(disVal.value);
        total =Math.round(total*keta)/keta;
        disVal.value =total;
    }catch(error) {
        disVal.value ="error";
    }
}