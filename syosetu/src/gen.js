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
        cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/syosetu/cover.jpg',
        host: '',
      });
    }

    return Response.success(novelList);
  }

  return null;
}
