const GradCapIcon = () => (
  <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v-3.75m0 0-2.25.75L12 16.5l7.5-4.5-2.25-.75" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

const credentials = [
  {
    Icon: GradCapIcon,
    label: "東京工業大学（現・東京科学大学）第4類工学部 2020年卒",
  },
  {
    Icon: CodeIcon,
    label: "学生時代からIT企業でアプリ開発の実務経験を積む",
  },
  {
    Icon: RocketIcon,
    label: "新卒1年目から都内ベンチャーでPM兼エンジニア → 渋谷のIT企業でテックリード",
  },
  {
    Icon: CpuIcon,
    label: "現在はAIエンジニアとして開発の最前線で活動中",
  },
  {
    Icon: BuildingIcon,
    label: "株式会社fan-mily 代表取締役",
  },
  {
    Icon: BoltIcon,
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
            <img
              src="/instructor.webp"
              alt="松田 秀彦"
              className="w-40 h-52 mx-auto md:mx-0 rounded-2xl object-cover object-top mb-6"
            />
            <h3 className="text-2xl font-black text-navy-900 mb-1">
              松田 秀彦
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Hidehiko Matsuda
            </p>
            <div className="space-y-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-2.5 text-sm text-gray-700"
                >
                  <c.Icon />
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
