let pointFlg ="false";//小数点の確認用
let checkNum ="";//文字か数字かの確認用
let disVal = document.querySelector("input");
let zeroFlg =["+0","-0","*0","/0"]
function element (set) {
    //最初の入力が０または.の時
    if(((disVal.value =="") && (pointFlg =="false") && (set ==".")) || ((disVal.value =="") && ((set =="00") ||(set =="0")))){
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
    //小数点を入力したら小数点を押せないようにする
        }else if(set =="."){
            disVal.value += set;
            pointFlg ="true";
    //演算子の次に００が来る場合、０に書き換え
        }else if((checkNum ==true) && ((set =="00")) && (disVal.value.slice(-1) !=".")){
            disVal.value += "0";
    // 演算子の次に０を入力した、さらに次の入力が数値の場合、少数にする
        }else if((pointFlg =="false") && (zeroFlg.includes(disVal.value.slice(-2)))){
            disVal.value += "." + set;
            pointFlg ="true";
        }else {
        disVal.value += set;
        }
    }
}

function calc(set) {
    //マイナス以外は初手禁止
    if((disVal.value ==""&& set !="-")||(disVal.value =="-")){
        return;
    //演算子を連続で入力する度に上書き
    }else {
        checkNum =isNaN(disVal.value.slice(-1));
        if(checkNum ==true){
        disVal.value =disVal.value.slice(0,-1) + set;
        pointFlg ="false"
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
