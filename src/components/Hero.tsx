export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-forest/20 rounded-full blur-3xl" />
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSf6b4M57AwpNQmrbKEAQ1BRhct-gIiJtV89ITxXWvW2t9Qp5w/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent hover:bg-accent-light text-navy-900 font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
        >
          無料ヒアリングに申し込む
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
