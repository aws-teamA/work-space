function Omikuji() {
  let omikuji = ["吉", "末吉", "凶"];
  let r = Math.floor(Math.random() * omikuji.length);//おみくじ分の数を作る
  document.getElementById("omikuji").innerHTML = omikuji[r];//結果をid="omikuji"に表示
  if (r === 0) {
    let kuji = ["リファクタリングに成功してプログラムが爆速に!!サクサク動いて気持ちいいーーー!!",
      "リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。"];
    let com = Math.floor(Math.random() * kuji.length);
    document.getElementById("comment").innerHTML = kuji[com];//吉
  } else if (r === 1) {
    let kuji = ["リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。",
      "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。"];
    let com = Math.floor(Math.random() * kuji.length);
    document.getElementById("comment").innerHTML = kuji[com];//末吉
  } else {
    let kuji = ["前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。",
      "リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。"];
    let com = Math.floor(Math.random() * kuji.length);
    document.getElementById("comment").innerHTML = kuji[com];//凶
  }

}

function Language() {
  let language = ["Ruby", "TypeScript", "JavaScript", "Python", "C#", "Java", "C++", "PHP"];
  let r = Math.floor(Math.random() * language.length);//言語分の数を作る
  document.getElementById("language").innerHTML = language[r];//結果をid="language"に表示
}

function Database() {
  let database = ["Oracle Database", "DB2", "SQL Server", "PostgreSQL", "MySQL"];
  let r = Math.floor(Math.random() * database.length);//データベース分の数を作る
  document.getElementById("database").innerHTML = database[r];//結果をid="database"に表示
}

function Editor() {
  let editor = ["Vim", "Atom", "Visual Studio Code", "nano", "Emacs"];
  let r = Math.floor(Math.random() * editor.length);//エディター分の数を作る
  document.getElementById("editor").innerHTML = editor[r];//結果をid="editor"に表示
}


// koga
// function foo() {
//   omikuji();
//   Language();
//   Database();
//   Editor();
// }

const OMIKUJI = ["大吉", "中吉", "小吉"];




function Omikuji() {

  const random = OMIKUJI[Math.floor(Math.random() * OMIKUJI.length)];
  // random変数にOMIKUJIで定義している配列をラムダムに入れる

  if (random === OMIKUJI[0]) {
    let text = ['GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!',];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else if (OMIKUJI[1]) {
    let text = ['git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・',
      'リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。'];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else if (OMIKUJI[2]) {
    let text = ['リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。',
      '開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。'];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else {
    console.log('Error');
  }

}

// const LANGUAGE = ["Ruby", "TypeScript", "JavaScript", "Python", "C#", "Java", "C++", "PHP"];
// const DATABASE = ["Oracle Database", "DB2", "SQL Server", "PostgreSQL", "MySQL"];
// const EDITOR = ["Vim", "Atom", "Visual Studio Code", "nano", "Emacs"];



function language() {
  const random = Math.floor(Math.random() * LANGUAGE.length);
  document.getElementById("language").innerHTML = language[random];
}


function database() {
  const random = Math.floor(Math.random() * DATABASE.length);
  document.getElementById("language").innerHTML = database[random];
}

function editor() {
  const random = Math.floor(Math.random() * EDITOR.length);
  document.getElementById("language").innerHTML = editor[random];
}


// // モーダルウィンドウ
// // モーダルウィンドウを開くボタン
// var openModalBtn = document.getElementById("openModalBtn");

// // モーダルウィンドウ
// var modal = document.getElementById("myModal");

// // モーダルウィンドウを閉じるボタン
// var closeModalBtn = document.getElementById("closeModalBtn");

// // ボタンがクリックされたときの処理
// openModalBtn.onclick = function () {
//   modal.style.display = "block";
// };

// // モーダルウィンドウの閉じるボタンがクリックされたときの処理
// closeModalBtn.onclick = function () {
//   modal.style.display = "none";
// };

