function execute() {
  return Response.success([
    {
      title: '日間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=dailypoint&of=t-n-gp-nt-ga&out=json&lim=99',
    },
    {
      title: '週間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=weeklypoint&of=t-n-gp-nt-ga&out=json&lim=99',
    },
    {
      title: '月間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=monthlypoint&of=t-n-gp-nt-ga&out=json&lim=99',
    },
    {
      title: '四半期ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=quarterpoint&of=t-n-gp-nt-ga&out=json&lim=99',
    },
    {
      title: '年間ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=yearlypoint&of=t-n-gp-nt-ga&out=json&lim=99',
    },
    {
      title: '累計ランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=hyoka&of=t-n-gp-nt-ga&out=json&lim=99',
    },
    {
      title: 'ブックマークランキング',
      script: 'gen.js',
      input: 'https://api.syosetu.com/novelapi/api/?order=favnovelcnt&of=t-n-f-gp-nt-ga&out=json&lim=99',
    },
  ]);
}
