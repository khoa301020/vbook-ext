const https = require('https');
function test() {
  let url = 'https://yomou.syosetu.com/rank/list/type/daily_total/';
  const options = {    
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36' }
  };
  var doc = https.get('https://yomou.syosetu.com/rank/list/type/daily_total/',options, (res) => {
    var body = '';
    res.on('data', (d) => {
      body += d;
    });
    res.on('end', () => {
      console.log(body.html().select('.ranking_list .rank_table .point').text());
    });
  });
}
test();
