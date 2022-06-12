function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(url, {
        method: "GET",
        queries: {
            page: page
        }
    });

    if (response.ok) {
        let doc = response.html();
        let next = doc.select(".widget-pagerNext a").attr("href").match(/\d+$/);

        let novelList = [];
        doc.select(".widget-work .float-left").forEach(e => {
            let points = e.select(".widget-workCard-data .widget-workCard-meta .widget-workCard-reviewPoints").text();
            let status = e.select(".widget-workCard-data .widget-workCard-meta .widget-workCard-statusLabel").text();
            let chapters = e.select(".widget-workCard-data .widget-workCard-meta .widget-workCard-episodeCount").text();
            let desc = points + "・" + chapters + "\n" + status;
            novelList.push({
                name: e.select(".widget-workCard-title a").text(),
                link: e.select(".widget-workCard-title a").attr("href"),
                description: desc,
                cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/kakuyomu/cover.png',
                host: 'https://kakuyomu.jp/',
            });
        });

        return Response.success(novelList, next);
    }

    return null;
}