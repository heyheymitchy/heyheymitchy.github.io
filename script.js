/* =========================================================
   わくわくプログラミング工房　平兵道
   共通JavaScript
   script.js
   ========================================================= */


/* =========================================================
   ページ読み込み
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  loadHeader();

});


/* =========================================================
   ヘッダー読み込み
   ========================================================= */

function loadHeader() {

  const header =
    document.getElementById("header");


  if (!header) {

    return;

  }


  fetch("header.html")

    .then(function (response) {

      if (!response.ok) {

        throw new Error(
          "header.html の読み込みに失敗しました。"
        );

      }

      return response.text();

    })


    .then(function (html) {

      /* ヘッダーを表示 */
      header.innerHTML = html;


      /* 言語ボタン設定 */
      setupLanguageButtons();


      /* 現在の言語を反映 */
      applyLanguage();


      /* フッター読み込み */
      loadFooter();

    })


    .catch(function (error) {

      console.error(error);


      header.innerHTML =
        '<div class="load-error">' +
        'header.html を読み込めませんでした。' +
        '</div>';

    });

}


/* =========================================================
   フッター読み込み
   ========================================================= */

function loadFooter() {

  const footer =
    document.getElementById("footer");


  if (!footer) {

    return;

  }


  fetch("footer.html")

    .then(function (response) {

      if (!response.ok) {

        throw new Error(
          "footer.html の読み込みに失敗しました。"
        );

      }

      return response.text();

    })


    .then(function (html) {

      /* フッターを表示 */
      footer.innerHTML = html;


      /* 現在の言語を反映 */
      applyLanguage();

    })


    .catch(function (error) {

      console.error(error);


      footer.innerHTML =
        '<div class="load-error">' +
        'footer.html を読み込めませんでした。' +
        '</div>';

    });

}


/* =========================================================
   言語切り替えボタン
   ========================================================= */

function setupLanguageButtons() {

  const buttons =
    document.querySelectorAll(".lang-btn");


  buttons.forEach(function (button) {


    button.addEventListener("click", function () {


      /* -----------------------------------------
         選択された言語を取得
         ----------------------------------------- */

      const lang =
        this.getAttribute("data-lang");


      /* -----------------------------------------
         言語を保存
         ----------------------------------------- */

      sessionStorage.setItem(
        "lang",
        lang
      );


      /* -----------------------------------------
         表示変更
         ----------------------------------------- */

      applyLanguage();


    });

  });

}


/* =========================================================
   言語表示
   ========================================================= */

function applyLanguage() {


  /* =====================================================
     現在の言語を取得
     保存されていなければ日本語
     ===================================================== */

  const lang =
    sessionStorage.getItem("lang") || "ja";


  /* =====================================================
     日本語コンテンツ
     ===================================================== */

  document
    .querySelectorAll(".ja")
    .forEach(function (element) {

      element.hidden =
        (lang !== "ja");

    });


  /* =====================================================
     英語コンテンツ
     ===================================================== */

  document
    .querySelectorAll(".en")
    .forEach(function (element) {

      element.hidden =
        (lang !== "en");

    });


  /* =====================================================
     言語切り替えボタン
     
     選択した言語のボタンだけ表示する
     ===================================================== */

  document
    .querySelectorAll(".lang-btn")
    .forEach(function (button) {


      /* ボタンに設定された言語 */
      const buttonLang =
        button.getAttribute("data-lang");


      /* -----------------------------------------
         現在選択している言語だけ表示
         それ以外は非表示
         ----------------------------------------- */

      button.hidden =
        (buttonLang !== lang);


    });


}