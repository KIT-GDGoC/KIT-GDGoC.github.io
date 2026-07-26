/* ============================================================
   個別イベントレポートページ共通スクリプト
   ============================================================
   目次(TOC)のスクロール連動ハイライトを行う。
   report/_template.html および report/YYYYMMDD.html（コピー先の
   各実ファイル）から共通で読み込む。
   ============================================================ */

(function () {
    // ハッシュリンク（#から始まるもの）だけを対象にする。
    // 通常のURL（https://... など）が紛れていても querySelector に渡してエラーにならないようにする。
    var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'))
        .filter(function (a) {
            var href = a.getAttribute('href') || '';
            return href.charAt(0) === '#' && href.length > 1;
        });
    var sections = links.map(function (a) {
        return document.querySelector(a.getAttribute('href'));
    });

    // 「TOCのすぐ下のライン」を、どのセクションの見出しが最後に通過したかで
    // アクティブなセクションを判定する。
    // （画面中央の帯との交差判定だと、「はじめに」のように中身が短いセクションが
    //   一度も帯に重ならないまま通り過ぎてしまい、正しく判定できないため）
    //
    // 基準線の値は report.css の scroll-margin-top と揃えておくこと。
    // ここがズレていると、リンククリックで着地した直後に「まだ基準線を
    // 通過していない」と判定され、ハイライトが一切更新されなくなる。
    var SCROLL_OFFSET = 88; // report.css の section[id] / footer[id] の scroll-margin-top と同じ値

    function updateActive() {
        var refY = SCROLL_OFFSET + 8;
        var activeIndex = -1;
        for (var i = 0; i < sections.length; i++) {
            var el = sections[i];
            if (!el) continue;
            if (el.getBoundingClientRect().top <= refY) activeIndex = i;
        }
        // まだどのセクションにも到達していない（ヒーローを見ている）間は先頭を表示
        if (activeIndex === -1) activeIndex = 0;

        links.forEach(function (a) { a.classList.remove('active'); });
        if (links[activeIndex]) links[activeIndex].classList.add('active');
    }

    var ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            updateActive();
            ticking = false;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateActive();
})();