function execute(url) {
    const doc = fetch(url).html();
    var allChap = doc.select('.novel_sublist2 a,.chapter_title');
    const data = [];
    var chapterName = ""
    // for (var i = 0; i < allChap.size(); i++) {
    //     var chap = allChap.get(i);

    //     data.push({
    //         name: chap.select('a').text(),
    //         url: chap.attr('href'),
    //         host: 'http://ncode.syosetu.com',
    //     });
    // }
    for (var i = 0; i < allChap.size(); i++) {
        var chap = allChap.get(i);
        if (chap.select('a').text() == "") {
            chapterName = "【" + chap.text() + "】\n\n";
        } else {
            data.push({
                name: chapterName + chap.select('a').text(),
                url: chap.attr('href'),
                host: 'http://ncode.syosetu.com',
            });
            chapterName = "";
        }
    }
    if (data.length == 0) {
        data.push({
            name: '「短編」・「' + doc.select('.novel_title').text() + '」',
            url: url,
            host: '',
        });
    }
    return Response.success(data);
}
