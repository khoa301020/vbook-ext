function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        var doc = response.html();
        var detail =
            '作者： ' +
            doc.select("#workAuthor-activityName a").text() + '<br>' +
            '連載： ' + doc.select(".widget-toc-workStatus span").text().replace(" ","・") + '<br>' +
            '評価ポイント： ' + doc.select("#workPoints").text() + '<br>' +
            '最終更新： ' + doc.select(".widget-toc-date time span").text();

        return Response.success({
            name: doc.select("#workTitle a").text(),
            cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/kakuyomu/cover.png',
            author: doc.select("#workAuthor-activityName a").text(),
            description: doc.select("#introduction").text(),
            detail: detail,
            host: 'https://kakuyomu.jp',
        });
    }
}