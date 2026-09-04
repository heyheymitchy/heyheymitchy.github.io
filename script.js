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

const header = document.getElementById("header");

if (!header) {
return;
}

fetch("header.html")

```
.then(function (response) {

  if (!response.ok) {
    throw new Error(
      "header.html の読み込みに失敗しました。"
    );
  }

  return response.text();

})

.then(function (html) {

  header.innerHTML = html;

  setupLanguageButtons();

  applyLanguage();

  loadFooter();

})

.catch(function (error) {

  console.error(error);

  header.innerHTML =
    '<div class="load-error">' +
    'header.html を読み込めませんでした。' +
    '</div>';

});
```

}

/* =========================================================
フッター読み込み
========================================================= */

function loadFooter() {

const footer = document.getElementById("footer");

if (!footer) {
return;
}

fetch("footer.html")

```
.then(function (response) {

  if (!response.ok) {
    throw new Error(
      "footer.html の読み込みに失敗しました。"
    );
  }

  return response.text();

})

.then(function (html) {

  footer.innerHTML = html;

  applyLanguage();

})

.catch(function (error) {

  console.error(error);

  footer.innerHTML =
    '<div class="load-error">' +
    'footer.html を読み込めませんでした。' +
    '</div>';

});
```

}

/* =========================================================
言語切り替えボタン
========================================================= */

function setupLanguageButtons() {

const buttons =
document.querySelectorAll(".lang-btn");

buttons.forEach(function (button) {

```
button.addEventListener("click", function () {

  const lang =
    this.getAttribute("data-lang");


  /* 言語を保存 */

  sessionStorage.setItem(
    "lang",
    lang
  );


  /* 表示変更 */

  applyLanguage();

});
```

});

}

/* =========================================================
言語表示
========================================================= */

function applyLanguage() {

const lang =
sessionStorage.getItem("lang") || "ja";

/* -----------------------------------------
日本語
----------------------------------------- */

document
.querySelectorAll(".ja")
.forEach(function (element) {

```
  element.style.display =
    (lang === "ja") ? "" : "none";

});
```

/* -----------------------------------------
英語
----------------------------------------- */

document
.querySelectorAll(".en")
.forEach(function (element) {

```
  element.style.display =
    (lang === "en") ? "" : "none";

});
```

/* -----------------------------------------
トップ画像
----------------------------------------- */

const jaMain =
document.querySelector("main.main.ja");

const enMain =
document.querySelector("main.main.en");

if (jaMain) {

```
jaMain.style.display =
  (lang === "ja") ? "" : "none";
```

}

if (enMain) {

```
enMain.style.display =
  (lang === "en") ? "" : "none";
```

}

}
