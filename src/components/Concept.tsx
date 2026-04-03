export default function Concept() {
  return (
    <section id="concept" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
          CONCEPT
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-10 leading-snug">
          架空の課題ではなく、
          <br className="hidden sm:block" />
          御社が「いま実際に欲しいもの」を題材に
        </h2>

        <div className="bg-gradient-to-br from-navy-900 to-forest rounded-2xl p-8 sm:p-12 text-white mb-10">
          <p className="text-lg sm:text-xl leading-relaxed font-medium">
            教材はクライアント自身が構築したいプロダクト。
            <br className="hidden sm:block" />
            欲しいものを実際に開発しながらノウハウを習得するため、
            <br className="hidden sm:block" />
            研修終了時には
            <span className="text-accent font-bold">動くサービス</span>と
            <span className="text-accent font-bold">運用スキル</span>
            が同時に手に入る。
          </p>
        </div>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          研修の成果がそのまま実務に直結。
          <br />
          「学んだけど使えない」を根本から解消する、実践特化型のプログラムです。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: "実課題ベース",
              desc: "御社が本当に欲しいものを作る",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "即戦力",
              desc: "研修後すぐに実務で活用可能",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "助成金対応",
              desc: "最大67%の費用を助成金でカバー",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-light rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 text-accent rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
