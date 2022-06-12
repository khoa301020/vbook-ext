function execute() {
  return Response.success([
    {
      title: '「異世界ファンタジー」',
      input: 'https://kakuyomu.jp/rankings/fantasy/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「現代ファンタジー」',
      input: 'https://kakuyomu.jp/rankings/action/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「SF」',
      input: 'https://kakuyomu.jp/rankings/sf/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「恋愛」',
      input: 'https://kakuyomu.jp/rankings/love_story/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「ラブコメ」',
      input: 'https://kakuyomu.jp/rankings/romance/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「現代ドラマ」',
      input: 'https://kakuyomu.jp/rankings/drama/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「ホラー」',
      input: 'https://kakuyomu.jp/rankings/horror/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「ミステリー」',
      input: 'https://kakuyomu.jp/rankings/mystery/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「エッセイ・ノンフィクション」',
      input: 'https://kakuyomu.jp/rankings/nonfiction/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「歴史・時代・伝奇」',
      input: 'https://kakuyomu.jp/rankings/history/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「創作論・評論」',
      input: 'https://kakuyomu.jp/rankings/criticism/entire?page=1',
      script: 'gen.js',
    },
    {
      title: '「詩・童話・その他」',
      input: 'https://kakuyomu.jp/rankings/others/entire?page=1',
      script: 'gen.js',
    },
  ]);
}
