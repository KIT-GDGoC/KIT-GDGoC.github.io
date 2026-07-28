/* ============================================================
   レポート一覧ページ（report/index.html）専用スクリプト
   ============================================================
   assets/data/reports.json を読み込み、年ごとにグループ化して
   セクション分けで描画する。あわせて、年を素早く移動できる
   クイックナビ（ピル型）をヒーロー直下に生成する。
   ============================================================ */

(function () {
    var yearNav = document.getElementById('year-nav');
    var container = document.getElementById('report-groups');
    var emptyMessage = document.getElementById('report-list-empty');

    // 目次(TOC)と同じ考え方：sticky なナビの高さ分だけ、
    // アンカー着地位置とハイライト判定の基準線を揃えておく。
    var SCROLL_OFFSET = 64;

    function buildReportCard(report) {
        var li = document.createElement('li');

        var card = document.createElement('div');
        card.className = 'report-card';

        var a = document.createElement('a');
        a.href = report.href;

        var dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        dateSpan.textContent = String(report.date).replace(/-/g, '.');

        var h2 = document.createElement('h2');
        h2.textContent = report.title;

        var excerpt = document.createElement('p');
        excerpt.className = 'excerpt';
        excerpt.textContent = report.excerpt;

        var readMore = document.createElement('span');
        readMore.className = 'read-more';
        readMore.textContent = '続きを読む →';

        a.appendChild(dateSpan);
        a.appendChild(h2);
        a.appendChild(excerpt);
        a.appendChild(readMore);
        card.appendChild(a);
        li.appendChild(card);
        return li;
    }

    fetch('../assets/data/reports.json')
        .then(function (res) {
            if (!res.ok) throw new Error('reports.json の取得に失敗しました');
            return res.json();
        })
        .then(function (reports) {
            if (!Array.isArray(reports) || reports.length === 0) {
                emptyMessage.hidden = false;
                return;
            }

            // date（YYYY-MM-DD）の新しい順に並び替える
            reports.sort(function (a, b) {
                return String(b.date).localeCompare(String(a.date));
            });

            // 年ごとにグループ化する（新しい年が先頭に来る順序を維持）
            var years = [];
            var groups = {};
            reports.forEach(function (report) {
                var year = String(report.date).slice(0, 4);
                if (!groups[year]) {
                    groups[year] = [];
                    years.push(year);
                }
                groups[year].push(report);
            });

            // 年セクション＋カードを描画
            years.forEach(function (year) {
                var section = document.createElement('section');
                section.className = 'year-group';
                section.id = 'year-' + year;

                var heading = document.createElement('h2');
                heading.innerHTML = year + '年 <span class="count">(' + groups[year].length + '件)</span>';
                section.appendChild(heading);

                var ul = document.createElement('ul');
                ul.className = 'report-list';
                groups[year].forEach(function (report) {
                    ul.appendChild(buildReportCard(report));
                });
                section.appendChild(ul);

                container.appendChild(section);
            });

            // 年が2つ以上あるときだけ、クイックナビを表示する意味がある
            if (years.length > 1) {
                years.forEach(function (year, index) {
                    var link = document.createElement('a');
                    link.href = '#year-' + year;
                    link.textContent = year;
                    if (index === 0) link.classList.add('active');
                    yearNav.appendChild(link);
                });
                yearNav.hidden = false;
                setupYearScrollSpy(years);
            }
        })
        .catch(function (err) {
            emptyMessage.hidden = false;
            emptyMessage.textContent = 'レポート一覧の読み込みに失敗しました。';
            console.error(err);
        });

    function setupYearScrollSpy(years) {
        var links = Array.prototype.slice.call(yearNav.querySelectorAll('a'));
        var sections = years.map(function (year) {
            return document.getElementById('year-' + year);
        });

        function updateActive() {
            var refY = SCROLL_OFFSET + 8;
            var activeIndex = 0;
            for (var i = 0; i < sections.length; i++) {
                var el = sections[i];
                if (!el) continue;
                if (el.getBoundingClientRect().top <= refY) activeIndex = i;
            }
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
    }
})();