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

      /* header.html を表示 */

      header.innerHTML = html;


      /* 言語ボタンを設定 */

      setupLanguageButtons();


      /* 言語表示を設定 */

      applyLanguage();


      /* footer.html を読み込む */

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

      /* footer.html を表示 */

      footer.innerHTML = html;


      /* 言語表示を設定 */

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
         言語表示を変更
         ----------------------------------------- */

      applyLanguage();

    });

  });

}


/* =========================================================
   言語表示
   ========================================================= */

function applyLanguage() {


  /* -----------------------------------------
     現在の言語を取得

     保存されていなければ日本語
     ----------------------------------------- */

  const lang =
    sessionStorage.getItem("lang") || "ja";


  /* =====================================================
     日本語
     ===================================================== */

  document
    .querySelectorAll(".ja")
    .forEach(function (element) {

      if (lang === "ja") {

        /*
         * 日本語を表示
         *
         * style.css の影響を受けないように
         * display を直接指定する
         */

        if (element.classList.contains("menu")) {

          element.style.setProperty(
            "display",
            "flex",
            "important"
          );

        } else {

          element.style.setProperty(
            "display",
            "block",
            "important"
          );

        }

        element.removeAttribute("hidden");

      } else {

        /*
         * 日本語を非表示
         */

        element.style.setProperty(
          "display",
          "none",
          "important"
        );

        element.setAttribute(
          "hidden",
          ""
        );

      }

    });


  /* =====================================================
     英語
     ===================================================== */

  document
    .querySelectorAll(".en")
    .forEach(function (element) {

      if (lang === "en") {

        /*
         * 英語を表示
         *
         * .menu は flex
         * それ以外は block
         */

        if (element.classList.contains("menu")) {

          element.style.setProperty(
            "display",
            "flex",
            "important"
          );

        } else {

          element.style.setProperty(
            "display",
            "block",
            "important"
          );

        }

        element.removeAttribute("hidden");

      } else {

        /*
         * 英語を非表示
         */

        element.style.setProperty(
          "display",
          "none",
          "important"
        );

        element.setAttribute(
          "hidden",
          ""
        );

      }

    });


  /* =====================================================
     言語ボタン

     日本語・English は
     2つとも常に表示する

     ここでは変更しない
     ===================================================== */

}