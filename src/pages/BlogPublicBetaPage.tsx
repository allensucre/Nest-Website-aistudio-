import { useEffect } from 'react';
import { trackEvent } from '../lib/analytics';

const useCases = [
  {
    title: 'Research synthesis',
    description: 'Keep papers, docs, and issue threads in one reusable context package.',
  },
  {
    title: 'Debug sessions',
    description: 'Resume a multi-tab debug context without retracing links and logs.',
  },
  {
    title: 'Weekly review',
    description: 'Save recurring analysis context and continue faster every week.',
  },
];

const Figure = ({ title, ratio }: { title: string; ratio: 'wide' | 'card' }) => (
  <div
    className={`rounded-xl border border-zinc-200 bg-zinc-50 text-sm text-zinc-500 ${
      ratio === 'wide' ? 'aspect-video' : 'aspect-[4/3]'
    } flex items-center justify-center`}
  >
    {title}
  </div>
);

export default function BlogPublicBetaPage() {
  useEffect(() => {
    trackEvent('blog_open', {
      slug: 'public-beta',
      title: 'Nest Public Beta: Save tabs as reusable context',
    });
  }, []);

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-zinc-900 md:px-10">
      <article className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Public Beta</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Nest Public Beta: Save tabs as reusable context
          </h1>
          <p className="text-lg text-zinc-600">
            Nest helps you Save related tabs, build a Snapshot, and Resume work without rebuilding context.
            Manual Install (Beta) is available now. Add to Chrome is coming soon.
          </p>
          <Figure title="Hero Visual (16:9)" ratio="wide" />
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="text-zinc-700">
            Browser work often breaks when context is scattered across many tabs. You can find links again, but you
            lose the decision path behind them. That rebuild cost slows everything down.
          </p>
          <Figure title="Problem Visual (4:3): tab chaos vs organized context" ratio="card" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Workflow</h2>
          <p className="text-zinc-700">
            Nest keeps the workflow simple and reusable: <strong>Save -&gt; Snapshot -&gt; Resume</strong>.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-zinc-700">
            <li>Save: capture related tabs into one context unit.</li>
            <li>Snapshot: keep a structured summary view for quick understanding.</li>
            <li>Resume: reopen the same context when you need to continue.</li>
          </ul>
          <Figure title="Workflow Visual (16:9): Save -> Snapshot -> Resume" ratio="wide" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Use Cases</h2>
          <p className="text-zinc-700">
            Public Beta is best for repeated browser workflows where context continuity matters.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-4">
                <Figure title={`${item.title} visual (1:1)`} ratio="card" />
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <h2 className="text-2xl font-semibold">Public Beta CTA</h2>
          <p className="text-zinc-700">
            Start with <strong>Manual Install (Beta)</strong>. <strong>Add to Chrome</strong> is marked as{' '}
            <strong>coming soon</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#install"
              onClick={() =>
                trackEvent('blog_cta_click', {
                  slug: 'public-beta',
                  label: 'Manual Install (Beta)',
                  target: '/#install',
                })
              }
              className="inline-flex h-11 items-center rounded-xl bg-zinc-900 px-5 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Manual Install (Beta)
            </a>
            <a
              href="/#waitlist"
              onClick={() =>
                trackEvent('blog_cta_click', {
                  slug: 'public-beta',
                  label: 'Add to Chrome (coming soon)',
                  target: '/#waitlist',
                })
              }
              className="inline-flex h-11 items-center rounded-xl border border-zinc-300 px-5 text-sm font-semibold text-zinc-700 hover:bg-white"
            >
              Add to Chrome (coming soon)
            </a>
          </div>
          <Figure title="CTA Visual (16:9): install guidance" ratio="wide" />
        </section>
      </article>
    </main>
  );
}
