/* ============================================================
   レポート一覧ページ（report/index.html）専用スクリプト
   ============================================================
   assets/data/reports.json を読み込んで、カード一覧を描画する。
   ============================================================ */

(function () {
    var list = document.getElementById('report-list');
    var emptyMessage = document.getElementById('report-list-empty');

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

            // date（YYYY-MM-DD）の新しい順に並び替える。JSON内の記載順は問わない。
            reports.sort(function (a, b) {
                return String(b.date).localeCompare(String(a.date));
            });

            reports.forEach(function (report) {
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
                list.appendChild(li);
            });
        })
        .catch(function (err) {
            emptyMessage.hidden = false;
            emptyMessage.textContent = 'レポート一覧の読み込みに失敗しました。';
            console.error(err);
        });
})();