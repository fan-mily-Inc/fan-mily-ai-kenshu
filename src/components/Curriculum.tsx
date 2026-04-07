"use client";
import { useState } from "react";

const plans = [
  {
    id: "1day",
    label: "1Day Light",
    badge: "入門",
    badgeColor: "bg-sky-100 text-sky-700",
    title: "AI活用スターター研修",
    subtitle: "4時間 | 対面・オンライン対応",
    target: "非エンジニア・AI初心者・60代スタッフも歓迎",
    deliverable: "AIプロンプト集（自社業務特化版）",
    note: "※ 4時間のため人材開発支援助成金の対象外",
    noteColor: "text-amber-600",
    sessions: [
      {
        time: "午前",
        theme: "AI基礎 + プロンプト設計",
        content:
          "生成AIとは何か・ChatGPT/Claude基礎操作。「役割設定・背景・出力形式」の型を使って自分でプロンプトを作る実践",
        tag: "講義＋実習",
      },
      {
        time: "午後",
        theme: "業務活用ハンズオン + プロンプト集完成",
        content:
          "メール下書き・議事録要約・チラシ文案をAIで生成。自社業務テーマで「明日から使えるプロンプト5本」を作成し持ち帰り",
        tag: "実習＋演習",
      },
    ],
  },
  {
    id: "5day",
    label: "3〜5Day Standard",
    badge: "おすすめ",
    badgeColor: "bg-accent/10 text-accent",
    title: "AI業務改革 + エージェント構築研修",
    subtitle: "12〜20時間 | 対面・オンライン対応",
    target: "業務担当者・チームリーダー・DX推進担当",
    deliverable: "動くシステム（自動化フロー or Webアプリ or AIエージェント）+ AI推進計画書",
    note: "✅ 人材開発支援助成金の対象（10時間以上）",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        time: "Day 1",
        theme: "AI基礎・ツール習得",
        content:
          "ChatGPT/Claude/画像生成AI基礎。プロンプト設計の型。業種別AI活用事例を実際に手を動かしながら体験",
        tag: "講義＋実習",
      },
      {
        time: "Day 2",
        theme: "業務自動化設計",
        content:
          "自社業務フローの棚卸し → AI削減工数を試算。Zapier/Make でノーコード自動化フローを完成させる",
        tag: "実習",
      },
      {
        time: "Day 3",
        theme: "AIエージェント構築",
        content:
          "Claude Code の基礎操作。要件定義→プロンプト設計→Discordボット作成→動作確認まで1日で完結",
        tag: "実習",
      },
      {
        time: "Day 4-5",
        theme: "Webアプリ開発 + 発表",
        content:
          "v0.dev でUI生成→Supabase DB構築→デプロイ。全社AIロードマップ策定。成果発表・修了証授与",
        tag: "実習＋発表",
      },
    ],
  },
  {
    id: "10day",
    label: "10〜20Day Expert",
    badge: "本格導入",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "AI内製化エキスパート研修",
    subtitle: "40〜80時間 | 対面・オンライン対応",
    target: "DX推進リーダー・社内AI統括・経営幹部",
    deliverable: "本番稼働AIシステム + AI展開マニュアル + 社内研修資料 + AI経営戦略書",
    note: "✅ 人材開発支援助成金の対象（10時間以上）",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        time: "Week 1",
        theme: "AI基礎〜AIエージェント構築",
        content:
          "Standardプランの全内容を実施。AI基礎・業務自動化・エージェント構築・Webアプリ開発",
        tag: "講義＋実習",
      },
      {
        time: "Week 2",
        theme: "社内システム本格構築",
        content:
          "自社業務に特化したAIツールの設計・実装。認証・権限管理・外部API連携。セキュリティ実装",
        tag: "実習",
      },
      {
        time: "Week 3",
        theme: "マルチエージェント + 本番プロダクト開発",
        content:
          "複数AIエージェントの連携設計。Next.js + Supabase + Stripe決済。本番グレードのAIプロダクト完成",
        tag: "実習",
      },
      {
        time: "Week 4",
        theme: "AI展開設計 + 経営戦略 + 発表",
        content:
          "Change Management・社内ガイドライン策定。AI経営戦略書の策定。成果物デモ発表・修了証授与",
        tag: "演習＋発表",
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  講義: "bg-blue-50 text-blue-700",
  実習: "bg-green-50 text-green-700",
  演習: "bg-purple-50 text-purple-700",
  "演習＋発表": "bg-purple-50 text-purple-700",
  "講義＋実習": "bg-blue-50 text-blue-700",
  "実習＋演習": "bg-green-50 text-green-700",
  "実習＋発表": "bg-green-50 text-green-700",
};

export default function Curriculum() {
  const [active, setActive] = useState("5day");
  const plan = plans.find((p) => p.id === active)!;

  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
            研修カリキュラム
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            プランに応じて日数・内容をカスタマイズできます
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                active === p.id
                  ? "bg-navy-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Plan header */}
        <div className="bg-light rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap items-start gap-4 justify-between">
            <div>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${plan.badgeColor}`}>
                {plan.badge}
              </span>
              <h3 className="text-xl font-bold text-navy-900">{plan.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{plan.subtitle}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">対象</p>
              <p className="text-sm font-medium text-navy-900">{plan.target}</p>
            </div>
          </div>
        </div>

        {/* Sessions */}
        <div className="space-y-4 mb-6">
          {plan.sessions.map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent font-bold rounded-full text-xs">
                  {s.time}
                </span>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[s.tag] ?? "bg-gray-100 text-gray-600"}`}>
                  {s.tag}
                </span>
              </div>
              <h4 className="font-bold text-navy-900 text-sm mb-2">{s.theme}</h4>
              <p className="text-gray-500 text-sm">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Deliverable */}
        <div className="bg-navy-900 rounded-xl p-5 mb-6">
          <p className="text-white/60 text-xs mb-1">修了物</p>
          <p className="text-white text-sm font-medium">{plan.deliverable}</p>
        </div>

        {/* Subsidy note */}
        <p className={`text-center text-sm ${plan.noteColor}`}>{plan.note}</p>
      </div>
    </section>
  );
}
