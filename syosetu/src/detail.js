// function execute(url) {
//   var doc = Http.get(url).html();
//     return Response.success({
//       name: doc.select('.series-name').text(),
//       cover: 'https://cdn.discordapp.com/attachments/694132681994272778/914069250262569000/default.png',
//       host: 'https://ncode.syosetu.com',
//       author: doc.select('.novel_writername a').text(),
//       description: doc.select('div#novel_ex').html(),
//       detail: "作者：" + doc.select('.novel_writername a').text(),
//     });
// }
function execute(url) {
  const doc = Http.get(url).html();
  return Response.success({
      name: doc.select(".novel_title").first().text(),
      cover: doc.select(".book img").first().attr('src') || 'https://github.com/nhocconsr/lnreader-sources/blob/main/src/jp/syosetu/not_found.png',
      author: doc.select(".novel_writername").text().replace('作者：',''),
      description: doc.select("#novel_ex").html(),
      detail: null,
      host: "https://ncode.syosetu.com",
  });
}