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
// イベントハンドラ
// ---------------------------------

// ページの読み込みが完了したとき呼び出されるイベントハンドラ
function onPageLoad(event) {
  // 挙式に2ヶ月後の日付を設定
  // DVD仕上がり予定日に、挙式日の1週間前の日付を設定
  // DVD仕上がり予定日に翌日以降しか入力できないようにする
  // フォームの表示を更新する
  updateForm();
}

// 入力内容を変更したとき呼び出されるイベントハンドラ
function onInputChanged(event) {
  // フォームの表示を更新する
  updateForm();
}

// ---------------------------------
// 関数
// ---------------------------------

// 金額の表示を更新する関数
function updateForm() {
  // 金額を再計算
  // 表示を更新
}

// ページ読み込みが完了したとき呼び出されるイベントはのdら
function onPageLoad(event) {
  // フォームコントロールを取得
  var wedding_date = app.querySelector('#wedding_date'); //挙式日
  var delivery_date = app.querySelector('#delivery_date'); //DVD仕上がり予定日
  // 今日の日付を取得
  var dt = new Date();
  // 挙式日に2ヶ月後の日付を設定
  dt.setMonth(dt.getMonth() + 2);
  wedding_date.value = FormDate(dt);
  // DVD仕上がり予定日に、挙式日の1週間前を設定
  dt.setDate(dt.getDate() - 7);
  delivery_date.value = FormDate(dt);
  // DVD仕上がり予定日に翌日以降しか入力できないようにする
  delivery_date.setAttribute('min',tommorow());
  // フォームの表示を更新する
  updateForm();
}

// 入力内容を変更したとき呼び出されるイベントハンドラ
function onInputChanged(event) {
  // フォームの表示を更新する
  updateForm();
}

// ---------------------------------
// 関数
// ---------------------------------

// 日付をYYY-MM-DDの書式で返すメソッド
function formDate(dt) {
  var y = dt.getFullYear();
  var m = ('00' + (dt.getMonth()+1)).slice(-2);
  var d = ('00' + dt.getDate()).slice(-2);
  return (y + '-' + m +  '-' + d );
}

// 明日の日付をYYY-MM-DDの書式で返す関数
function tommorow() {
  var dt = new Date();
  dt.setDate(dt.getDate() + 1);
  return formDate(dt);
}

// 金額の表示を更新する関数
function updateForm() {
  // 金額を再計算
  // 表示を更新
}

