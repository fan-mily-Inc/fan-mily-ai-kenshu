const examples = [
  { amount: "10万", months: "1ヶ月" },
  { amount: "30万", months: "3ヶ月" },
  { amount: "50万", months: "5ヶ月" },
  { amount: "100万", months: "10ヶ月" },
];

export default function CostOffset() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            COST OFFSET
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            顧問費用相殺プログラム
          </h2>
        </div>

        <div className="bg-gradient-to-br from-navy-900 to-forest rounded-2xl p-8 sm:p-12 text-center text-white mb-10">
          <p className="text-white/70 text-sm mb-4">計算式</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl font-bold text-lg">
              手出し額
            </span>
            <span className="text-accent text-2xl font-bold" aria-hidden="true">&divide;</span>
            <span className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl font-bold text-lg">
              10万円
            </span>
            <span className="text-accent text-2xl font-bold" aria-hidden="true">=</span>
            <span className="bg-accent/20 backdrop-blur-sm px-5 py-3 rounded-xl font-bold text-lg text-accent">
              顧問無料月数
            </span>
          </div>
          <p className="sr-only">手出し額を10万円で割った数が、顧問サービスの無料月数になります</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {examples.map((ex) => (
            <div
              key={ex.amount}
              className="bg-light rounded-xl p-5 text-center border border-gray-100"
            >
              <p className="text-gray-500 text-xs mb-1">手出し</p>
              <p className="text-navy-900 font-bold text-lg mb-3">
                {ex.amount}
              </p>
              <div className="w-8 h-0.5 bg-accent mx-auto mb-3" aria-hidden="true" />
              <p className="text-accent font-bold text-xl">{ex.months}</p>
              <p className="text-gray-500 text-xs">無料</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
