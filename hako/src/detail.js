function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        var cover = doc.select(".series-cover .img-in-ratio").first().attr("style").match(/url.'(.*?)'/);
        if (cover) cover = cover[1]; else cover = '';

        var lastUpdate = doc.select(".timeago").first().attr("title");

        return Response.success({
            name: doc.select(".series-name").text(),
            cover: cover,
            host: "https://ln.hako.vn",
            author: doc.select(".series-information .info-item a").first().text(),
            description: doc.select(".summary-content").html(),
            detail: doc.select(".series-information .info-item").html()
                    .replace(/<\/a>/g, "<\/a><br>") + "Last update: " + lastUpdate,
            ongoing: doc.select(".series-information .info-item").html().indexOf("truyen-dang-tien-hanh") > 0
        });

    }
    return null;
}