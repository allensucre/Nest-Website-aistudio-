import { useMemo } from 'react';
import { trackEvent } from '../lib/analytics';

const SOCIAL_CARD_TEMPLATES = [
  {
    id: 'launch_announcement',
    title: 'Public Beta is live',
    body: 'Save tabs as reusable context. Manual Install (Beta) is available now.',
  },
  {
    id: 'workflow_value',
    title: 'Save -> Snapshot -> Resume',
    body: 'Keep context reusable and resume work without rebuilding from scratch.',
  },
  {
    id: 'beta_transparency',
    title: 'Public Beta transparency',
    body: 'Manual Install (Beta) is live. Add to Chrome is coming soon.',
  },
];

export default function UpdatesPage() {
  const publishDate = useMemo(() => new Date('2026-03-26').toLocaleDateString(), []);

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-zinc-900 md:px-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Updates</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Content Engine Bootstrap</h1>
          <p className="max-w-2xl text-base text-zinc-600">
            Public Beta content system for blog, social cards, and launch video cover assets.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Latest blog</p>
              <h2 className="mt-1 text-2xl font-semibold">Nest Public Beta: Save tabs as reusable context</h2>
              <p className="mt-2 text-sm text-zinc-600">Published {publishDate}</p>
            </div>
            <a
              href="/updates/blog/public-beta"
              onClick={() =>
                trackEvent('blog_cta_click', {
                  source: 'updates_latest_blog',
                  target: '/updates/blog/public-beta',
                  label: 'Read article',
                })
              }
              className="inline-flex h-11 items-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Read article
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Social Card Template Zone</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {SOCIAL_CARD_TEMPLATES.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() =>
                  trackEvent('social_card_click', {
                    template_id: card.id,
                    section: 'updates_template_zone',
                  })
                }
                className="rounded-2xl border border-zinc-200 bg-white p-5 text-left hover:border-zinc-300"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Public Beta</p>
                <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-zinc-600">{card.body}</p>
                <p className="mt-4 text-xs text-zinc-500">Save -&gt; Snapshot -&gt; Resume</p>
                <p className="mt-2 text-xs font-medium text-zinc-700">Manual Install (Beta)</p>
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-2xl font-semibold">Video Cover Slot</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-[3fr_2fr]">
            <button
              type="button"
              onClick={() =>
                trackEvent('video_play', {
                  source: 'updates_video_cover_slot',
                  asset: 'public_beta_cover_placeholder',
                })
              }
              className="aspect-video rounded-xl border border-zinc-300 bg-gradient-to-br from-zinc-100 to-zinc-200 px-5 text-left"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Public Beta</p>
              <p className="mt-3 text-2xl font-semibold">Save tabs as reusable context.</p>
              <p className="mt-2 text-sm text-zinc-600">Manual Install (Beta)</p>
            </button>
            <div className="space-y-2 text-sm text-zinc-600">
              <p>Cover rule: keep one focal headline and one CTA.</p>
              <p>Required labels: Nest / Public Beta / Manual Install (Beta).</p>
              <p>Secondary note: Add to Chrome (coming soon).</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
