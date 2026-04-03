export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-forest pt-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-forest/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-accent font-semibold text-sm sm:text-base tracking-widest mb-4">
          株式会社fan-mily / 法人向けDX・AI研修プログラム / 2026年度版
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
          AI実践研修プログラム
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium mb-10">
          欲しいものを作りながら学ぶ・5日間
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "人材開発支援助成金OFF-JT対応",
            "全日程・対面（出張研修）",
            "20時間",
            "IT未経験〜経営者対象",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block bg-accent hover:bg-accent-light text-navy-900 font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
        >
          無料相談を予約する
        </a>

        <div className="mt-16 animate-bounce">
          <svg
            className="w-8 h-8 mx-auto text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
