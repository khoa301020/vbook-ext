function execute() {
  return Response.success([
    {
      title: '日間ランキング',
      script: 'gen.js',
      input: 'https://kakuyomu.jp/rankings/all/daily?page=1',
    },
    {
      title: '週間ランキング',
      script: 'gen.js',
      input: 'https://kakuyomu.jp/rankings/all/weekly?page=1',
    },
    {
      title: '月間ランキング',
      script: 'gen.js',
      input: 'https://kakuyomu.jp/rankings/all/monthly?page=1',
    },
    {
      title: '年間ランキング',
      script: 'gen.js',
      input: 'https://kakuyomu.jp/rankings/all/yearly?page=1',
    },
    {
      title: '累計ランキング',
      script: 'gen.js',
      input: 'https://kakuyomu.jp/rankings/all/entire?page=1',
    },
  ]);
}
