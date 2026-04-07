const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-accent shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const aidxPlans = [
  {
    id: "light",
    badge: "ライト",
    badgeStyle: "bg-sky-100 text-sky-700",
    name: "月額10万円",
    price: "100,000",
    desc: "まずはAI活用の第一歩を踏み出したい企業向け",
    items: [
      "月1回の対面 or オンラインMTG",
      "AI活用の方向性コンサルティング",
      "チャットサポート（Slack/Discord）",
      "プロンプトテンプレート提供",
    ],
    highlight: false,
  },
  {
    id: "standard",
    badge: "おすすめ",
    badgeStyle: "bg-accent text-navy-900",
    name: "月額30万円",
    price: "300,000",
    desc: "業務自動化・SNS内製化・AI導入を本格的に進めたい企業向け",
    items: [
      "月2〜3回の対面研修・ワークショップ",
      "業務自動化フロー構築（Zapier/Make）",
      "SNS内製化・AI投稿支援の設計",
      "AIエージェント導入設計",
      "助成金申請サポート",
      "チャットサポート無制限",
    ],
    highlight: true,
  },
  {
    id: "premium",
    badge: "フルサポート",
    badgeStyle: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
    name: "月額50万円",
    price: "500,000",
    desc: "DX導入ロードマップの設計から実装・研修まで丸ごとお任せ",
    items: [
      "週1回の対面研修・伴走支援",
      "御社専用のAIシステム構築・実装",
      "LINE公式×AI自動接客・在庫DB連携",
      "バックオフィスAI化（見積・問合せ自動化）",
      "スタッフ向け操作トレーニング",
      "助成金申請サポート・月次レポート",
    ],
    highlight: false,
  },
];

const appDevPlan = {
  badge: "短期集中",
  badgeStyle: "bg-purple-100 text-purple-700",
  name: "85万円〜",
  price: "850,000",
  desc: "1週間の対面集中研修で、動くWebアプリ or AIエージェントを完成させる",
  items: [
    "5日間・20時間の対面集中研修",
    "AI基礎 → 業務自動化 → エージェント構築 → アプリ開発",
    "Next.js + Supabase でWebアプリをゼロから構築",
    "Vibe Coding（AI駆動開発）の実践",
    "修了物：動くWebアプリ or AIエージェント",
    "全社AI推進計画書の策定",
    "助成金適用で実質 約28万円〜",
  ],
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            料金プラン
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            御社の課題と目的に合わせて、2つのプラン体系からお選びいただけます。
          </p>
        </div>

        {/* ─── AIDX研修プラン ─── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                AIDX研修プラン
              </h3>
              <p className="text-gray-500 text-sm">
                中長期（3ヶ月〜）の伴走型。AI・DXを段階的に導入
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6 ml-13">
            <span className="text-xs bg-green-50 text-forest font-semibold px-3 py-1 rounded-full">
              ✅ 助成金適用可（最大75%補助）
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              月額制・契約期間の縛りなし
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aidxPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col ${
                  plan.highlight
                    ? "bg-white shadow-lg border-2 border-accent/40 ring-2 ring-accent/20 relative"
                    : "bg-white shadow-sm border border-gray-100"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-navy-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    いちばん人気
                  </div>
                )}

                <div className="mb-5">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${plan.badgeStyle}`}>
                    {plan.badge}
                  </span>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-navy-900">
                      ¥{plan.price}
                    </span>
                    <span className="text-gray-400 text-xs">（税別/月）</span>
                  </div>
                  <p className="text-gray-500 text-xs">{plan.desc}</p>
                </div>

                <ul className="space-y-2 flex-1">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://forms.gle/YTRHRpV1FMGRmGFc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 block text-center py-3 px-6 rounded-xl font-bold text-sm transition-all ${
                    plan.highlight
                      ? "bg-accent text-navy-900 hover:bg-accent/90 shadow-md"
                      : "bg-navy-900 text-white hover:bg-navy-900/90"
                  }`}
                >
                  無料ヒアリングを予約する
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* ─── アプリ開発研修プラン ─── */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-navy-900">
                アプリ開発研修プラン
              </h3>
              <p className="text-gray-500 text-sm">
                短期集中（1週間〜）。対面がっつり、動くプロダクトを作り上げる
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6 ml-13">
            <span className="text-xs bg-green-50 text-forest font-semibold px-3 py-1 rounded-full">
              ✅ 助成金適用可（最大67%補助）
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              全国出張対応・対面研修
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${appDevPlan.badgeStyle}`}>
                  {appDevPlan.badge}
                </span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-navy-900">
                    ¥{appDevPlan.price}
                  </span>
                  <span className="text-gray-400 text-sm">〜（税別）</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">{appDevPlan.desc}</p>
                <a
                  href="https://forms.gle/YTRHRpV1FMGRmGFc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy-900 text-white hover:bg-navy-900/90 py-3 px-8 rounded-xl font-bold text-sm transition-all"
                >
                  無料ヒアリングを予約する
                </a>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {appDevPlan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-400 text-xs mt-10">
          ※ 助成金シミュレーションは中小企業・正社員の場合の概算です。詳細はヒアリング時にご説明します。
          <br />
          ※ 交通費・宿泊費は別途。10名まで定額、11名以降は +1万円/人/日。
        </p>
      </div>
    </section>
  );
}
