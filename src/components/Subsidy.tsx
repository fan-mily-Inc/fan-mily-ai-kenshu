const steps = [
  {
    step: 1,
    title: "職業能力開発推進者の選任・届出",
    timeline: "研修2ヶ月前〜",
  },
  {
    step: 2,
    title: "事業内職業能力開発計画の作成",
    timeline: "研修2ヶ月前〜",
  },
  {
    step: 3,
    title: "訓練実施計画届の提出",
    timeline: "研修開始1ヶ月前必着",
  },
  {
    step: 4,
    title: "研修の実施（5日間・20時間）",
    timeline: "計画届提出後",
  },
  {
    step: 5,
    title: "支給申請書の提出",
    timeline: "研修終了後2ヶ月以内",
  },
  {
    step: 6,
    title: "労働局による審査",
    timeline: "申請後〜約3ヶ月",
  },
  {
    step: 7,
    title: "助成金の支給",
    timeline: "審査完了後",
  },
];

export default function Subsidy() {
  return (
    <section id="subsidy" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            SUBSIDY
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            人材開発支援助成金ガイド
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            一般訓練コース（OFF-JT）
          </p>
        </div>

        <div className="bg-light rounded-2xl p-6 sm:p-10">
          <h3 className="font-bold text-navy-900 text-lg mb-8 text-center">
            申請フロー（7ステップ）
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-0.5 bg-accent/20 hidden sm:block"
              aria-hidden="true"
            />

            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-4 sm:gap-6">
                  <div className="relative z-10 shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 bg-accent text-navy-900 font-bold rounded-full text-sm">
                      {s.step}
                    </span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 sm:p-5 border border-gray-100">
                    <h4 className="font-bold text-navy-900 text-sm mb-1">
                      {s.title}
                    </h4>
                    <p className="text-gray-500 text-xs">{s.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-accent/10 rounded-xl p-5 text-center">
            <p className="text-navy-900 text-sm font-medium">
              申請手続きもサポートいたします。お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
