function execute(url) {
  var api = 'https://api.syosetu.com/novelapi/api/?ncode=' + url.split('/')[3] + '&out=json';
  var json = JSON.parse(fetch(api).text());
  var detail =
    '作者： ' +
    json[1].writer +
    '<br>' +
    ((json[1].novel_type == 2 ? '短編' : '連載： ' + json[1].general_all_no + '部分') +
      '・' +
      (json[1].end == 0 ? '完了' : '継続中') +
      '<br>') +
    '評価ポイント： ' +
    json[1].all_point.toString() +
    '<br>' +
    '最終更新： ' +
    json[1].novelupdated_at;
  return Response.success({
    name: json[1].title,
    cover: 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/syosetu/cover.jpg',
    author: json[1].writer,
    description: json[1].story,
    detail: detail,
    host: 'https://ncode.syosetu.com',
  });
}
