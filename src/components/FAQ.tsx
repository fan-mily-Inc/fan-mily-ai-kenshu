"use client";

import { useState } from "react";

const faqs = [
  {
    q: "助成金は本当に使えますか？",
    a: "はい。人材開発支援助成金（OFF-JT）に対応しています。訓練計画届の提出から申請書類の準備まで、弊社が全面サポートいたします。過去の実績では、実質負担28万円で研修を受講いただけたケースもあります。",
  },
  {
    q: "IT知識がないスタッフでも大丈夫？",
    a: "大丈夫です。実際に60代のスタッフも研修対象となっています。特に「AI活用マスター研修」はコード不要で、普段パソコンを使った業務をされている方であればどなたでも受講いただけます。",
  },
  {
    q: "まず小さく試したい",
    a: "エントリープラン（月額5万円〜）でスモールスタートが可能です。まずは1つの業務をAI化し、効果を実感いただいてから段階的に拡大できます。",
  },
  {
    q: "研修後のフォローは？",
    a: "顧問サービス（月額5〜20万円）で伴走サポートを提供しています。研修で構築したシステムの運用支援、追加のAI化相談、トラブルシューティングなど、御社のペースに合わせて継続的に支援いたします。",
  },
  {
    q: "どの業種に対応していますか？",
    a: "医療・農業・IT・製造・サービス業など幅広い業種に対応しています。業種ごとの課題に合わせてカリキュラムをカスタマイズしますので、まずはお気軽にご相談ください。",
  },
  {
    q: "オンラインでも受講できますか？",
    a: "対面（出張研修）が基本スタイルです。実際に手を動かしながら学ぶ実践型研修のため、対面での実施を推奨しています。オンラインでの実施をご希望の場合は、個別にご相談ください。",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold text-white group-hover:text-accent transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-white/70 text-sm sm:text-base leading-relaxed pl-0 sm:pl-2">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-navy-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            よくあるご質問
          </h2>
        </div>

        <div className="divide-y divide-white/0">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
