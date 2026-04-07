"use client";
import { useState } from "react";

const plans = [
  {
    id: "1day",
    label: "1Day",
    badge: "入門",
    badgeColor: "bg-sky-100 text-sky-700",
    title: "AI活用スターター研修",
    subtitle: "4時間 | 対面・オンライン対応",
    targetLabel: "対象",
    target: "非エンジニア・AI初心者・60代スタッフも歓迎",
    deliverable: "AIプロンプト集（自社業務特化版）",
    note: "※ 4時間のため人材開発支援助成金の対象外",
    noteColor: "text-amber-600",
    sessions: [
      {
        time: "9:00–10:30",
        theme: "AI基礎理解（丁寧な入門）",
        content: "生成AIとは何か・ChatGPT/Claude基礎操作・AI×業種別活用事例紹介（医療・飲食・小売・製造etc）。専門用語はすべて平易に解説",
        tag: "講義",
      },
      {
        time: "10:30–12:00",
        theme: "プロンプト設計ハンズオン",
        content: "スマホ・PC両対応。「役割設定・背景・出力形式」の型を使って自分でプロンプトを作る。1対1でフォロー",
        tag: "実習",
      },
      {
        time: "13:00–14:30",
        theme: "業務活用ハンズオン（60分）",
        content: "メール下書き・議事録要約・チラシ文案・問い合わせ対応テンプレートを実際にAIで生成。自社業務テーマで実践",
        tag: "実習",
      },
      {
        time: "14:30–16:00",
        theme: "自社プロンプト集を完成させる",
        content: "「明日から使えるプロンプト5本」を自分で作成。グループで発表・フィードバック。修了物として持ち帰り",
        tag: "演習",
      },
    ],
  },
  {
    id: "3day",
    label: "3Day",
    badge: "標準",
    badgeColor: "bg-accent/10 text-accent",
    title: "AI業務改革研修",
    subtitle: "12時間（4h×3日） | 対面・オンライン対応",
    targetLabel: "対象",
    target: "業務担当者・チームリーダー・バックオフィス担当",
    deliverable: "業務改善ロードマップ + 実動する自動化フロー1本",
    note: "✅ 人材開発支援助成金の対象（10時間以上）",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        day: "Day 1",
        theme: "AI基礎・ツール習得（ハンズオン中心）",
        content:
          "ChatGPT/Claude/Notion AI/画像生成AI基礎。プロンプトの型（役割・背景・制約・出力形式）。業種別AI活用事例（医療・介護・小売・製造・士業）ごとに30分ずつハンズオン",
        tag: "講義＋実習",
      },
      {
        day: "Day 2",
        theme: "業務自動化設計（実業務で試す）",
        content:
          "自社の業務フローを書き出し→AIで削減できる工程を特定。Notion/GoogleスプレッドシートへのAI組み込み。Zapier/Make でノーコード自動化フローを1本完成させる",
        tag: "実習",
      },
      {
        day: "Day 3",
        theme: "実装・業務改善計画・発表",
        content:
          "Day2で作った自動化フローを実業務データで動かす。チームごとに「3ヶ月AI活用ロードマップ」を策定。成果発表・相互フィードバック・修了証授与",
        tag: "演習＋発表",
      },
    ],
  },
  {
    id: "5day",
    label: "5Day",
    badge: "上級",
    badgeColor: "bg-navy-900/10 text-navy-900",
    title: "AI社内推進者育成研修",
    subtitle: "20時間（4h×5日） | 対面・オンライン対応",
    targetLabel: "対象",
    target: "IT担当者・DX推進担当・経営幹部",
    deliverable: "動くWebアプリ or AIエージェント + 全社AI推進計画書",
    note: "✅ 人材開発支援助成金の対象（10時間以上）",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        day: "Day 1",
        theme: "AI基礎・ツール習得（業種別ケース込み）",
        content:
          "ChatGPT/Claude/画像生成AI基礎。プロンプト設計の型。業種別AI活用事例（医療・製造・介護・士業・EC）を実際に手を動かしながら体験",
        tag: "講義＋実習",
      },
      {
        day: "Day 2",
        theme: "業務自動化設計（自社業務で実装）",
        content:
          "自社業務フローの棚卸し→削減工数を試算。Zapier/Make でノーコード自動化フロー完成。Notion AIデータベース・Googleスプレッドシート連携",
        tag: "実習",
      },
      {
        day: "Day 3",
        theme: "AIエージェント構築（Discordボット作成）",
        content:
          "Claude Code/Cursor の基礎操作。要件定義→プロンプト設計→Discordボット作成→動作確認まで1日で完結。AIエージェントの設計パターン解説",
        tag: "実習",
      },
      {
        day: "Day 4",
        theme: "Webアプリ開発入門（v0 + Supabase）",
        content:
          "v0.dev でUIを生成→Supabase でデータベース構築→Vercel でデプロイ。「社内在庫管理」「予約フォーム」などのテンプレートから選んで実装",
        tag: "実習",
      },
      {
        day: "Day 5",
        theme: "全社AI推進計画・発表・修了",
        content:
          "CI/CD・デプロイ基礎。「全社AIロードマップ（6ヶ月計画）」を策定。社内展開のコミュニケーション設計。成果発表・修了証授与",
        tag: "演習＋発表",
      },
    ],
  },
  {
    id: "10day",
    label: "10Day",
    badge: "専門家",
    badgeColor: "bg-purple-100 text-purple-700",
    title: "AI内製化エキスパート研修",
    subtitle: "40時間（4h×10日） | 対面・オンライン対応",
    targetLabel: "対象",
    target: "DX推進リーダー・社内AI推進担当者・エンジニア",
    deliverable: "本番稼働する社内ツール + 全社AI展開マニュアル + 社内研修資料一式",
    note: "✅ 人材開発支援助成金の対象（10時間以上）",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        day: "Day 1–3",
        theme: "AI基礎〜業務自動化（5Dayの前半と同様）",
        content: "AI基礎・ツール習得、業務自動化設計（Zapier/Make）、AIエージェント構築（Discordボット）",
        tag: "講義＋実習",
      },
      {
        day: "Day 4–5",
        theme: "Webアプリ開発・デプロイ（5Dayと同様）",
        content: "v0 + Supabase でWebアプリ構築、Vercel デプロイ、CI/CD パイプライン設定",
        tag: "実習",
      },
      {
        day: "Day 6–7",
        theme: "社内システム本格構築",
        content: "自社の実業務に特化したAIツールを設計・実装。認証・権限管理・外部API連携。セキュリティ要件・情報漏洩対策の実装",
        tag: "実習",
      },
      {
        day: "Day 8–9",
        theme: "組織へのAI展開設計",
        content: "Change Management（社員抵抗への対処法）、社内AI活用ガイドライン策定、新入社員向けAIオンボーディング資料作成、AI ROI測定フレームワーク設計",
        tag: "実習",
      },
      {
        day: "Day 10",
        theme: "最終発表・修了",
        content: "成果物デモ発表（動くシステム + マニュアル + 展開計画）。外部審査員（fan-mily）によるフィードバック。修了証授与・今後の伴走サポート説明",
        tag: "演習＋発表",
      },
    ],
  },
  {
    id: "20day",
    label: "20Day",
    badge: "最上位",
    badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500 text-white",
    title: "AI DX 変革リーダー育成研修",
    subtitle: "80時間（4h×20日） | 対面・オンライン対応",
    targetLabel: "対象",
    target: "経営幹部・CTO/CIO・AI統括責任者候補",
    deliverable: "完成した自社AIプロダクト + AI経営戦略書 + 社内育成体制一式",
    note: "✅ 人材開発支援助成金の対象（10時間以上）",
    noteColor: "text-forest font-semibold",
    sessions: [
      {
        day: "Day 1–5",
        theme: "AI推進者育成（5Day Premiumと同様）",
        content: "AI基礎・業務自動化・AIエージェント・Webアプリ開発・全社AI推進計画策定",
        tag: "講義＋実習",
      },
      {
        day: "Day 6–10",
        theme: "高度なAIエージェント・マルチエージェント設計",
        content: "複数AIエージェントの連携設計（Agent Hub）、Claude Code + Cursor 本格活用、プロンプト品質評価・改善手法、社内AIエージェントの設計パターン10選",
        tag: "実習",
      },
      {
        day: "Day 11–15",
        theme: "本番グレードWebアプリ・AIプロダクト開発",
        content: "要件定義→設計→実装→テスト→デプロイの完全サイクル。Next.js + Supabase + Stripe 決済連携。自社業務課題を解決するオリジナルAIプロダクトを完成させる",
        tag: "実習",
      },
      {
        day: "Day 16–18",
        theme: "セキュリティ・運用・監視・スケーリング",
        content: "本番環境のセキュリティ設計、ログ・監視・アラート設定（Sentry/Grafana）、スケーリング戦略、コスト最適化、障害対応フロー",
        tag: "実習",
      },
      {
        day: "Day 19–20",
        theme: "AI経営戦略・全社展開・最終発表",
        content: "AI経営戦略書の策定（競合優位性・投資対効果・ロードマップ）、全社AI人材育成計画、完成AIプロダクトのデモ発表、外部審査・修了証授与",
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
  "実習＋発表": "bg-green-50 text-green-700",
};

export default function Curriculum() {
  const [active, setActive] = useState("3day");
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
            プランごとに内容・ゴールが異なります
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
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
        <div className="bg-light rounded-2xl p-6 mb-8 flex flex-wrap items-start gap-4 justify-between">
          <div>
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${plan.badgeColor}`}>
              {plan.badge}
            </span>
            <h3 className="text-xl font-bold text-navy-900">{plan.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{plan.subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 mb-1">{plan.targetLabel}</p>
            <p className="text-sm font-medium text-navy-900">{plan.target}</p>
          </div>
        </div>

        {/* Sessions - Desktop */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 mb-6">
          <table className="w-full" role="table">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold w-28">
                  {plan.id === "1day" ? "時間" : "日程"}
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold w-48">
                  テーマ
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold">
                  内容
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-bold w-28">
                  形式
                </th>
              </tr>
            </thead>
            <tbody>
              {plan.sessions.map((s, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-light"}>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center justify-center min-w-[4rem] px-3 py-1.5 bg-accent/10 text-accent font-bold rounded-full text-xs">
                      {"time" in s ? s.time : s.day}
                    </span>
                  </td>
                  <td className="px-6 py-5 font-bold text-navy-900 text-sm">
                    {s.theme}
                  </td>
                  <td className="px-6 py-5 text-gray-600 text-sm">
                    {s.content}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[s.tag] ?? "bg-gray-100 text-gray-600"}`}>
                      {s.tag}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-navy-900 text-white">
                <td className="px-6 py-4" colSpan={3}>
                  <span className="font-bold text-sm">修了物</span>
                  <span className="text-white/70 text-sm ml-3">{plan.deliverable}</span>
                </td>
                <td className="px-6 py-4 text-center font-bold text-accent text-sm">
                  {plan.id === "1day" ? "4h" : plan.id === "3day" ? "12h" : "20h"}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Sessions - Mobile */}
        <div className="md:hidden space-y-4 mb-6">
          {plan.sessions.map((s, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block px-3 py-1.5 bg-accent/10 text-accent font-bold rounded-full text-xs">
                  {"time" in s ? s.time : s.day}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${tagColors[s.tag] ?? "bg-gray-100 text-gray-600"}`}>
                  {s.tag}
                </span>
              </div>
              <h3 className="font-bold text-navy-900 text-sm mb-2">{s.theme}</h3>
              <p className="text-gray-500 text-xs">{s.content}</p>
            </div>
          ))}
          <div className="bg-navy-900 rounded-xl p-5">
            <p className="text-white/60 text-xs mb-1">修了物</p>
            <p className="text-white text-sm font-medium">{plan.deliverable}</p>
          </div>
        </div>

        {/* Subsidy note */}
        <p className={`text-center text-sm ${plan.noteColor}`}>{plan.note}</p>
      </div>
    </section>
  );
}
