function execute(url) {
  var doc = Http.get(url).html();
  if (doc) {
    var el = doc.select('.ranking_list');
    var novelList = [];

    for (var i = 0; i < el.size(); i++) {
      var e = el.get(i);
      novelList.push({
        name: e.select('.rank_h a').text(),
        link: e.select('.rank_h a').attr('href'),
        description: e.select('.ranking_list .rank_table .point').text(),
        cover: 'https://cdn.discordapp.com/attachments/694132681994272778/914069250262569000/default.png',
        host: '',
      });
    }

    return Response.success(novelList);
  }

  return null;
}
