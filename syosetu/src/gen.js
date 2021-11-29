function execute(url) {
  var json = JSON.parse(fetch(url).text());

  var novelList = [];

  for (var i = 1; i < json.length; i++) {
    var novel = json[i];
    point = url.includes('favnovelcnt') ? novel.fav_novel_cnt.toString() : novel.global_point.toString();
    novelList.push({
      name: novel.title,
      link: novel.ncode,
      description: point + 'pt・' + (json[1].novel_type == 2 ? '短編' : novel.general_all_no + '部分'),
      cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/syosetu/cover.jpg',
      host: 'https://ncode.syosetu.com/',
    });
  }
  return Response.success(novelList);
}
