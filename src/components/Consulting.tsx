const plans = [
  {
    name: "梅",
    price: "50,000",
    meeting: "オンライン 月2回 x 2h",
    support: "なし",
    color: "bg-light border-gray-200",
    headerColor: "bg-gray-100",
  },
  {
    name: "竹",
    price: "100,000",
    meeting: "オンライン 月2回 x 2h",
    support: "4〜8h / 月",
    color: "bg-white border-accent/30",
    headerColor: "bg-accent/10",
    popular: true,
  },
  {
    name: "松",
    price: "200,000",
    meeting: "対面 月1回 x 4h",
    support: "16h / 月",
    color: "bg-white border-navy-800/30",
    headerColor: "bg-navy-900",
    headerText: "text-white",
  },
];

export default function Consulting() {
  return (
    <section id="consulting" className="py-20 sm:py-28 bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            エンジニア顧問サービス
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto">
            研修後のフォローアップ。AIツールの保守・プロンプト改善・バグ修正・ツール連携をサポート
          </p>
        </div>

        {/* Intro message */}
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl font-black text-navy-900 mb-3">
            研修は入口。本番は伴走。
          </p>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            5日間の研修でAIの基礎を習得した後、実際の業務に定着させるには継続的な支援が不可欠です。
            エンジニア顧問が御社の業務に寄り添い、AI活用を「一時的な研修」から「日常の武器」へ変えます。
          </p>
        </div>

        {/* 研修→顧問パッケージ flow */}
        <div className="bg-gradient-to-r from-navy-900 to-forest rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-lg font-bold text-white mb-1 text-center">
            研修 → 顧問パッケージ
          </h3>
          <p className="text-white/60 text-xs text-center mb-6">
            研修から伴走まで一気通貫でサポート
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { label: "研修（5日間）", sub: "基礎習得" },
              { label: "業務ヒアリング", sub: "課題の特定" },
              { label: "AI導入", sub: "ツール構築" },
              { label: "月次伴走サポート", sub: "定着・改善" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center min-w-[120px]">
                  <p className="text-white font-bold text-sm">{step.label}</p>
                  <p className="text-white/50 text-xs mt-1">{step.sub}</p>
                </div>
                {i < 3 && (
                  <svg
                    className="w-5 h-5 text-accent shrink-0 hidden sm:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border overflow-hidden ${plan.color} ${
                plan.popular ? "ring-2 ring-accent shadow-lg relative" : "shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-navy-900 text-xs font-bold px-4 py-1 rounded-full">
                  おすすめ
                </div>
              )}
              <div
                className={`p-6 text-center ${plan.headerColor} ${
                  plan.headerText || "text-navy-900"
                }`}
              >
                <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.headerText ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    円/月
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">定例MTG</p>
                  <p className="text-sm font-medium text-navy-900">
                    {plan.meeting}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">作業サポート</p>
                  <p className="text-sm font-medium text-navy-900">
                    {plan.support}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
