load('config.js');
load('helper.js');
function execute(url) {
  const api = queryBuilder({ ncode: url.split('/')[3], of: 't-n-gp-nt-ga', lim: 1 });
  const json = JSON.parse(fetch(api).text());
  const novel = json.pop();
  if (novel.general_all_no === 1) {
    return Response.success([url]);
  }
  const pages = [];
  for (var i = 1; i <= Math.ceil(novel.general_all_no / 100); i++) {
    pages.push(`${url}?p=${i}`);
  }
  return Response.success(pages);
}
