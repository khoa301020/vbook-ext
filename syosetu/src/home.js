function execute() {
    return Response.success([
        {
            title: "日間ランキング",
            script: "gen.js",
            input: "https://yomou.syosetu.com/rank/list/type/daily_total/"
        },
        {
            title: "週間ランキング",
            script: "gen.js",
            input: "https://yomou.syosetu.com/rank/list/type/weekly_total/"
        },
        {
            title: "月間ランキング",
            script: "gen.js",
            input: "https://yomou.syosetu.com/rank/list/type/monthly_total/"
        },
        {
            title: "四半期ランキング",
            script: "gen.js",
            input: "https://yomou.syosetu.com/rank/list/type/quarter_total/"
        },
        {
            title: "年間ランキング",
            script: "gen.js",
            input: "https://yomou.syosetu.com/rank/list/type/yearly_total/"
        },
        {
            title: "累計ランキング",
            script: "gen.js",
            input: "https://yomou.syosetu.com/rank/list/type/total_total/"
        },
    ]);
}
