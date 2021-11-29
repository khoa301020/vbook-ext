function execute(key) {
  var api = 'https://api.syosetu.com/novelapi/api/?title=1&word=' + key + '&out=json&lim=500';
  var json = JSON.parse(fetch(api).text());

  var novelList = [];

  for (var i = 1; i < json.length; i++) {
    var novel = json[i];
    novelList.push({
      name: novel.title,
      link: novel.ncode,
      description:
        novel.global_point.toString() + 'pt・' + (json[1].novel_type == 2 ? '短編' : novel.general_all_no + '部分'),
      cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/syosetu/cover.jpg',
      host: 'https://ncode.syosetu.com/',
    });
  }
  return Response.success(novelList);
}
