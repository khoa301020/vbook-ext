load('config.js');
load('helper.js');
function execute(url) {
  const json = JSON.parse(fetch(url).text());
  const novels = json.slice(1);
  return Response.success(
    novels.map((novel) => ({
      name: htmlDecode(novel.title),
      link: `${BASE_URL}/${novel.ncode.toLowerCase()}/`,
      description: `${url.includes('favnovelcnt') ? novel.fav_novel_cnt : novel.global_point}pt・${novelType(
        novel.novel_type || novel.noveltype,
        novel.general_all_no,
      )}`,
      cover: COVER,
    })),
  );
}
