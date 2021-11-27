function execute(url) {
  var doc = Http.get(url).html();
  if (doc) {    

    return Response.success({
      name: doc.select('.series-name').text(),
      cover: 'https://cdn.discordapp.com/attachments/694132681994272778/914069250262569000/default.png',
      host: 'https://ncode.syosetu.com',
      author: doc.select('.novel_writername a').text(),
      description: doc.select('div#novel_ex').html(),
    });
  }
}
