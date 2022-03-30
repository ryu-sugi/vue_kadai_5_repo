// ---------------------------------
// 変数宣言
// ---------------------------------

// コンポーネントのルートノード
var app = document.querySelector('#app');
// 消費税率
var textRate = 0.08;

// ---------------------------------
// イベントハンドラの割り当て
// ---------------------------------

// ページの読み込み完了イベント
window.addEventListener('load', onPageLoad, false);
// 入力内容変更イベント (DVD仕上がり予定日)
app.querySelector('#delivery_date').addEventListener('change',onInputChanged, false);
// 入力内容変更イベント(BGM手配)
app.querySelector('#opt1').addEventListener('change',onInputChanged,false);
// 入力内容変更イベント(撮影)
app.querySelector('#opt2').addEventListener('change',onInputChanged,false);
// 入力内容変更イベント(DVD盤面印刷)
app.querySelector('#opt3').addEventListener('change',onInputChanged,false);
// 入力内容変更イベント(写真スキャニング)
app.querySelector('#opt4').addEventListener('change',onInputChanged,false);

// ---------------------------------
// 
// ---------------------------------

