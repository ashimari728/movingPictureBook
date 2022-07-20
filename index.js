//要素を参照する変数
//発火/消火に使うフラグ
var flag = 0;

//ボタンを押した時に呼び出される関数
function fire() {
  var honoo = document.getElementById("image");
  //発火
  if (flag == 0) {
    honoo.classList.add("ignite");
    flag = 1;
  }
  //消火
  else {
    honoo.classList.remove("ignite");
    flag = 0;
  }
}

var flag1 = 0;

function fire1() {
  var honoo = document.getElementById("image1");
  //発火
  if (flag1 == 0) {
    honoo.classList.add("ignite");
    flag1 = 1;
  }
  //消火
  else {
    honoo.classList.remove("ignite");
    flag1 = 0;
  }
}
