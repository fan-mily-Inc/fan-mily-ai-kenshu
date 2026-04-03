const days = [
  {
    day: 1,
    theme: "要件定義・環境構築・AI開発入門",
    skills: "Cursor基礎, Claude Code入門, GitHub初期設定",
    hours: "4h",
  },
  {
    day: 2,
    theme: "ソースコード管理・インフラ・バックエンド基礎",
    skills: "GitHub Flow, DB設計, Supabase/Railway",
    hours: "4h",
  },
  {
    day: 3,
    theme: "環境分け・実装 (1) フロントエンド",
    skills: "dev/staging/本番環境分け, UI実装, プロンプト設計",
    hours: "4h",
  },
  {
    day: 4,
    theme: "実装 (2) バックエンド・API連携",
    skills: "API設計, 認証, データ連携, Claude Code修正",
    hours: "4h",
  },
  {
    day: 5,
    theme: "CI/CD・デプロイ・保守・総合実習・発表",
    skills: "GitHub Actions, 自動デプロイ, バグ検知",
    hours: "4h",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            5日間カリキュラム
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            アプリケーションサービス研修の場合
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full" role="table">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold w-20">
                  Day
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold">
                  テーマ
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold">
                  習得スキル
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-bold w-20">
                  時間
                </th>
              </tr>
            </thead>
            <tbody>
              {days.map((d, i) => (
                <tr
                  key={d.day}
                  className={i % 2 === 0 ? "bg-white" : "bg-light"}
                >
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 text-accent font-bold rounded-full text-sm">
                      {d.day}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-medium text-navy-900 text-sm">
                    {d.theme}
                  </td>
                  <td className="px-6 py-5 text-gray-600 text-sm">
                    {d.skills}
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-navy-900 text-sm">
                    {d.hours}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-navy-900 text-white">
                <td className="px-6 py-4" colSpan={3}>
                  <span className="font-bold text-sm">合計</span>
                </td>
                <td className="px-6 py-4 text-center font-bold text-accent text-lg">
                  20h
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {days.map((d) => (
            <div
              key={d.day}
              className="bg-white rounded-xl border border-gray-200 p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 text-accent font-bold rounded-full text-sm">
                  {d.day}
                </span>
                <span className="text-navy-900 font-bold text-sm">
                  {d.hours}
                </span>
              </div>
              <h3 className="font-bold text-navy-900 text-sm mb-2">
                {d.theme}
              </h3>
              <p className="text-gray-500 text-xs">{d.skills}</p>
            </div>
          ))}
          <div className="bg-navy-900 rounded-xl p-5 text-center">
            <span className="text-white/80 text-sm">合計</span>
            <span className="text-accent font-bold text-2xl ml-3">20h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
