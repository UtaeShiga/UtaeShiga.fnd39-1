'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/*
// ボタンと非表示にする要素を取得
const toggleButton = document.getElementById('toggleButton');
const toggleElement = document.getElementById('toggleElement');

// ボタンクリック時のイベントリスナーを設定
toggleButton.addEventListener('click', () => {
  // 要素の表示状態を切り替える
  if (toggleElement.style.display === 'none' || toggleElement.style.display === '') {
    toggleElement.style.display = 'block';
  } else {
    toggleElement.style.display = 'none';
  }
});
*/

document.getElementById("Button").addEventListener("click", function () {
  const buleArea = document.querySelector(".blue");

  // ワニの絵文字を作成
  const crocodile = document.createElement("span");
  crocodile.textContent = "③へなちょこプログラマー🐊";

  // 青いエリアに追加
  buleArea.appendChild(crocodile);
});


// document.getElementById("toggleButton").addEventListener("click", function () {
//   const buleArea = document.querySelector(".bule");
//   const input = document.getElementById(".text");

//   // buleエリアを初期化（必要なら）
//   buleArea.innerHTML = "";

//   // 数値が有効かチェック
//   if (!isNaN(parseInt(input.value, 10)) && parseInt(input.value, 10) > 0) {
//     for (let i = 0; i < parseInt(input.value, 10); i++) {
//       const crocodile = document.createElement("span");
//       crocodile.textContent = "ワニ🐊";
//       buleArea.appendChild(crocodile);
//     }
//   } else {
//     buleArea.textContent = "有効な数値を入力してください。";
//   }
// });

// // ボタンがclickされたら、テキストの数のワニをブルーエリアに表示

