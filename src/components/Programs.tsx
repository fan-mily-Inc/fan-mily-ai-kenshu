export default function Programs() {
  return (
    <section id="programs" className="py-20 sm:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            3つの研修プログラム
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Program 1: AI Agent */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-navy-900 to-forest p-6 sm:p-8">
              <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                PROGRAM 1
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                AI社員構築研修
              </h3>
              <p className="text-white/80 text-sm">
                Claudeを核とした「AIエージェント」のインフラ構築から運用まで
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    1
                  </span>
                  Communication
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Slack", "Discord", "LINE", "Email"].map((tool) => (
                    <span
                      key={tool}
                      className="bg-light text-gray-700 text-xs px-3 py-1.5 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    2
                  </span>
                  AI Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Claude API x 自律実行",
                    "複数エージェント自律実行",
                    "セルフホスト",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="bg-forest/5 text-forest text-xs px-3 py-1.5 rounded-full border border-forest/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    3
                  </span>
                  20+ Connected Tools
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Slack", "Discord", "LINE", "Notion", "GitHub",
                    "Google Drive", "Gmail", "Sheets", "Jira", "Asana",
                    "Stripe", "HubSpot", "Postgres", "Supabase", "Zapier",
                    "Figma", "Salesforce", "Airtable",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="bg-gray-50 text-gray-500 text-[11px] px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    4
                  </span>
                  習得スキル
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "エージェント設計",
                    "マルチエージェント運用",
                    "MCP接続",
                    "プロンプトエンジニアリング",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Program 2: App Service */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-forest to-navy-800 p-6 sm:p-8">
              <span className="inline-block bg-accent/20 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                PROGRAM 2
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                アプリケーションサービス研修
              </h3>
              <p className="text-white/80 text-sm">
                エンジニア不要でサービスをゼロからリリース・保守運用
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-4">
                  開発プロセス
                </h4>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "要件定義",
                    "設計",
                    "実装",
                    "リリース",
                    "保守運用",
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="bg-forest/10 text-forest text-xs font-medium px-3 py-2 rounded-lg">
                        {step}
                      </span>
                      {i < 4 && (
                        <svg
                          className="w-4 h-4 text-gray-300 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3">
                  技術スタック
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-light rounded-lg p-4 text-center">
                    <p className="font-bold text-navy-900 text-sm">Next.js</p>
                    <p className="text-gray-500 text-xs mt-1">フロントエンド</p>
                  </div>
                  <div className="bg-light rounded-lg p-4 text-center">
                    <p className="font-bold text-navy-900 text-sm">Supabase</p>
                    <p className="text-gray-500 text-xs mt-1">バックエンド</p>
                  </div>
                  <div className="bg-light rounded-lg p-4 text-center">
                    <p className="font-bold text-navy-900 text-sm">Vercel</p>
                    <p className="text-gray-500 text-xs mt-1">デプロイ</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3">
                  開発手法
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-light rounded-lg p-4">
                    <span className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-navy-900 text-sm">
                        Vibe Coding
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        AIと対話しながら直感的にコードを生成
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-light rounded-lg p-4">
                    <span className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-bold text-navy-900 text-sm">
                        エンジニアノウハウ
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        プロの開発フローとベストプラクティスを習得
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program 3: AI活用マスター研修 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-accent/90 to-accent/70 p-6 sm:p-8">
              <span className="inline-block bg-navy-900/20 text-navy-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                PROGRAM 3
              </span>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                AI活用マスター研修
              </h3>
              <p className="text-navy-900/70 text-sm">
                エンジニア不要。現場スタッフがAIを使いこなすための実践プログラム
              </p>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    1
                  </span>
                  プロンプトエンジニアリング基礎
                </h4>
                <p className="text-gray-500 text-sm ml-8">
                  質問力を鍛える。AIに的確な指示を出し、望む結果を引き出す技術を習得
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    2
                  </span>
                  業務自動化設計
                </h4>
                <div className="flex flex-wrap gap-2 ml-8">
                  {["メール分類", "書類作成", "データ集計"].map((item) => (
                    <span
                      key={item}
                      className="bg-forest/5 text-forest text-xs px-3 py-1.5 rounded-full border border-forest/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    3
                  </span>
                  AIエージェント活用
                </h4>
                <p className="text-gray-500 text-sm ml-8">
                  AI秘書の構築と運用。日常業務をAIに任せる仕組みを作る
                </p>
              </div>

              <div>
                <h4 className="font-bold text-navy-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs" aria-hidden="true">
                    4
                  </span>
                  業種別ユースケース実践
                </h4>
                <div className="flex flex-wrap gap-2 ml-8">
                  {["医療", "農業", "製造", "サービス業"].map((item) => (
                    <span
                      key={item}
                      className="bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
