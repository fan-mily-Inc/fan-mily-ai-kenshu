"use client";
import { useState } from "react";

const plans = [
  {
    id: "aidx",
    label: "AIDX研修",
    badge: "中長期伴走",
    badgeColor: "bg-accent/10 text-accent",
    title: "AIDX研修プラン カリキュラム例",
    subtitle: "月額制・3ヶ月〜 | 対面＋オンライン",
    target: "全社員・経営層・バックオフィス担当",
    deliverable: "DX導入ロードマップ + 業務自動化フロー + AI運用体制",
    note: "✅ 人材開発支援助成金の対象",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        time: "Month 1",
        theme: "SNS基盤構築 + AI基礎研修",
        content:
          "SNSプラットフォーム開設・運用設計。AI基礎（ChatGPT/Claude）の操作研修。投稿文のAI生成フロー構築。スマホ撮影・編集の基礎",
        tag: "研修＋構築",
      },
      {
        time: "Month 2",
        theme: "業務自動化 + AI活用高度化",
        content:
          "動画内製化（CapCut）。AIデータ分析による投稿最適化。Zapier/Makeでノーコード業務自動化フロー構築。DM・問い合わせ対応の標準化",
        tag: "研修＋実装",
      },
      {
        time: "Month 3",
        theme: "AI自動接客 + バックオフィスDX",
        content:
          "LINE公式×AI相談窓口の構築。在庫DBとAIの連携。見積チェック・問い合わせ返信のAI自動化。自走化に向けた操作トレーニング",
        tag: "実装＋自走化",
      },
      {
        time: "Month 4〜",
        theme: "定着サポート + 継続改善",
        content:
          "月次モニタリング。AIシステムの精度調整。最新ツール・トレンドの共有。運用の形骸化防止とスタッフのスキルアップ支援",
        tag: "伴走",
      },
    ],
  },
  {
    id: "appdev",
    label: "アプリ開発研修",
    badge: "短期集中",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "アプリ開発研修プラン カリキュラム",
    subtitle: "5日間・20時間 | 全日程対面",
    target: "DX推進担当・IT担当・経営幹部",
    deliverable: "動くWebアプリ or AIエージェント + 全社AI推進計画書",
    note: "✅ 人材開発支援助成金の対象（10時間以上）",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        time: "Day 1",
        theme: "AI基礎・ツール習得",
        content:
          "ChatGPT/Claude/画像生成AI基礎。プロンプト設計の型。業種別AI活用事例を手を動かしながら体験",
        tag: "講義＋実習",
      },
      {
        time: "Day 2",
        theme: "業務自動化設計",
        content:
          "自社業務フローの棚卸し → AI削減工数を試算。Zapier/Makeでノーコード自動化フローを完成させる",
        tag: "実習",
      },
      {
        time: "Day 3",
        theme: "AIエージェント構築",
        content:
          "Claude Codeの基礎操作。要件定義→プロンプト設計→Discordボット作成→動作確認まで1日で完結",
        tag: "実習",
      },
      {
        time: "Day 4",
        theme: "Webアプリ開発",
        content:
          "v0.devでUI生成→SupabaseでDB構築→Vercelでデプロイ。社内ツールや予約フォームなどを実装",
        tag: "実習",
      },
      {
        time: "Day 5",
        theme: "AI推進計画・発表・修了",
        content:
          "全社AIロードマップ（6ヶ月計画）を策定。成果発表・相互フィードバック。修了証授与",
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
  "研修＋構築": "bg-blue-50 text-blue-700",
  "研修＋実装": "bg-green-50 text-green-700",
  "実装＋自走化": "bg-green-50 text-green-700",
  伴走: "bg-amber-50 text-amber-700",
};

export default function Curriculum() {
  const [active, setActive] = useState("aidx");
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
            プランに応じてカスタマイズ可能です
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-10">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
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
          <p className="text-white/60 text-xs mb-1">修了物・成果物</p>
          <p className="text-white text-sm font-medium">{plan.deliverable}</p>
        </div>

        <p className={`text-center text-sm ${plan.noteColor}`}>{plan.note}</p>
      </div>
    </section>
  );
}
