function execute() {
  return Response.success([
    {
      title: '日間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=dailypoint&out=json&lim=99',
    },
    {
      title: '週間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=weeklypoint&out=json&lim=99',
    },
    {
      title: '月間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=monthlypoint&out=json&lim=99',
    },
    {
      title: '四半期ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=quarterpoint&out=json&lim=99',
    },
    {
      title: '年間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=yearlypoint&out=json&lim=99',
    },
    {
      title: '累計ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=hyoka&out=json&lim=99',
    },
    {
      title: 'ブックマークランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=favnovelcnt&out=json&lim=99',
    },
  ]);
}
