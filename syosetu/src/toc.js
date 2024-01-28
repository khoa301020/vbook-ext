load('config.js');
load('helper.js');
function execute(url) {
  const doc = fetch(url.toLowerCase()).html();

  // Extract chapters and episodes
  const listAll = doc.select('.novel_sublist2 a,.chapter_title');

  // Check if the novel is a short story
  if (listAll.size() == 0) {
    const title = htmlDecode(doc.select('.novel_title').text());
    return Response.success([
      {
        url,
        name: `「短編」・${title}`,
      },
    ]);
  }

  // Build chapters and episodes
  let chapterName = '';
  const listChapters = [];

  for (var i = 0; i < listAll.size(); i++) {
    var chap = listAll.get(i);
    if (chap.select('a').text() == '') {
      chapterName = '【' + chap.text() + '】\n\n';
    } else {
      listChapters.push({
        name: chapterName + chap.select('a').text(),
        url: chap.attr('href'),
        host: BASE_URL,
      });
      chapterName = '';
    }
  }

  return Response.success(listChapters);
}
