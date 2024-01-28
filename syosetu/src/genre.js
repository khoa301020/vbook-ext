function execute() {
  return Response.success([
    {
      title: '「短編」',
      input: 'https://api.syosetu.com/novelapi/api/?type=t&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '「連載中」',
      input: 'https://api.syosetu.com/novelapi/api/?type=r&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '「完結済連載小説」',
      input: 'https://api.syosetu.com/novelapi/api/?type=er&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '「すべての連載小説(連載中および完結済)」',
      input: 'https://api.syosetu.com/novelapi/api/?type=re&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '「短編と完結済連載小説」',
      input: 'https://api.syosetu.com/novelapi/api/?type=ter&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '〔恋愛〕',
      input: 'https://api.syosetu.com/novelapi/api/?biggenre=1&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '〔ファンタジー〕',
      input: 'https://api.syosetu.com/novelapi/api/?biggenre=2&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?biggenre=3&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '〔SF〕',
      input: 'https://api.syosetu.com/novelapi/api/?biggenre=4&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '異世界〔恋愛〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=101&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '現実世界〔恋愛〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=102&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'ハイファンタジー〔ファンタジー〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=201&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'ローファンタジー〔ファンタジー〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=202&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '純文学〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=301&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'ヒューマンドラマ〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=302&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '歴史〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=303&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '推理〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=304&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'ホラー〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=305&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'アクション〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=306&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'コメディー〔文芸〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=307&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'VRゲーム〔SF〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=401&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '宇宙〔SF〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=402&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '空想科学〔SF〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=403&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'パニック〔SF〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=404&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '童話〔その他〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=9901&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: '詩〔その他〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=9902&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'エッセイ〔その他〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=9903&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'リプレイ〔その他〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=9904&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'その他〔その他〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=9999&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
    {
      title: 'ノンジャンル〔ノンジャンル〕',
      input: 'https://api.syosetu.com/novelapi/api/?genre=9801&order=hyoka&of=t-n-gp-nt-ga&out=json&lim=500',
      script: 'gen.js',
    },
  ]);
}
