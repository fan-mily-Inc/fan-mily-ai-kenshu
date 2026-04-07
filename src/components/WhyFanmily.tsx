const comparisons = [
  {
    typical: "オンライン or 東京会場",
    fanmily: "全国出張。御社の会議室で研修",
    icon: "📍",
  },
  {
    typical: "汎用的なカリキュラム",
    fanmily: "御社の業務課題をそのまま題材に",
    icon: "🎯",
  },
  {
    typical: "研修で終わり",
    fanmily: "月額顧問で内製化まで伴走",
    icon: "🤝",
  },
  {
    typical: "講師は「教えるだけ」の人",
    fanmily: "9体のAIエージェントを自社運用する現役エンジニア",
    icon: "⚡",
  },
  {
    typical: "架空の課題で練習",
    fanmily: "研修終了時に動くシステムを納品",
    icon: "🚀",
  },
  {
    typical: "受講後は自力で頑張る",
    fanmily: "助成金の実質負担分を顧問期間で還元",
    icon: "💰",
  },
];

export default function WhyFanmily() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            WHY fan-mily?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            一般的なAI研修との違い
          </h2>
        </div>

        <div className="space-y-4">
          {/* Header row - desktop only */}
          <div className="hidden md:grid md:grid-cols-11 gap-4 px-6 pb-2">
            <div className="col-span-5 text-sm font-bold text-gray-400 text-center">
              一般的なAI研修
            </div>
            <div className="col-span-1" />
            <div className="col-span-5 text-sm font-bold text-accent text-center">
              fan-milyのAI研修
            </div>
          </div>

          {comparisons.map((row) => (
            <div
              key={row.icon}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6"
            >
              {/* Mobile layout */}
              <div className="md:hidden space-y-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm line-through">
                  {row.typical}
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{row.icon}</span>
                  <span className="text-navy-900 font-bold text-sm">
                    {row.fanmily}
                  </span>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:grid md:grid-cols-11 md:gap-4 md:items-center">
                <div className="col-span-5 text-gray-400 text-sm text-right">
                  {row.typical}
                </div>
                <div className="col-span-1 flex justify-center">
                  <span className="text-2xl">{row.icon}</span>
                </div>
                <div className="col-span-5 text-navy-900 font-bold text-sm">
                  {row.fanmily}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
