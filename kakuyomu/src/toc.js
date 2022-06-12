function execute(url) {
    const doc = fetch(url).html();
    var allChap = doc.select('.widget-toc-episode,.widget-toc-chapter');
    const data = [];
    let chapterName = "";
    for (var i = 0; i < allChap.size(); i++) {
        var chap = allChap.get(i);
        if (chap.select('a span').text() == "") {
            chapterName = "【" + chap.select(".widget-toc-chapter span").text() + "】\n\n";
        } else {
            data.push({
                name: chapterName + chap.select('a span').text(),
                url: chap.select('a').attr('href'),
                host: 'https://kakuyomu.jp',
            });
            chapterName = "";
        }
    }
    return Response.success(data);
}

