const steps = [
  {
    number: "01",
    icon: "🎓",
    phase: "研修",
    title: "知る・体験する",
    desc: "1〜5日間の集中研修でAIの基礎から業務自動化・アプリ開発まで実践的に習得。ハンズオン中心で「使える」状態になって終わる。",
    tags: ["1Day Light", "3Day Standard", "5Day Premium"],
    color: "border-sky-200 bg-sky-50",
    numberColor: "text-sky-600 bg-sky-100",
  },
  {
    number: "02",
    icon: "🤝",
    phase: "伴走支援",
    title: "実践・定着させる",
    desc: "研修後は月額サポートで継続的に伴走。「あの機能どう使うの？」「こんなことできる？」といった日々の疑問にSlack/Discordで即答。業務への組み込みを一緒に設計する。",
    tags: ["月次ヒアリング", "Slackサポート", "ツール選定・設定補助"],
    color: "border-accent/30 bg-accent/5",
    numberColor: "text-accent bg-accent/10",
    highlight: true,
  },
  {
    number: "03",
    icon: "🚀",
    phase: "内製化",
    title: "自走できる組織に",
    desc: "社内にAI推進担当者が育ち、自分たちで改善・展開できる状態を目指す。ツール運用フロー・研修資料・AIエージェントをすべて社内資産として引き渡す。",
    tags: ["社内推進者育成", "運用フロー整備", "AIエージェント引き渡し"],
    color: "border-forest/20 bg-forest/5",
    numberColor: "text-forest bg-forest/10",
  },
];

const supports = [
  { icon: "💬", label: "Slack/Discordで質問し放題", desc: "業務中に詰まったらすぐ聞ける" },
  { icon: "📅", label: "月次オンラインMTG", desc: "進捗確認・次の施策を一緒に設計" },
  { icon: "🤖", label: "AIエージェント構築サポート", desc: "自社業務に特化したBotを一緒に作る" },
  { icon: "📊", label: "費用対効果の可視化", desc: "削減時間・コスト削減を定期レポート" },
  { icon: "🔧", label: "ツール選定・設定補助", desc: "ChatGPT/Claude/Notionなど最適構成を提案" },
  { icon: "📚", label: "社内研修資料の整備", desc: "新入社員向けAIガイドラインも作成" },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            AI DX JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug mb-4">
            研修で終わらない。<br className="sm:hidden" />
            <span className="text-accent">DX定着まで伴走します。</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            多くのAI研修会社は「研修して終わり」。fan-milyは研修後の<strong className="text-navy-900">実践・定着・内製化</strong>まで一貫してサポートします。
          </p>
        </div>

        {/* Journey steps */}
        <div className="relative mb-16">
          {/* Connector line - desktop */}
          <div className="hidden sm:block absolute top-14 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-sky-200 via-accent/30 to-forest/20 z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`rounded-2xl border-2 p-7 ${step.color} ${step.highlight ? "shadow-lg" : ""}`}
              >
                {step.highlight && (
                  <div className="inline-block bg-accent text-navy-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    fan-milyの強み
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-black text-sm ${step.numberColor}`}>
                    {step.number}
                  </span>
                  <div>
                    <span className="text-xs text-gray-400 block">{step.phase}</span>
                    <span className="text-lg">{step.icon}</span>
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-4">{step.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span key={tag} className="inline-block bg-white/70 text-gray-600 text-xs px-2 py-1 rounded-full border border-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support contents */}
        <div className="bg-gradient-to-br from-navy-900 to-forest rounded-2xl p-8 sm:p-10">
          <h3 className="text-white font-bold text-xl mb-2">伴走支援に含まれるサポート内容</h3>
          <p className="text-white/60 text-sm mb-8">研修修了後も継続的に伴走。月額サポートプランで提供。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supports.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <span className="text-2xl block mb-2">{s.icon}</span>
                <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
                <p className="text-white/60 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
