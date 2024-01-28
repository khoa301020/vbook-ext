const BASE_URL = 'https://ncode.syosetu.com';
const API_ENDPOINT = 'https://api.syosetu.com/novelapi/api/?';
const COVER = 'https://raw.githubusercontent.com/khoa301020/vbook-ext/master/syosetu/cover.jpg';

const BIG_GENRES = {
  1: { jp: '恋愛', en: 'Love' },
  2: { jp: 'ファンタジー', en: 'Fantasy' },
  3: { jp: '文芸', en: 'Literature' },
  4: { jp: 'SF', en: 'Science fiction' },
  98: { jp: 'ノンジャンル', en: 'Non genre' },
  99: { jp: 'その他', en: 'Other' },
};

const GENRES = {
  101: { jp: '異世界〔恋愛〕', en: 'Isekai (Love)' },
  102: { jp: '現実世界〔恋愛〕', en: 'Real world (Love)' },
  201: { jp: 'ハイファンタジー〔ファンタジー〕', en: 'High fantasy (Fantasy)' },
  202: { jp: 'ローファンタジー〔ファンタジー〕', en: 'Low fantasy (Fantasy)' },
  301: { jp: '純文学〔文芸〕', en: 'Pure literature (Literature)' },
  302: { jp: 'ヒューマンドラマ〔文芸〕', en: 'Human drama (Literature)' },
  303: { jp: '歴史〔文芸〕', en: 'History (Literature)' },
  304: { jp: '推理〔文芸〕', en: 'Mystery/Detective (Literature)' },
  305: { jp: 'ホラー〔文芸〕', en: 'Horror (Literature)' },
  306: { jp: 'アクション〔文芸〕', en: 'Action (Literature)' },
  307: { jp: 'コメディー〔文芸〕', en: 'Comedy (Literature)' },
  401: { jp: 'VRゲーム〔SF〕', en: 'VR game (Science fiction)' },
  402: { jp: '宇宙〔SF〕', en: 'Space (Science fiction)' },
  403: { jp: '空想科学〔SF〕', en: 'Imaginary science (Science fiction)' },
  404: { jp: 'パニック〔SF〕', en: 'Disaster (Science fiction )' },
  9901: { jp: '童話〔その他〕', en: 'Fairytale (Other)' },
  9902: { jp: '詩〔その他〕', en: 'Poetry (Other)' },
  9903: { jp: 'エッセイ〔その他〕', en: 'Essay (Other)' },
  9904: { jp: 'リプレイ〔その他〕', en: 'Replay (Other)' },
  9999: { jp: 'その他〔その他〕', en: 'Other (Other)' },
  9801: { jp: 'ノンジャンル〔ノンジャンル〕', en: 'Non genre (Non genre)' },
};

const NOVEL_TYPE = {
  1: { jp: '連載', en: 'Serializing' },
  2: { jp: '短編', en: 'Short story' },
};

const NOVEL_TAGS = {
  isr15: { jp: 'R15', en: 'R15' },
  isbl: { jp: 'ボーイズラブ', en: 'Yaoi' },
  isgl: { jp: 'ガールズラブ', en: 'Yuri' },
  iszankoku: { jp: '残酷な描写あり', en: 'Cruel' },
  istensei: { jp: '異世界転生', en: 'Tensei' },
  istenni: { jp: '異世界転移', en: 'Tenni' },
};

const NOVEL_STATUS = {
  end: {
    0: { jp: '完結済み', en: 'Completed' },
    1: { jp: '連載中', en: 'Ongoing' },
  },
  isstop: {
    0: { jp: '長期連載中', en: 'Long-term serializing' },
    1: { jp: '長期連載停止中', en: 'Long-term serialization suspension' },
  },
};

const NOVEL_POINTS = {
  global_point: { jp: '総合評価ポイント', en: 'Overall evaluation points' },
  daily_point: { jp: '日間ポイント', en: 'Daily points' },
  weekly_point: { jp: '週間ポイント', en: 'Weekly points' },
  monthly_point: { jp: '月間ポイント', en: 'Monthly points' },
  quarter_point: { jp: '四半期ポイント', en: 'Quarterly points' },
  yearly_point: { jp: '年間ポイント', en: 'Annual points' },
  fav_novel_cnt: { jp: 'ブックマーク数', en: 'Number of bookmarks' },
  impression_cnt: { jp: '感想数', en: 'Number of impressions' },
  review_cnt: { jp: 'レビュー数', en: 'Number of reviews' },
  all_point: { jp: '評価ポイント', en: 'Evaluation points' },
  all_hyoka_cnt: { jp: '評価者数', en: 'Number of evaluators' },
};
