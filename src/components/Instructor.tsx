const credentials = [
  {
    icon: "🎓",
    label: "東京工業大学（現・東京科学大学）第4類工学部 2020年卒",
  },
  {
    icon: "💻",
    label: "学生時代からIT企業でアプリ開発の実務経験を積む",
  },
  {
    icon: "🚀",
    label: "新卒1年目から都内ベンチャーでPM兼エンジニア → 渋谷のIT企業でテックリード",
  },
  {
    icon: "🤖",
    label: "現在はAIエンジニアとして開発の最前線で活動中",
  },
  {
    icon: "🏢",
    label: "株式会社fan-mily 代表取締役",
  },
  {
    icon: "⚡",
    label: "自社に9体のAIエージェントを構築し、週45時間分の業務を自動化",
  },
];

const achievements = [
  {
    category: "大学講義",
    items: ["名桜大学 特別講師", "チェジュ大学 連携プログラム講師"],
  },
  {
    category: "行政連携",
    items: [
      "北九州市 DIG IT KITAQ コーディングコース講師（2年連続）",
      "浦添商業高校 DXハイスクール支援",
    ],
  },
  {
    category: "大学連携",
    items: [
      "東京科学大学×九州工業大学 合同ハッカソン 審査員",
      "LINEヤフー・Progate・ピクシブ等と並ぶ審査協力企業",
    ],
  },
  {
    category: "地域イベント",
    items: ["やんばるハッカソン 主催・運営"],
  },
];

export default function Instructor() {
  return (
    <section id="instructor" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            INSTRUCTOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            講師紹介
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            教科書を読み上げるのではなく、自分が毎日使っている技術を教えます。
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: Profile card */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="w-40 h-40 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-navy-900 to-forest flex items-center justify-center mb-6">
              <span className="text-5xl text-white font-black">M.H</span>
            </div>
            <h3 className="text-2xl font-black text-navy-900 mb-1">
              松田 秀彦
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Hidehiko Matsuda
            </p>
            <div className="space-y-2">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="shrink-0 text-base">{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Achievements & Message */}
          <div className="md:col-span-3 space-y-8">
            <div className="bg-navy-900/5 rounded-2xl p-6 sm:p-8">
              <p className="text-navy-900 font-medium leading-relaxed text-sm sm:text-base">
                「東工大を卒業後、PM・テックリード・AIエンジニアとして
                常に開発の最前線に立ってきました。今も毎日AIエージェントを
                構築し、運用し、改善しています。研修では、その実体験をもとに
                御社の業務課題を題材にして"動くシステム"を一緒に作ります。
                座学ではなく、隣に座って手を動かす研修です。」
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-navy-900 mb-4">
                教育・講演実績
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((group) => (
                  <div
                    key={group.category}
                    className="bg-gray-50 rounded-xl p-4"
                  >
                    <p className="text-xs font-bold text-accent mb-2 tracking-wide">
                      {group.category}
                    </p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-600 flex items-start gap-1.5"
                        >
                          <span className="text-accent mt-1 shrink-0">
                            ▸
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
