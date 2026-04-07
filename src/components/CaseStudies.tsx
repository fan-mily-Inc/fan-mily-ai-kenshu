/* eslint-disable @next/next/no-img-element */

const serviceIcons: Record<string, { name: string; src: string }> = {
  gmail: { name: "Gmail", src: "https://cdn.simpleicons.org/gmail" },
  sheets: { name: "Google Sheets", src: "https://cdn.simpleicons.org/googlesheets" },
  drive: { name: "Google Drive", src: "https://cdn.simpleicons.org/googledrive" },
  discord: { name: "Discord", src: "https://cdn.simpleicons.org/discord" },
  notion: { name: "Notion", src: "https://cdn.simpleicons.org/notion/000000" },
  supabase: { name: "Supabase", src: "https://cdn.simpleicons.org/supabase" },
  claude: { name: "Claude AI", src: "https://cdn.simpleicons.org/anthropic/d4a27f" },
  gemini: { name: "Gemini", src: "https://cdn.simpleicons.org/googlegemini" },
  freee: { name: "freee", src: "https://cdn.simpleicons.org/cashapp" },
  github: { name: "GitHub", src: "https://cdn.simpleicons.org/github/181717" },
  vercel: { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/000000" },
  nextjs: { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000" },
  slack: { name: "Slack", src: "https://cdn.simpleicons.org/slack" },
  plaud: { name: "Plaud AI", src: "https://cdn.simpleicons.org/simpleanalytics" },
};

export default function CaseStudies() {
  const cases = [
    {
      category: "経理・会計",
      items: [
        {
          title: "メール→請求書の自動分類・仕訳",
          before: "週50〜100通のメールを手作業で分類・入力（2〜3時間/週）",
          after: "AIが自動分類・仕訳入力。週次処理が完全自動化",
          timeReduction: "週2〜3時間削減",
          services: ["gmail", "gemini", "sheets", "drive"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          ),
        },
        {
          title: "支払いリマインド自動通知",
          before: "Excelで手動管理。支払い漏れや遅延のリスク",
          after: "毎朝自動で未払い・期日7日前を通知。支払い漏れゼロに",
          timeReduction: "月2〜3時間削減",
          services: ["supabase", "discord", "claude"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          ),
        },
        {
          title: "銀行照合の自動マッチング",
          before: "毎日30〜60分かけて手動で突き合わせ",
          after: "AIが自動照合。90%以上が人手なしで一致",
          timeReduction: "週3.5〜7時間削減",
          services: ["freee", "supabase", "claude"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
            </svg>
          ),
        },
        {
          title: "紙書類のAI自動読み取り・分類",
          before: "スキャン→手動で読んで→手動で分類・保存",
          after: "AIが画像を読み取り→自動分類→Driveに格納→タスク化",
          timeReduction: "週2〜4時間削減",
          services: ["drive", "gemini", "notion"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "会議・コミュニケーション",
      items: [
        {
          title: "議事録の完全自動化",
          before: "会議後に20〜40分かけて手動で要約・タスク抽出",
          after: "音声→文字起こし→AI要約→アクションアイテム自動抽出→タスク自動登録",
          timeReduction: "週3〜5時間削減",
          services: ["plaud", "gmail", "claude", "notion"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
          ),
        },
        {
          title: "AI/DX朝刊の自動配信",
          before: "毎朝20分かけてニュースサイトを巡回",
          after: "AIが業界ニュースを収集・要約し、毎朝自動配信",
          timeReduction: "週1.5時間削減",
          services: ["claude", "discord", "notion"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "業務オペレーション",
      items: [
        {
          title: "メールトリアージの自動化",
          before: "1日50通×5〜10分。数時間かけて分類・対応振り分け",
          after: "5分間隔で自動分類→タスク化→スパム削除。完全ハンズフリー",
          timeReduction: "週5〜10時間削減",
          services: ["gmail", "claude", "supabase", "discord"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
          ),
        },
        {
          title: "勤怠管理Botによる自動集計",
          before: "手動で出退勤記録→Excel集計→給与計算",
          after: "チャットで打刻→プロジェクト別労務費を自動集計→給与連携",
          timeReduction: "月10時間削減",
          services: ["discord", "supabase", "sheets"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "ナレッジ・開発",
      items: [
        {
          title: "専属AI秘書によるナレッジ共有",
          before: "「誰に聞けばいい？」が分からず、属人化した知識が散逸",
          after: "各社員に専属AI秘書。社内ナレッジに即アクセス、属人化を解消",
          timeReduction: "週3〜5時間削減",
          services: ["claude", "discord", "notion", "supabase"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          ),
        },
        {
          title: "セキュアなAIアプリ開発",
          before: "外部ツールに社内コードを貼る不安。開発品質のばらつき",
          after: "自社サーバー上でAIが安全にコード生成・レビュー・テストを自動実行",
          timeReduction: "週5〜10時間削減",
          services: ["claude", "github", "vercel", "nextjs", "supabase"],
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section id="cases" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-snug">
            自社導入で実証済みの成果
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            fan-milyが自社にAIエージェントを導入し、実際に解決した課題の一覧です。
            <br className="hidden sm:block" />
            研修では、これらと同等の仕組みを御社向けに構築します。
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-accent rounded-full" />
                {group.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-light rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <h4 className="font-bold text-navy-900 text-base">
                            {item.title}
                          </h4>
                          {item.timeReduction && (
                            <span className="flex-shrink-0 inline-block bg-accent text-navy-900 text-xs font-black px-2.5 py-1 rounded-full whitespace-nowrap">
                              ⏱ {item.timeReduction}
                            </span>
                          )}
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="flex-shrink-0 text-red-400 font-bold text-xs mt-0.5">
                              BEFORE
                            </span>
                            <p className="text-gray-500">{item.before}</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="flex-shrink-0 text-emerald-500 font-bold text-xs mt-0.5">
                              AFTER
                            </span>
                            <p className="text-navy-900 font-medium">
                              {item.after}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
                          <span className="text-gray-400 text-xs mr-1">連携:</span>
                          {item.services.map((svc) => {
                            const s = serviceIcons[svc];
                            if (!s) return null;
                            return (
                              <img
                                key={svc}
                                src={s.src}
                                alt={s.name}
                                title={s.name}
                                width={18}
                                height={18}
                                className="opacity-60 hover:opacity-100 transition-opacity"
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-forest rounded-2xl p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-accent mb-2">
                45
                <span className="text-lg font-bold">時間/週</span>
              </div>
              <p className="text-white/70 text-sm">AIが自動化する業務量</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-accent mb-2">
                18<span className="text-lg font-bold">以上</span>
              </div>
              <p className="text-white/70 text-sm">24/7 自動稼働ジョブ数</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-accent mb-2">
                9<span className="text-lg font-bold">体</span>
              </div>
              <p className="text-white/70 text-sm">
                専門特化AIエージェント
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
