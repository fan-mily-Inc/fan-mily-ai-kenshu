"use client";
import { useState } from "react";

const modules = [
  {
    id: "accounting",
    icon: "💼",
    label: "経理・財務AI",
    hours: 4,
    desc: "仕訳自動化・銀行照合・経費精算・請求書処理",
    color: "border-blue-200 bg-blue-50",
    selectedColor: "border-blue-500 bg-blue-100 ring-2 ring-blue-300",
  },
  {
    id: "sales",
    icon: "📈",
    label: "営業・CRM AI",
    hours: 4,
    desc: "商談記録・提案書生成・フォローアップ自動化",
    color: "border-green-200 bg-green-50",
    selectedColor: "border-green-500 bg-green-100 ring-2 ring-green-300",
  },
  {
    id: "meeting",
    icon: "🎙️",
    label: "議事録・会議AI",
    hours: 2,
    desc: "音声→議事録→タスク自動抽出・配布",
    color: "border-purple-200 bg-purple-50",
    selectedColor: "border-purple-500 bg-purple-100 ring-2 ring-purple-300",
  },
  {
    id: "sns",
    icon: "📱",
    label: "SNS・マーケAI",
    hours: 4,
    desc: "投稿文生成・画像作成・コンテンツカレンダー・分析",
    color: "border-pink-200 bg-pink-50",
    selectedColor: "border-pink-500 bg-pink-100 ring-2 ring-pink-300",
  },
  {
    id: "hr",
    icon: "👥",
    label: "HR・勤怠AI",
    hours: 4,
    desc: "勤怠管理・給与計算・採用文書・1on1サポート",
    color: "border-orange-200 bg-orange-50",
    selectedColor: "border-orange-500 bg-orange-100 ring-2 ring-orange-300",
  },
  {
    id: "dev",
    icon: "🔧",
    label: "開発・ITインフラAI",
    hours: 8,
    desc: "AI駆動開発・コードレビュー・テスト自動化・Webアプリ構築",
    color: "border-gray-200 bg-gray-50",
    selectedColor: "border-gray-500 bg-gray-100 ring-2 ring-gray-400",
  },
  {
    id: "medical",
    icon: "🏥",
    label: "医療・介護AI",
    hours: 4,
    desc: "カルテ要約・シフト管理・患者対応FAQ・記録自動化",
    color: "border-red-200 bg-red-50",
    selectedColor: "border-red-500 bg-red-100 ring-2 ring-red-300",
  },
  {
    id: "manufacturing",
    icon: "🏗️",
    label: "製造・建設AI",
    hours: 4,
    desc: "現場日報・品質管理・見積書生成・安全点検記録",
    color: "border-yellow-200 bg-yellow-50",
    selectedColor: "border-yellow-500 bg-yellow-100 ring-2 ring-yellow-400",
  },
  {
    id: "data",
    icon: "📊",
    label: "データ分析AI",
    hours: 4,
    desc: "売上分析・KPIダッシュボード・予測モデル・レポート生成",
    color: "border-cyan-200 bg-cyan-50",
    selectedColor: "border-cyan-500 bg-cyan-100 ring-2 ring-cyan-300",
  },
  {
    id: "training",
    icon: "🎓",
    label: "社内育成・研修設計",
    hours: 4,
    desc: "オンボーディング資料・AIガイドライン・社内マニュアル作成",
    color: "border-indigo-200 bg-indigo-50",
    selectedColor: "border-indigo-500 bg-indigo-100 ring-2 ring-indigo-300",
  },
];

function calcPrice(hours: number): { inPerson: string; online: string; label: string } {
  // 1Day = 4h = 20万(対面)/15万(オンライン)
  const basePerHourInPerson = 50000; // 20万/4h
  const basePerHourOnline = 37500;   // 15万/4h
  const raw = hours * basePerHourInPerson;
  const rawOnline = hours * basePerHourOnline;
  // 10h以上は助成金対象
  const subsidy = hours >= 10;
  return {
    inPerson: `¥${(raw / 10000).toFixed(0)}万`,
    online: `¥${(rawOnline / 10000).toFixed(0)}万`,
    label: subsidy ? "助成金対象" : "助成金対象外",
  };
}

export default function Modules() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectedModules = modules.filter((m) => selected.includes(m.id));
  const totalHours = selectedModules.reduce((sum, m) => sum + m.hours, 0);
  const price = calcPrice(totalHours);
  const subsidyEligible = totalHours >= 10;

  return (
    <section id="modules" className="py-20 sm:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest mb-4">
            CUSTOM BUILD
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-snug mb-4">
            専門分野モジュールを<br className="sm:hidden" />
            組み合わせてプランを設計
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            御社の業務課題に合わせて、専門分野モジュールを自由に組み合わせ。
            クリックして選ぶだけで料金・助成金の目安がわかります。
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {modules.map((m) => {
            const isSelected = selected.includes(m.id);
            return (
              <button
                key={m.id}
                onClick={() => toggle(m.id)}
                className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                  isSelected ? m.selectedColor : m.color + " hover:shadow-md"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-5 h-5 bg-navy-900 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                )}
                <span className="text-2xl block mb-2">{m.icon}</span>
                <p className="font-bold text-navy-900 text-xs leading-tight mb-1">{m.label}</p>
                <p className="text-gray-500 text-xs">{m.hours}時間</p>
              </button>
            );
          })}
        </div>

        {/* Result panel */}
        <div className={`rounded-2xl p-6 sm:p-8 border-2 transition-all ${
          selected.length > 0
            ? "border-accent/40 bg-white shadow-lg"
            : "border-gray-200 bg-white"
        }`}>
          {selected.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-400 text-sm">上のモジュールをクリックして選んでください</p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-2">選択中のモジュール ({selected.length}件)</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedModules.map((m) => (
                    <span
                      key={m.id}
                      className="inline-flex items-center gap-1 bg-navy-900/10 text-navy-900 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {m.icon} {m.label}
                      <button
                        onClick={() => toggle(m.id)}
                        className="ml-0.5 text-gray-400 hover:text-red-500"
                        aria-label={`${m.label}を削除`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">合計</span>
                  <span className="text-2xl font-black text-navy-900">{totalHours}時間</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    subsidyEligible
                      ? "bg-green-50 text-forest"
                      : "bg-amber-50 text-amber-600"
                  }`}>
                    {subsidyEligible ? "✅ 助成金対象" : "✕ 助成金対象外（10h未満）"}
                  </span>
                </div>
                {selectedModules.map((m) => (
                  <p key={m.id} className="text-xs text-gray-400 mt-1 ml-1">
                    • {m.label}: {m.desc}
                  </p>
                ))}
              </div>

              <div className="flex-shrink-0 bg-light rounded-xl p-5 min-w-[200px] text-center">
                <p className="text-xs text-gray-400 mb-1">料金目安</p>
                <div className="mb-2">
                  <p className="text-xs text-gray-500">対面</p>
                  <p className="text-2xl font-black text-navy-900">{price.inPerson}<span className="text-sm font-normal text-gray-400">（税別）</span></p>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-500">オンライン</p>
                  <p className="text-xl font-black text-navy-900">{price.online}<span className="text-sm font-normal text-gray-400">（税別）</span></p>
                </div>
                <a
                  href="https://forms.gle/YTRHRpV1FMGRmGFc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-accent text-navy-900 font-bold text-sm py-2.5 px-4 rounded-xl hover:bg-accent/90 transition-colors"
                >
                  このプランで相談する
                </a>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          ※ 料金は目安です。詳細はヒアリング時にご提案します。人数・開催形式により変動します。
        </p>
      </div>
    </section>
  );
}
