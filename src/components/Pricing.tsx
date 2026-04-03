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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Base Price */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-navy-900 mb-6">
              基本料金
            </h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl sm:text-5xl font-black text-navy-900">
                850,000
              </span>
              <span className="text-gray-500 text-sm">円（税別）/ 研修1つ</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                <span className="text-gray-600">研修費</span>
                <span className="font-medium text-navy-900">800,000円</span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-gray-100">
                <span className="text-gray-600">講師交通費・宿泊費</span>
                <span className="font-medium text-navy-900">50,000円</span>
              </div>
            </div>

            <h4 className="font-bold text-navy-900 text-sm mb-3">含まれるもの</h4>
            <ul className="space-y-2">
              {[
                "5日間研修（20時間）",
                "教材一式",
                "修了証",
                "助成金申請サポート",
                "講師交通費・宿泊費",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    className="w-5 h-5 text-accent shrink-0"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidy Simulation */}
          <div className="bg-gradient-to-br from-navy-900 to-forest rounded-2xl p-8 text-white">
            <h3 className="text-lg font-bold mb-2">助成金シミュレーション</h3>
            <p className="text-white/60 text-xs mb-6">
              中小企業・正社員3名の場合
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between text-sm py-2 border-b border-white/10">
                <span className="text-white/80">研修費助成（60%）</span>
                <span className="text-accent font-medium">-480,000円</span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-white/10">
                <span className="text-white/80">交通費助成（60%）</span>
                <span className="text-accent font-medium">-30,000円</span>
              </div>
              <div className="flex items-center justify-between text-sm py-2 border-b border-white/10">
                <span className="text-white/80">
                  賃金助成（960円 x 20h x 3名）
                </span>
                <span className="text-accent font-medium">-57,600円</span>
              </div>
              <div className="flex items-center justify-between text-sm py-3 border-b border-white/20">
                <span className="text-white/80 font-medium">合計助成額</span>
                <span className="text-accent font-bold text-lg">
                  -567,600円
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <p className="text-white/60 text-xs mb-2">実質負担額</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-3xl sm:text-4xl font-black text-accent">
                  約282,400
                </span>
                <span className="text-white/60 text-sm">円</span>
              </div>
              <div className="mt-3">
                <span className="inline-block bg-accent text-navy-900 font-bold text-sm px-4 py-1.5 rounded-full">
                  約67%オフ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
