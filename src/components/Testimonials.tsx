const QuoteIcon = () => (
  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const StarFull = () => (
  <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => <StarFull key={i} />)}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-snug">
            受講者の声
          </h2>
          <p className="text-gray-500 text-sm">
            実際のアンケート回答より
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <QuoteIcon />
              </div>
              <div>
                <p className="text-navy-900 font-bold text-sm">株式会社カルナ</p>
                <p className="text-gray-400 text-xs">代表取締役 岩野雄介 様</p>
                <Stars count={4} />
              </div>
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
              「ChatGPTを使ってホームページをリニューアルしたいと思っています。今後は助成金申請・求人・集客など幅広い分野でAI活用を進めていきたい」
            </blockquote>
            <div className="bg-light rounded-lg px-3 py-2 text-xs text-gray-500">
              富士宮AI研修セミナー（2026年3月）・その後継続研修に関心
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <QuoteIcon />
              </div>
              <div>
                <p className="text-navy-900 font-bold text-sm">富士山白糸ファーム</p>
                <p className="text-gray-400 text-xs">あこ 様</p>
                <Stars count={4} />
              </div>
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
              「面白かったです！MCPの機能、即取り入れたいと思います。全然使いこなせていないので、もう少し勉強したいです！」
            </blockquote>
            <div className="bg-light rounded-lg px-3 py-2 text-xs text-gray-500">
              富士宮AI研修セミナー（2026年3月）・継続研修に興味あり
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <QuoteIcon />
              </div>
              <div>
                <p className="text-navy-900 font-bold text-sm">開発チームご担当者</p>
                <p className="text-gray-400 text-xs">AI駆動開発研修 受講者</p>
                <Stars count={5} />
              </div>
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
              「V0を使った構築は実体験ができて感動しました。要件の書き方次第で、できるものが相当変わってくると実感できました」
            </blockquote>
            <div className="bg-light rounded-lg px-3 py-2 text-xs text-gray-500">
              AI駆動開発バイブコーディング研修（2026年3月）・満足度5/5
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <QuoteIcon />
              </div>
              <div>
                <p className="text-navy-900 font-bold text-sm">IT担当者</p>
                <p className="text-gray-400 text-xs">AI駆動開発研修 受講者</p>
                <Stars count={5} />
              </div>
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">
              「AIで構築されたシステムの成功例・失敗例など実例を中心に聞けると参考になる。社内への AI研修展開も検討したい」
            </blockquote>
            <div className="bg-light rounded-lg px-3 py-2 text-xs text-gray-500">
              AI駆動開発バイブコーディング研修（2026年3月）・社内研修展開に関心
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
