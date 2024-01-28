const novelType = (type, chaptersCount) => {
  switch (type) {
    case 1:
      return `${chaptersCount}部分`;
    case 2:
      return '短編';
    default:
      return '';
  }
};
const queryBuilder = (params) =>
  API_ENDPOINT +
  Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&') +
  '&out=json';

const convertGenres = (novel) => {
  const genres = [];
  genres.push({
    title: BIG_GENRES[novel.biggenre].jp,
    input: queryBuilder({ biggenre: novel.biggenre, order: 'hyoka', of: 't-n-gp-nt-ga', lim: 500 }),
    script: 'gen.js',
  });
  genres.push({
    title: GENRES[novel.genre].jp,
    input: queryBuilder({ genre: novel.genre, order: 'hyoka', of: 't-n-gp-nt-ga', lim: 500 }),
    script: 'gen.js',
  });
  novel.keyword.split(' ').forEach((keyword) => {
    genres.push({
      title: keyword,
      input: queryBuilder({ keyword: 1, word: keyword, order: 'hyoka', of: 't-n-gp-nt-ga', lim: 500 }),
      script: 'gen.js',
    });
  });
  return genres;
};

function htmlDecode(input) {
  const commonHtmlEntities = [
    ['apos', "'"],
    ['quot', '"'],
    ['amp', '&'],
    ['lt', '<'],
    ['gt', '>'],
  ];
  return commonHtmlEntities.reduce((acc, entity) => {
    const regex = new RegExp(`&${entity[0]};`, 'g');
    return acc.replace(regex, entity[1]);
  }, input);
}
