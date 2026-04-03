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
        <div className="text-center mb-16">
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
