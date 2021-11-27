function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {
        var list = [];
        var chapters = doc.select("dl.novel_sublist2");
        for (var i = 0; i < chapters.size(); i++) {
            var chapter = chapters.get(i);
            list.push({
                name: chapter.select(".subtitle a").text(),
                url: chapter.select(".subtitle a").attr("href"),
                host: "https://ncode.syosetu.com"
            });
        }
        return Response.success(list)
    }
}