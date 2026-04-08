import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIKATA — 推しキャラを仕事の相方に",
  description:
    "秘書が欲しい・確定申告や領収書整理が面倒・案件管理が大変——あなたの押しキャラがAI同僚としてその仕事をやってくれます。",
};

/* ─────────────── shared components ─────────────── */

const AccentDot = () => (
  <span className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle" />
);

/* ─────────────── page ─────────────── */

export default function AikataPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-forest/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <p className="text-accent font-semibold text-xs sm:text-sm tracking-widest mb-8 uppercase">
            AI秘書サービス — <ruby>AIKATA<rt>アイカタ</rt></ruby>
          </p>

          {/* Character images */}
          <div className="flex justify-center gap-3 sm:gap-5 mb-10 flex-wrap">
            {[
              { src: '/characters/ryoma.jpg', label: '坂本龍馬' },
              { src: '/characters/ieyasu.jpg', label: '徳川家康' },
              { src: '/characters/shotoku.jpg', label: '聖徳太子' },
              { src: '/characters/fukuzawa.jpg', label: '福沢諭吉' },
              { src: '/characters/shoin.jpg', label: '吉田松陰' },
              { src: '/characters/anime-hero.png', label: 'AI勇者' },
              { src: '/characters/anime-girl.png', label: 'AIアシスタント' },
              { src: '/characters/anime-sage.png', label: 'AI賢者' },
            ].map((c) => (
              <div key={c.src} className="flex flex-col items-center gap-1.5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/25 bg-white/10 shadow-lg">
                  <img src={c.src} alt={c.label} className="w-full h-full object-cover object-center" />
                </div>
                <span className="text-white/50 text-xs">{c.label}</span>
              </div>
            ))}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
            推しキャラを<br /><ruby className="text-accent" style={{rubyAlign: 'center'}}>AIKATA<rt style={{fontSize: '0.35em', fontWeight: 600, letterSpacing: '0.2em', color: 'inherit'}}>アイカタ</rt></ruby>にしませんか？
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["初期費用25,000円〜", "月額5,000円〜", "Slack / LINE / Discord 対応", "事前登録は無料"].map((tag) => (
              <span
                key={tag}
                className="bg-white/10 border border-white/20 text-white/80 text-xs sm:text-sm px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="inline-block bg-accent hover:bg-accent-light text-navy-900 font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
            >
              事前登録する（無料）
            </a>
            <a
              href="#features"
              className="inline-block bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full transition-all"
            >
              サービスを見る
            </a>
          </div>

          <div className="mt-16 animate-bounce" aria-hidden="true">
            <svg className="w-7 h-7 mx-auto text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="py-20 sm:py-28 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">PAIN</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
              一人社長・フリーランスのあるある
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>朝起きてメールを開けば、未読が30件。</p>
            <p>税理士に渡す資料は、まだ作っていない。</p>
            <p>案件Aの納期は明日で、案件Bのクライアントから催促が来ている。</p>
            <p>そして気づけば、もう夜の11時。</p>
          </div>

          <div className="mt-10 text-center space-y-3">
            <p className="text-gray-500 text-base sm:text-lg">
              「人を雇うほどじゃない」<br />
              「でも、一人じゃもう限界」
            </p>
            <p className="text-navy-900 font-bold text-lg sm:text-xl mt-6">
              そんなあなたに必要なのは、ツールじゃありません。<br />
              <span className="text-accent">"一緒に働いてくれる誰か" </span>です。
            </p>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">SOLUTION</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
              アイカタは、ツールじゃない。<br /><span className="text-accent">"同僚"</span> です。
            </h2>
          </div>

          <div className="bg-gradient-to-br from-navy-900 to-forest rounded-2xl p-8 sm:p-12 text-white text-center mb-10">
            <p className="text-lg sm:text-xl leading-relaxed font-medium">
              話しかけるだけで動いてくれる、あなた専用のAI社員。<br className="hidden sm:block" />
              しかも——あなたが<span className="text-accent font-bold">愛着を持てるキャラクター</span>として、<br className="hidden sm:block" />
              毎日 Discord や Slack の中であなたを待っています。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { emoji: "⚔️", title: "歴史上の偉人の知性", desc: "坂本龍馬、織田信長、紫式部…現代の働き方に再解釈した偉人が部下になる" },
              { emoji: "🎭", title: "オリジナルキャラの世界観", desc: "あなたがカスタマイズしたオリジナルキャラを作成。" },
              { emoji: "✨", title: "あなたが「会いたい」と思える", desc: "毎朝 PC を開くのが楽しくなる、そんな存在を目指しています" },
            ].map((item) => (
              <div key={item.title} className="bg-light rounded-xl p-6">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-navy-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENCE ── */}
      <section className="py-20 sm:py-28 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">WHY AIKATA</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
              他のサービスとの違い
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-5xl mb-5">🗄️</div>
              <h3 className="font-bold text-navy-900 text-lg mb-3">あなた専用のDB構築</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                汎用AIとは違い、あなたのビジネス情報をあなただけのデータベースとして蓄積。使えば使うほど、あなたの仕事を深く理解する秘書に育ちます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-5xl mb-5">🎭</div>
              <h3 className="font-bold text-navy-900 text-lg mb-3">機械的なAI秘書ではなく<br />好きなキャラと仕事ができる</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                「また話しかけたい」と思える存在と働く。愛着があるキャラが秘書になるから、毎日の仕事が少し楽しくなります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">STORY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-10 leading-snug">
            なぜ、私たちは<br /><span className="text-accent">"キャラ"</span> にこだわるのか
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 text-left space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>仕事は、楽しくあるべきだと思っています。</p>
            <p>効率化のためだけにAIを使うのは、もったいない。</p>
            <blockquote className="border-l-4 border-accent pl-6 text-navy-900 font-medium italic">
              「おはようございます。今日のメール、整理しておきました」<br />
              朝、そう声をかけてくれる存在がいるだけで、一日の始まり方が変わる。
            </blockquote>
            <p>
              アイカタは、生産性ツールであると同時に、<br />
              あなたの仕事を <span className="text-accent font-bold">物語に変える</span> サービスです。
            </p>
            <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
              fan-mily は、沖縄北部・名護から生まれた "IT国士を育む" カンパニー。教育と地域DXを軸に、人とテクノロジーの関係を再設計しています。
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">FEATURES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
              あなたのアイカタができること
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "📨",
                title: "メール秘書",
                desc: "受信トレイを毎朝チェックし、優先順位をつけて報告。重要なメールには返信下書きまで用意。",
              },
              {
                icon: "📊",
                title: "バックオフィス補助",
                desc: "領収書の整理、経費の分類、労務関連の書類整理。税理士・社労士に渡す前段階をぜんぶ。",
              },
              {
                icon: "📋",
                title: "案件・タスク管理",
                desc: "プロジェクトごとに進捗を記録し、締切を見守ります。「あの案件、どうなってたっけ?」がもう起きません。",
              },
              {
                icon: "💰",
                title: "補助金・助成金ウォッチ",
                desc: "あなたの事業に使えそうな補助金・助成金をAIが毎日スキャン。「これ、申請できますよ」と教えてくれます。",
              },
              {
                icon: "🛠️",
                title: "開発エージェント（オプション）",
                desc: "GitHub・Notion・Supabase などとの連携で、あなた専用のダッシュボードまで作れる上位機能。",
                optional: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-light rounded-2xl p-6 flex gap-4 items-start ${item.optional ? "sm:col-span-2" : ""}`}
              >
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-navy-900 text-base mb-1">
                    {item.title}
                    {item.optional && (
                      <span className="ml-2 text-xs font-normal text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        オプション
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="py-20 sm:py-28 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">HOW TO START</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
              たったの3ステップで、<br />あなたの部下が動き出します
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "事前登録する",
                desc: "メールアドレスを登録するだけ。サービス開始時にご案内します。",
              },
              {
                step: "02",
                title: "部下を選ぶ",
                desc: 'キャラクターラインナップから、あなたの "相方" を選びます。歴史上の偉人、オリジナルキャラ、何でもどうぞ。',
              },
              {
                step: "03",
                title: "つなぐ・話しかける",
                desc: "Discord または Slack に招待。あとは話しかけるだけ。Google・Notion との連携も画面の指示に従うだけで完了。",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent text-navy-900 font-black text-lg rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">USE CASES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              こんな使い方をしている人がいます
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: "デザイナー A さん",
                quote: '朝、Discordを開くと部下がメールの要約を出してくれている。「重要なのは2件です」って言ってくれるだけで、1日のスタートがめちゃくちゃ楽になりました',
              },
              {
                role: "エンジニア B さん",
                quote: "請求書の発行と入金チェックを全部任せています。もう経理の日を作らなくていい。それだけで月10時間浮いた",
              },
              {
                role: "コンサル C さん",
                quote: "補助金情報を毎週まとめてくれる。クライアント提案のネタが切れません",
              },
            ].map((item) => (
              <div key={item.role} className="bg-light rounded-2xl p-6 flex flex-col">
                <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
                  「{item.quote}」
                </blockquote>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            ※ 上記はサービス想定ユースケースです。実体験に基づくものではありません。
          </p>
        </div>
      </section>

      {/* ── CHARACTER LINEUP ── */}
      <section className="py-20 sm:py-28 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">CHARACTERS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug">
            あなたが選べる "相方"
          </h2>
          <p className="text-white/60 text-sm mb-12">
            事前登録者にはDiscordで先行公開します
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🎭",
                title: "オリジナルキャラ",
                sub: "あなたが作るオリジナルキャラ",
                desc: "独自世界観の中から、あなたの相棒を。詳細は事前登録者にDiscordで先行公開。",
                badge: "先行公開",
              },
              {
                icon: "📜",
                title: "歴史上の偉人シリーズ",
                sub: "パブリックドメイン",
                desc: "坂本龍馬、織田信長、紫式部 ほか。パブリックドメインの偉人を現代の働き方に再解釈。",
              },
              {
                icon: "🎨",
                title: "カスタムキャラ",
                sub: "上位プラン",
                desc: "あなたの好みに合わせて、性格・口調・世界観を一緒に設計します。",
                badge: "上位プラン",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 text-left">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{item.icon}</span>
                  {item.badge && (
                    <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-white text-base mb-0.5">{item.title}</h3>
                <p className="text-white/40 text-xs mb-3">{item.sub}</p>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-xs mt-8">
            ⚠️ 既存の漫画・アニメキャラクターの提供はありません。著作権のある作品の二次利用は行いません。
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">PRICING</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
              シンプルな、ひとつのプランから
            </h2>
          </div>

          {/* Base plan */}
          <div className="bg-light rounded-2xl border-2 border-accent p-8 sm:p-10 mb-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <h3 className="text-xl font-bold text-navy-900">ベースプラン</h3>
              <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full font-semibold">おすすめ</span>
            </div>
            <div className="flex flex-wrap gap-8 mb-6">
              <div>
                <p className="text-gray-400 text-xs mb-1">初期構築費（1回のみ）</p>
                <p className="text-3xl font-black text-navy-900">¥25,000</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">月額利用料</p>
                <p className="text-3xl font-black text-navy-900">¥5,000<span className="text-base font-normal text-gray-400">/月</span></p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "キャラクター1体",
                "標準4機能（メール / バックオフィス / タスク管理 / 補助金ウォッチ）",
                "Discord または Slack 連携",
                "マニュアル・テンプレートの提供",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <AccentDot />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4">
              セルフサーブ型のため、サポートMTGはオプションでのご提供となります。
            </p>
          </div>

          {/* Options */}
          <div className="bg-light rounded-2xl border border-gray-100 p-8">
            <h3 className="font-bold text-navy-900 mb-4">サポートオプション</h3>
            <div className="space-y-3 text-sm">
              {[
                { name: "月次サポート顧問", price: "¥10,000/月", desc: "月120分MTG＋チャット質問対応" },
                { name: "キャラクター追加", price: "¥5,000〜20,000/件", desc: "" },
                { name: "MCP連携追加（Notion / GitHub 等）", price: "¥5,000〜20,000/件", desc: "" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-4 py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium text-navy-900">{item.name}</p>
                    {item.desc && <p className="text-xs text-gray-400">{item.desc}</p>}
                  </div>
                  <p className="font-bold text-navy-900 shrink-0">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">よくある質問</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "AIの中身は何ですか?", a: "Anthropic社のClaudeを基盤として使用しています。世界最高水準の対話型AIです。" },
              { q: "自分のデータは安全ですか?", a: "お客様ごとにインスタンスを分離して運用します。データは原則として外部に出ません。" },
              { q: "プログラミングの知識は必要ですか?", a: "不要です。Discord/Slackの基本操作ができれば使えます。" },
              { q: "NotionやGoogleなどのツールと連携できますか?", a: "はい。主要なツールはMCP連携で対応可能です。詳細は事前登録者向けに順次公開します。" },
              { q: "解約はいつでもできますか?", a: "はい、月単位でいつでも解約可能です。違約金もありません。" },
              { q: "既存のキャラ（ワンピース・ナルトなど）は使えますか?", a: "著作権の関係で提供していません。代わりに、オリジナルキャラと歴史上の偉人をご用意しています。" },
              { q: "サービス開始はいつですか?", a: "事前登録者には、サービス開始時に最優先でご案内いたします。" },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-xl border border-gray-100 p-6">
                <p className="font-bold text-navy-900 text-sm mb-2">Q. {item.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="register" className="py-24 sm:py-32 bg-gradient-to-br from-navy-900 to-forest text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            一人で頑張る時代は、<br />もう終わりにしよう。
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8">
            あなたの部下が、あなたを待っています。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#"
              className="inline-block bg-accent hover:bg-accent-light text-navy-900 font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
            >
              事前登録する（無料・1分）
            </a>
          </div>

          <div className="bg-white/10 rounded-xl p-6 text-left text-sm text-white/80 space-y-2 max-w-sm mx-auto">
            <p className="font-semibold text-white mb-3">事前登録者の特典</p>
            {[
              "サービス開始時の優先案内",
              "オリジナルキャラ先行公開",
              "初期構築費の早期割引クーポン",
            ].map((item) => (
              <p key={item} className="flex items-center gap-2">
                <AccentDot />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-900 border-t border-white/5 py-10 text-center text-white/40 text-xs">
        <div className="max-w-4xl mx-auto px-4 space-y-1">
          <p className="font-bold text-white/60 text-sm mb-2">株式会社 fan-mily</p>
          <p>所在地：沖縄県名護市</p>
          <p>事業内容：IT教育・AI/DXコンサルティング・受託開発</p>
          <p className="mt-4 italic text-white/30">「IT国士を育む」——人とテクノロジーの新しい関係を、沖縄北部から。</p>
        </div>
      </footer>

    </div>
  );
}
