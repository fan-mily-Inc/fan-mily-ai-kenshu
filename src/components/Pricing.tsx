const plans = [
  {
    id: "1day",
    badge: "入門",
    badgeStyle: "bg-sky-100 text-sky-700",
    name: "1Day Light",
    desc: "まずAIを体験したい企業・チーム向け",
    duration: "1日間・4時間",
    price: "150,000",
    priceNote: "〜200,000",
    subsidyNote: "助成金対象外（4時間のため）",
    subsidyNoteStyle: "text-amber-600 bg-amber-50",
    subsidyIcon: "✕",
    items: [
      "AI基礎知識・ChatGPT/Claude操作",
      "プロンプトエンジニアリング実践",
      "業務活用ハンズオン",
      "修了物：自社業務AIプロンプト集",
    ],
    highlight: false,
  },
  {
    id: "5day",
    badge: "おすすめ",
    badgeStyle: "bg-accent text-navy-900",
    name: "3〜5Day Standard",
    desc: "業務自動化からAIエージェント構築まで。最も選ばれているプラン",
    duration: "3〜5日間・12〜20時間",
    price: "400,000",
    priceNote: "〜850,000",
    subsidyNote: "助成金適用可（最大約67%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約22万円〜",
    items: [
      "AI基礎 + 業務自動化（Zapier/Make）",
      "AIエージェント構築（Discord Bot等）",
      "Webアプリ開発（Next.js + Supabase）",
      "修了物：動くシステム + AI推進計画書",
      "助成金申請サポート・修了証",
    ],
    highlight: true,
  },
  {
    id: "10day",
    badge: "本格導入",
    badgeStyle: "bg-purple-100 text-purple-700",
    name: "10〜20Day Expert",
    desc: "AI内製化・DXリーダー育成・本番システム構築まで",
    duration: "10〜20日間・40〜80時間",
    price: "1,200,000",
    priceNote: "〜2,800,000",
    subsidyNote: "助成金適用可（最大約67%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約50万円〜",
    items: [
      "Standard全内容 + 社内システム本格構築",
      "マルチエージェント設計・セキュリティ",
      "Change Management・社内AI展開設計",
      "修了物：本番稼働するAIシステム一式",
      "助成金申請サポート・修了証",
    ],
    highlight: false,
  },
  {
    id: "custom",
    badge: "カスタム",
    badgeStyle: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
    name: "Custom DX Partner",
    desc: "AI・DXの構築から研修まで、御社専用にフルカスタマイズ",
    duration: "月額制・期間は要相談",
    price: "500,000",
    priceNote: null,
    isMonthly: true,
    subsidyNote: "助成金適用可（最大約75%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約12.5万円〜/月",
    items: [
      "御社の業務に合わせたDX導入ロードマップ",
      "SNS内製化・AI自動接客・業務自動化の構築",
      "スタッフ向け対面研修・操作トレーニング",
      "助成金申請サポート・月次モニタリング",
    ],
    highlight: false,
  },
];

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
            日数・内容はヒアリングで最適化します。10名まで定額・交通費別途。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 flex flex-col ${
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

              {/* Header */}
              <div className="mb-5">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${plan.badgeStyle}`}>
                  {plan.badge}
                </span>
                <h3 className="text-xl font-black text-navy-900 mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs">{plan.desc}</p>
                <p className="text-xs text-gray-400 bg-gray-100 inline-block px-2 py-0.5 rounded-full mt-2">
                  {plan.duration}
                </p>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-100 py-5 mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-navy-900">
                    ¥{plan.price}
                  </span>
                  {plan.priceNote && (
                    <span className="text-gray-400 text-sm font-bold">
                      {plan.priceNote}
                    </span>
                  )}
                  <span className="text-gray-400 text-xs ml-1">
                    {plan.isMonthly ? "（税別/月）" : "（税別）"}
                  </span>
                </div>
              </div>

              {/* Subsidy badge */}
              <div className={`text-xs px-3 py-2 rounded-lg mb-5 flex items-center gap-1.5 ${plan.subsidyNoteStyle}`}>
                <span>{plan.subsidyIcon}</span>
                <span>{plan.subsidyNote}</span>
                {plan.subsidyAfterNote && (
                  <span className="ml-auto font-bold text-forest">
                    {plan.subsidyAfterNote}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 flex-1">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://forms.gle/YTRHRpV1FMGRmGFc6"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block text-center py-3 px-6 rounded-xl font-bold text-sm transition-all ${
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

        {/* Footer note */}
        <p className="text-center text-gray-400 text-xs mt-8">
          ※ 助成金シミュレーションは中小企業・正社員の場合の概算です。詳細はヒアリング時にご説明します。
        </p>
      </div>
    </section>
  );
}
