function execute(url) {
    const doc = Http.get(url).html();
    var allChap = doc.select(".novel_sublist2 a")
    const data = [];
    for (var i = 0;i < allChap.size(); i++) {
        var chap = allChap.get(i);
        data.push({
            name: chap.select("a").text(),
            url: chap.attr("href"),
            host: "http://ncode.syosetu.com"
        })
    }

    return Response.success(data);
}