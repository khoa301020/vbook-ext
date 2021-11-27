function execute(key, page) {
  if (!page) page = '1';

  var doc = Http.get('https://yomou.syosetu.com/search.php?&search_type=novel&order_former=search&order=new&notnizi=1')
    .params({ word: key, p: page })
    .html();
  if (doc) {
    var el = doc.select('.searchkekka_box');
    var novelList = [];
    var next = doc.select('.pager b +a').text();

    for (var i = 0; i < el.size(); i++) {
      var e = el.get(i);
      novelList.push({
        name: e.select('.novel_h a').text(),
        link: e.select('.novel_h a').attr('href'),
        description: e.select('.left').text(),
        cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/syosetu/not_found.png',
        host: '',
      });
    }

    return Response.success(novelList, next);
  }
  return null;
}
