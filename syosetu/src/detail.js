load('helper.js');
load('config.js');
function execute(url) {
  const api = queryBuilder({ ncode: url.split('/')[3] });
  const json = JSON.parse(fetch(api).text());
  const novel = json.pop();

  // Extract details
  const status = Object.keys(NOVEL_STATUS)
    .map((key) => NOVEL_STATUS[key][novel[key]].jp)
    .join('・');
  const points = Object.keys(NOVEL_POINTS)
    .map((key) => `${NOVEL_POINTS[key].jp}：${novel[key]}`)
    .join('<br>');

  // Build detail
  const detail =
    `作者名： ${novel.writer}<br>` +
    `Nコード： ${novel.ncode}<br>` +
    `状況： ${status}<br>` +
    `タイプ： ${NOVEL_TYPE[novel.novel_type].jp}<br>` +
    `${novel.novel_type === 1 ? `全掲載部分数： ${novel.general_all_no}部分<br>` : ''}` +
    `小説文字数： ${novel.length}<br>` +
    `会話率： ${novel.kaiwaritu}%<br>` +
    `初回掲載日： ${novel.general_firstup} JST<br>` +
    `最終掲載日： ${novel.general_lastup} JST<br>` +
    `小説の更新日時： ${novel.novelupdated_at} JST` +
    '<br>=======ポイント=======<br>' +
    points;

  return Response.success({
    name: htmlDecode(novel.title),
    cover: COVER,
    author: novel.writer,
    genres: convertGenres(novel),
    description: novel.story.replace(/\n/g, '<br>'),
    detail: detail,
    host: BASE_URL,
    ongoing: novel.end !== 0,
  });
}
