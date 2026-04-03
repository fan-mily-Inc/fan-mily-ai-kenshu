const steps = [
  {
    step: 1,
    title: "無料相談のご予約",
    desc: "Zoom・対面対応",
  },
  {
    step: 2,
    title: "お見積書・研修プランのご提案",
    desc: "御社の課題に合わせたカスタマイズ",
  },
  {
    step: 3,
    title: "ご契約・日程確定",
    desc: "研修日程・会場の調整",
  },
  {
    step: 4,
    title: "訓練計画届の提出",
    desc: "研修開始1ヶ月前必着",
  },
  {
    step: 5,
    title: "研修実施（5日間）",
    desc: "対面での実践型研修",
  },
  {
    step: 6,
    title: "修了証・書類一式の受け取り",
    desc: "助成金申請に必要な書類をお渡し",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            FLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            お申込みの流れ
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <div key={s.step} className="relative flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <span className="flex items-center justify-center w-12 h-12 bg-navy-900 text-white font-bold rounded-full text-sm shrink-0 relative z-10">
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-navy-900/10 my-0" aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 pt-2">
                <h3 className="font-bold text-navy-900 text-base">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          id="contact"
          className="mt-12 bg-gradient-to-br from-navy-900 to-forest rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずは無料相談から
          </h3>
          <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
            御社の課題やご要望をお聞かせください。最適な研修プランをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:h.matsuda@fan-mily.com"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-navy-900 font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              メールで相談する
            </a>
            <span className="text-white/50 text-sm">
              h.matsuda@fan-mily.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
