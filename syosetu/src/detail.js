function execute(url) {
  var doc = Http.get(url).html();
    return Response.success({
      name: doc.select('.novel_title').text(),
      cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/syosetu/not_found.png',
      author: doc.select('.novel_writername a').text(),
      description: doc.select('div#novel_ex').html(),
      detail: "作者：" + doc.select('.novel_writername a').text(),
      host: "https://ncode.syosetu.com",
    });
}