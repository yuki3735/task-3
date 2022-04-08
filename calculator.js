let pointFlg ="false";//小数点の確認用
let checkNum ="";//文字か数字かの確認用
let disVal = document.querySelector("input");

function element (set) {
    //最初の入力が０または.の時
    if((disVal.value =="" && set =="0") || (disVal.value =="" && set ==".") || (disVal.value =="" && set =="00")){
        disVal.value +="0.";
    //小数点を使えないようにする 
        pointFlg ="true";
    //一つの項に小数点が複数つかないように
    }else if(pointFlg =="true" && set =="."){
        set ="";
    //文字列の横に小数点がこないように
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
    //マイナス以外は初手禁止
    if(disVal ==""&& set !="-"){
        return;
    //連続した演算子の禁止
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
    //小数点第8桁まで表示
        let keta =100000000;
        let total =eval(disVal.value);
    //整数にできる部分を整数にして、それ以下は四捨五入にする
        total =Math.round(total*keta)/keta;
        disVal.value =total;
    }catch(error) {
        disVal.value ="error";
    }
}
