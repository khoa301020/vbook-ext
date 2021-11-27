function execute(url) {
    const doc = Http.get(url).html();
    var allChap = doc.select(".novel_sublist2 a")
    const data = [];
    if (allChap) {
        for (var i = 0;i < allChap.size(); i++) {
            var chap = allChap.get(i);
            data.push({
                name: chap.select("a").text(),
                url: chap.attr("href"),
                host: "http://ncode.syosetu.com"
            })
        }
    } else {
        data.push({
            name: doc.select(".novel_title").text(),
            url: url,
            host: ""
        })
    }
    return Response.success(data);
}