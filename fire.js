//要素を参照する変数
//発火/消火に使うフラグ
var flag1 = 0;

//ボタンを押した時に呼び出される関数
function fire1() {
  var honoo1 = document.getElementById("image1");
  //発火
  if (flag1 == 0) {
    honoo1.classList.add("ignite");
    flag1 = 1;
  }
  //消火
  else {
    honoo1.classList.remove("ignite");
    flag1 = 0;
  }
}
