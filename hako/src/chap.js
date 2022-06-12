function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let note_body_count = 1;
        let anchor_count = 1;
        let doc = response.html();
        doc.select("p.none").remove();
        doc.select('img[src*="/images/banners/"]').remove();
        doc.select("p:contains(Tham gia Discord Hako tại)").remove();
        // Get info part
        info = "<p>__________Chapter info__________</p><p>- " + doc.select("h6").html().replace(/-.L/g,"</p><p>- L").replace(/time>/g,"time></p><p>") + "</p><p>__________Chapter info__________</p>\n<p>󠇰 </p>\n";
        //Clean duplicated notes
        content =  info + doc.select("div#chapter-content").html().replace(/<span class=\"[^"]*?content long[^"]*?">(.*?)<\/span>\n/g, "").replace(/<div style=\"display: none\">\n/g, "").replace(/] <\/a>\n/g,"] <\/a>");
        //Serialize notes        
        content = content.replace(/\[note.*?\]/g, (match, $1) => {
            return "<a href=\"#anchor_note" + note_body_count + "\" id=\"note" + note_body_count + "\" >＜" + note_body_count++ + "＞  <\/a>";
        }).replace(/<a[^>]*?\>\[L[^>]*?\>/g, (match, $1) => {
            return "<a href=\"#note" + anchor_count + "\" id=\"anchor_note" + anchor_count + "\" >＜" + anchor_count++ + "＞  <\/a>";
        });
        return Response.success(content.replace(/<p id=\"\d+\">/g, "<p>").replace(/\&nbsp;/g, ""));
    }
    return null;
}