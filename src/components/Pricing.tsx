const plans = [
  {
    id: "1day",
    badge: "入門",
    badgeStyle: "bg-sky-100 text-sky-700",
    name: "1Day Light",
    desc: "まずAIを体験したい企業・チーム向け",
    hours: "4時間",
    days: "1日間",
    inPersonPrice: "200,000",
    onlinePrice: "150,000",
    subsidyNote: "助成金対象外",
    subsidyNoteStyle: "text-amber-600 bg-amber-50",
    subsidyIcon: "✕",
    items: [
      "AI基礎知識・ChatGPT/Claude操作",
      "プロンプトエンジニアリング実践",
      "業務活用ハンズオン",
      "自社業務AIプロンプト集（修了物）",
      "教材一式",
    ],
    highlight: false,
  },
  {
    id: "3day",
    badge: "おすすめ",
    badgeStyle: "bg-accent text-navy-900",
    name: "3Day Standard",
    desc: "業務効率化・自動化を本格導入したい企業向け",
    hours: "12時間",
    days: "3日間",
    inPersonPrice: "550,000",
    onlinePrice: "400,000",
    subsidyNote: "助成金適用可（最大約60%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約22万円〜",
    items: [
      "AI基礎 + 業務自動化設計",
      "Zapier/Make ノーコード自動化",
      "業務改善ロードマップ（修了物）",
      "動く自動化フロー1本（修了物）",
      "教材一式・修了証",
      "助成金申請サポート",
    ],
    highlight: true,
  },
  {
    id: "5day",
    badge: "上級",
    badgeStyle: "bg-navy-900/10 text-navy-900",
    name: "5Day Premium",
    desc: "AI人材を社内育成・DX推進担当者向け",
    hours: "20時間",
    days: "5日間",
    inPersonPrice: "850,000",
    onlinePrice: "650,000",
    subsidyNote: "助成金適用可（最大約67%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約28万円〜",
    items: [
      "AI基礎 + 業務自動化 + AIエージェント構築",
      "アプリ開発（Next.js + Supabase）",
      "動くWebアプリ or AIエージェント（修了物）",
      "全社AI推進計画書（修了物）",
      "教材一式・修了証",
      "助成金申請サポート",
    ],
    highlight: false,
  },
  {
    id: "10day",
    badge: "専門家",
    badgeStyle: "bg-purple-100 text-purple-700",
    name: "10Day Expert",
    desc: "社内AI内製化・DXリーダー育成向け",
    hours: "40時間",
    days: "10日間",
    inPersonPrice: "1,500,000",
    onlinePrice: "1,200,000",
    subsidyNote: "助成金適用可（最大約67%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約50万円〜",
    items: [
      "5Day内容 + 社内システム本格構築",
      "Change Management・AI展開設計",
      "本番稼働する社内AIツール（修了物）",
      "社内AI展開マニュアル（修了物）",
      "社内研修資料一式（修了物）",
      "教材一式・修了証・助成金申請サポート",
    ],
    highlight: false,
  },
  {
    id: "20day",
    badge: "最上位",
    badgeStyle: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    name: "20Day Enterprise",
    desc: "経営幹部・AI変革リーダー育成向け",
    hours: "80時間",
    days: "20日間",
    inPersonPrice: "2,800,000",
    onlinePrice: "2,200,000",
    subsidyNote: "助成金適用可（最大約67%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約92万円〜",
    items: [
      "10Day内容 + 高度マルチエージェント設計",
      "本番グレードAIプロダクト開発",
      "完成した自社AIプロダクト（修了物）",
      "AI経営戦略書（修了物）",
      "社内育成体制一式（修了物）",
      "教材一式・修了証・助成金申請サポート",
    ],
    highlight: false,
  },
  {
    id: "custom",
    badge: "カスタム",
    badgeStyle: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
    name: "Custom DX Partner",
    desc: "AI・DXの構築から研修まで、御社専用にフルカスタマイズ",
    hours: "要相談",
    days: "月額制",
    inPersonPrice: "500,000",
    onlinePrice: null,
    priceLabel: "月額",
    subsidyNote: "助成金適用可（最大約75%補助）",
    subsidyNoteStyle: "text-forest bg-green-50 font-semibold",
    subsidyIcon: "✅",
    subsidyAfterNote: "実質 約12.5万円〜/月",
    items: [
      "御社の業務に合わせたDX導入ロードマップ設計",
      "SNS内製化・動画活用・AI自動接客の構築",
      "LINE公式×AI相談窓口・在庫DB連携",
      "バックオフィスAI化（見積・問い合わせ自動化）",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            料金プラン
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            10名まで定額・11名以降は +1万円/人/日。交通費・宿泊費別途。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
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
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {plan.days}
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {plan.hours}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-100 py-5 mb-5 space-y-3">
                {plan.priceLabel ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{plan.priceLabel}</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-navy-900">
                        ¥{plan.inPersonPrice}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">（税別/月）</span>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">対面</span>
                      <div className="text-right">
                        <span className="text-2xl font-black text-navy-900">
                          ¥{plan.inPersonPrice}
                        </span>
                        <span className="text-gray-400 text-xs ml-1">（税別）</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">オンライン</span>
                      <div className="text-right">
                        <span className="text-2xl font-black text-navy-900">
                          ¥{plan.onlinePrice}
                        </span>
                        <span className="text-gray-400 text-xs ml-1">（税別）</span>
                      </div>
                    </div>
                  </>
                )}
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
