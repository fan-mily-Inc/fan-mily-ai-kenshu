/* eslint-disable @next/next/no-img-element */

const partners = [
  { name: "Anthropic (Claude)", src: "https://cdn.simpleicons.org/anthropic/d4a27f" },
  { name: "Supabase", src: "https://cdn.simpleicons.org/supabase" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Google Cloud", src: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Discord", src: "https://cdn.simpleicons.org/discord" },
  { name: "Notion", src: "https://cdn.simpleicons.org/notion/000000" },
  { name: "GitHub", src: "https://cdn.simpleicons.org/github/181717" },
];

export default function TechPartners() {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-gray-400 mb-8">
          TECHNOLOGY PARTNERS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((p) => (
            <img
              key={p.name}
              src={p.src}
              alt={p.name}
              title={p.name}
              width={28}
              height={28}
              className="opacity-40 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
