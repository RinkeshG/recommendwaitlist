'use client';
import { useEffect } from 'react';

export default function Home(){
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in');
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    cards.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Use system fonts only in canvas to avoid network prompts. In your Next app, swap to next/font for Lexend/Inter. */}
      <style jsx global>{`
        :root {
          --font-lexend: system-ui, -apple-system, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif;
          --font-inter: system-ui, -apple-system, "Segoe UI", Inter, Roboto, Helvetica, Arial, sans-serif;
        }
        .font-lexend { font-family: var(--font-lexend); }
        .font-inter { font-family: var(--font-inter); }
        /* scroll reveal */
        .reveal { opacity: 0; transform: translateY(8px); transition: opacity .6s ease, transform .6s ease; will-change: transform, opacity; }
        .reveal.reveal-in { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="font-inter min-h-screen bg-white text-neutral-900">
        {/* Top Bar */}
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:py-6">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-neutral-900 font-bold text-white">R</div>
            <span className="font-semibold tracking-tight text-lg">Recommend</span>
          </div>
          {/* Removed tagline per request */}
        </header>

        {/* Hero */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-12 pt-4 sm:gap-12 sm:pb-14 sm:pt-6 md:grid-cols-2 md:gap-16 md:pb-16 md:pt-14">
          <div className="flex flex-col justify-center">
            <div className="font-lexend">
              <h1 className="text-[34px] font-extrabold leading-tight tracking-tight sm:text-5xl md:text-[52px]">
                <span className="block">Real recommendations.</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">From real people.</span>
              </h1>
            </div>

            <p className="mt-3 text-[16px] leading-relaxed text-neutral-600 sm:mt-4 sm:text-[17px] max-w-md">
              Discover food, movies, and travel you’ll actually love — shared by humans, not served by algorithms.
            </p>

            {/* Email Capture */}
            <form className="mt-5 flex w-full max-w-md flex-col gap-3 sm:mt-6 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-12 w-full flex-1 rounded-xl border border-neutral-200 bg-white px-4 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-400 focus:shadow"
              />
              <button
                type="button"
                className="h-12 w-full shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-white font-medium transition hover:opacity-95 active:scale-[0.99] sm:w-auto"
              >
                Join the waitlist
              </button>
            </form>
          </div>

          {/* Visual Cards */}
          <div className="relative">
            {/* Mobile: horizontal scroll */}
            <div className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 md:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
              <style jsx>{`
                div::-webkit-scrollbar{display:none}
              `}</style>
              <Card className="snap-start min-w-[80%]">
                <CardTitle>🍜 Food</CardTitle>
                <CardBody>“Bombay to Barcelona Café — get the orange cheesecake.”</CardBody>
                <CardFoot>Recommended by Aisha</CardFoot>
              </Card>
              <Card className="snap-start min-w-[80%]">
                <CardTitle>🎬 Movies</CardTitle>
                <CardBody>“Past Lives — tender, slow, unforgettable.”</CardBody>
                <CardFoot>Recommended by Raj</CardFoot>
              </Card>
              <Card className="snap-start min-w-[80%]">
                <CardTitle>✈️ Travel</CardTitle>
                <CardBody>“Gokarna — Kudle sunrise + Shack #3 breakfast.”</CardBody>
                <CardFoot>Recommended by Neha</CardFoot>
              </Card>
            </div>

            {/* Tablet/Desktop: overlapping composition */}
            <div className="relative hidden place-items-center md:grid">
              <div className="relative h-[320px] w-full max-w-[360px] md:max-w-[420px]">
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

        {/* Features Section */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-20">
          <div className="text-center mb-6 sm:mb-8">
            <div className="mx-auto mb-3 h-px w-24 bg-gradient-to-r from-indigo-500/0 via-indigo-500/60 to-indigo-500/0" />
            <h2 className="font-lexend text-[26px] sm:text-[32px] md:text-[36px] font-semibold tracking-tight text-neutral-900">
              No Ads. No Algorithms. No Noise.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            <SimpleFeatureCard
              title="Trust over tricks"
              desc="Every rec is from a real person. No sponsored stuff, no hidden agendas."
              delay="0ms"
            />
            <SimpleFeatureCard
              title="Designed for taste"
              desc="Follow people you vibe with. Build your own public page in a tap."
              delay="100ms"
            />
            <SimpleFeatureCard
              title="Less scroll, more life"
              desc="Short, punchy cards you can act on immediately."
              delay="200ms"
            />
          </div>
        </section>

        {/* Footer – minimal & tighter */}
        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-neutral-600 sm:flex-row">
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
function Card({children, className=""}){
  return (
    <div className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition hover:shadow-[0_10px_28px_rgba(0,0,0,0.09)] hover:-translate-y-[2px] ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({children}){
  return <h3 className="font-lexend mb-2 text-sm font-semibold tracking-tight text-neutral-900">{children}</h3>;
}

function CardBody({children}){
  return <p className="text-sm text-neutral-600 leading-relaxed">{children}</p>;
}

function CardFoot({children}){
  return <p className="mt-3 text-xs text-neutral-400">{children}</p>;
}

function SimpleFeatureCard({title, desc, delay}){
  return (
    <div className="reveal rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md hover:-translate-y-[2px]" style={{ transitionDelay: delay }}>
      <h4 className="font-lexend text-base font-semibold text-neutral-900">{title}</h4>
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function FooterLink({href, children}){
  return <a href={href} className="block transition hover:text-neutral-900">{children}</a>;
}
