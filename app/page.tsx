'use client';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

export default function Home(){
  const [mobilePreview, setMobilePreview] = useState(false);
  useEffect(() => {
    try {
      const qs = new URLSearchParams(window.location.search);
      setMobilePreview(qs.has('mobile'));
    } catch {}
  }, []);

  // fade-in on scroll (safe, tiny)
  if (typeof window !== 'undefined') {
    const onReady = () => {
      const cards = document.querySelectorAll<HTMLElement>('.reveal');
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('reveal-in')),
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
      );
      cards.forEach((el) => io.observe(el));
    };
    queueMicrotask(onReady);
  }

  return (
    <>
      {/* System font stack for reliability in prod + canvas */}
      <style jsx global>{`
        :root {
          --font-lexend: system-ui, -apple-system, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif;
          --font-inter: system-ui, -apple-system, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif;
        }
        .font-lexend { font-family: var(--font-lexend); }
        .font-inter { font-family: var(--font-inter); }
        /* reveal motion */
        .reveal { opacity: 0; transform: translateY(8px); transition: opacity .5s ease, transform .5s ease; }
        .reveal.reveal-in { opacity: 1; transform: translateY(0); }
        /* hide scrollbar cross-browser */
        .hide-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <div className={`font-inter min-h-screen bg-white text-neutral-900 ${mobilePreview ? 'mx-auto w-[390px] sm:w-[420px]' : ''}`}>
        {/* Top Bar */}
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-neutral-900 font-bold text-white">R</div>
            <span className="font-semibold tracking-tight text-[17px] sm:text-lg">Recommend</span>
          </div>
        </header>

        {/* Hero (mobile-first, compact) */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-5 px-4 pb-8 pt-2 sm:gap-10 sm:px-6 sm:pb-12 sm:pt-6 md:grid-cols-2 md:gap-14 md:pb-16 md:pt-14">
          <div className="flex flex-col justify-center">
            <div className="font-lexend">
              <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-tight sm:text-[34px] md:text-[44px]">
                <span className="block">Real recommendations.</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">From real people.</span>
              </h1>
            </div>

            <p className="mt-2 text-[15px] leading-relaxed text-neutral-600 sm:mt-3 sm:text-[16px] max-w-md">
              Discover food, movies, and travel you’ll actually love — shared by humans, not served by algorithms.
            </p>

            {/* Email Capture */}
            <form className="mt-4 flex w-full max-w-md flex-col gap-3 sm:mt-5 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-11 w-full flex-1 rounded-xl border border-neutral-200 bg-white px-4 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-400 focus:shadow"
              />
              <button
                type="button"
                className="h-11 w-full shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-white font-medium transition hover:opacity-95 active:scale-[0.99] sm:w-auto"
              >
                Join the waitlist
              </button>
            </form>
          </div>

          {/* Visual Cards */}
          <div className="relative">
            {/* Mobile: clean horizontal rail */}
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 md:hidden hide-scroll">
              <Card className="snap-start min-w-[88%]">
                <CardTitle>🍜 Food</CardTitle>
                <CardBody>“Bombay to Barcelona Café — get the orange cheesecake.”</CardBody>
                <CardFoot>Recommended by Aisha</CardFoot>
              </Card>
              <Card className="snap-start min-w-[88%]">
                <CardTitle>🎬 Movies</CardTitle>
                <CardBody>“Past Lives — tender, slow, unforgettable.”</CardBody>
                <CardFoot>Recommended by Raj</CardFoot>
              </Card>
              <Card className="snap-start min-w-[88%]">
                <CardTitle>✈️ Travel</CardTitle>
                <CardBody>“Gokarna — Kudle sunrise + Shack #3 breakfast.”</CardBody>
                <CardFoot>Recommended by Neha</CardFoot>
              </Card>
            </div>

            {/* Tablet/Desktop: layered composition */}
            <div className="relative hidden place-items-center md:grid">
              <div className="relative h-[300px] w-full max-w-[400px]">
                <Card className="absolute left-0 top-8 -rotate-6">
                  <CardTitle>🍜 Food</CardTitle>
                  <CardBody>“Bombay to Barcelona Café — get the orange cheesecake.”</CardBody>
                  <CardFoot>Recommended by Aisha</CardFoot>
                </Card>
                <Card className="absolute left-10 top-28 rotate-[5deg]">
                  <CardTitle>🎬 Movies</CardTitle>
                  <CardBody>“Past Lives — tender, slow, unforgettable.”</CardBody>
                  <CardFoot>Recommended by Raj</CardFoot>
                </Card>
                <Card className="absolute right-0 top-0 rotate-[10deg]">
                  <CardTitle>✈️ Travel</CardTitle>
                  <CardBody>“Gokarna — Kudle sunrise + Shack #3 breakfast.”</CardBody>
                  <CardFoot>Recommended by Neha</CardFoot>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto + Features (tight mobile rhythm) */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 sm:pb-16">
          <div className="text-center mb-4 sm:mb-8">
            <div className="mx-auto mb-3 h-px w-20 sm:w-24 bg-gradient-to-r from-indigo-500/0 via-indigo-500/60 to-indigo-500/0" />
            <h2 className="font-lexend text-[20px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight text-neutral-900">
              No Ads. No Algorithms. No Noise.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
            <SimpleFeatureCard
              title="Trust over tricks"
              desc="Every rec is from a real person. No sponsored stuff, no hidden agendas."
              delay="0ms"
            />
            <SimpleFeatureCard
              title="Designed for taste"
              desc="Follow people you vibe with. Build your own public page in a tap."
              delay="80ms"
            />
            <SimpleFeatureCard
              title="Less scroll, more life"
              desc="Short, punchy cards you can act on immediately."
              delay="160ms"
            />
          </div>
        </section>

        {/* Footer – minimal & tight */}
        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-neutral-600 sm:flex-row sm:px-6">
            <p className="text-center sm:text-left">Built with care & curation.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition hover:text-neutral-900">Twitter</a>
              <a href="#" className="transition hover:text-neutral-900">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

/* --- helpers --- */
type CardProps = { children: ReactNode; className?: string };
function Card({ children, className = "" }: CardProps){
  return (
    <div className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)] hover:-translate-y-[2px] ${className}`}>
      {children}
    </div>
  );
}

type TitleProps = { children: ReactNode };
function CardTitle({ children }: TitleProps){
  return <h3 className="font-lexend mb-2 text-[15px] font-semibold tracking-tight text-neutral-900">{children}</h3>;
}

function CardBody({ children }: TitleProps){
  return <p className="text-[14px] text-neutral-700 leading-relaxed">{children}</p>;
}

function CardFoot({ children }: TitleProps){
  return <p className="mt-3 text-[12px] text-neutral-400">{children}</p>;
}

type SimpleFeatureProps = { title: string; desc: string; delay?: string };
function SimpleFeatureCard({ title, desc, delay }: SimpleFeatureProps){
  return (
    <div className="reveal rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md hover:-translate-y-[2px]" style={{ transitionDelay: delay }}>
      <h4 className="font-lexend text-[15px] font-semibold text-neutral-900">{title}</h4>
      <p className="mt-1.5 text-[14px] text-neutral-600 leading-relaxed">{desc}</p>
    </div>
  );
}
