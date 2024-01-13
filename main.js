const OMIKUJI = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"];

function Omikuji() {

  document.getElementById('omikuzi').style.display = 'block';
  // おみくじを表示

  const random = OMIKUJI[Math.floor(Math.random() * OMIKUJI.length)];
  // random変数にOMIKUJIで定義している配列をラムダムに入れる
  document.getElementById("omikuji").innerHTML = random;

  if (random === OMIKUJI[0]) {
    let text = ['GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!',];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else if (random === OMIKUJI[1]) {
    let text = ['git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・',
      'リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。'];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else if (random === OMIKUJI[2]) {
    let text = ['リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。',
      '開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。'];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else if (random === OMIKUJI[3]) {
    let text = ["リファクタリングに成功してプログラムが爆速に!!サクサク動いて気持ちいいーーー!!",
      "リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。"];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else if (random === OMIKUJI[4]) {
    let text = ["リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。",
      "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。"];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else if (random === OMIKUJI[5]) {
    let text = ["前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。",
      "リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。"];
    let textRandon = Math.floor(Math.random() * text.length);
    document.getElementById("comment").innerHTML = text[textRandon];
  } else {
    console.log('Error');
  }

}

const LANGUAGE = ["Ruby", "TypeScript", "JavaScript", "Python", "C#", "Java", "C++", "PHP"];
const DATABASE = ["Oracle Database", "DB2", "SQL Server", "PostgreSQL", "MySQL"];
const EDITOR = ["Vim", "Atom", "Visual Studio Code", "nano", "Emacs"];

function Item(){
  function Language() {
    const random = Math.floor(Math.random() * LANGUAGE.length);
    document.getElementById("language").innerHTML = LANGUAGE[random];
  }

  function Database() {
    const random = Math.floor(Math.random() * DATABASE.length);
    document.getElementById("database").innerHTML = DATABASE[random];
  }

  function Editor() {
    const random = Math.floor(Math.random() * EDITOR.length);
    document.getElementById("editor").innerHTML = EDITOR[random];
  }

  Language();
  Database();
  Editor();
}

function Hidden() {
  document.getElementById('omikuzi').style.display = 'none';
}