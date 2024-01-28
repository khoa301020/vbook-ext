load('config.js');
load('helper.js');
function execute(key) {
  const api = queryBuilder({ title: 1, word: key, of: 't-n-gp-nt-ga', lim: 500 });
  const json = JSON.parse(fetch(api).text());
  const novelList = json.slice(1);

  return Response.success(
    novelList.map((novel) => ({
      name: htmlDecode(novel.title),
      link: `${BASE_URL}/${novel.ncode.toLowerCase()}/`,
      description: `${novel.global_point.toString()}pt・${novelType(
        novel.novel_type || novel.noveltype,
        novel.general_all_no,
      )}`,
      cover: COVER,
    })),
  );
}
