export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 text-neutral-900">
      {/* Top Bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="grid h-7 w-7 place-items-center rounded-xl bg-neutral-900 font-bold text-white">R</div>
          <span className="font-semibold tracking-wide">Recommend</span>
        </div>
        <p className="hidden text-sm text-neutral-500 md:block">
          Real people. Real recommendations.
        </p>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-8 pt-6 md:grid-cols-2 md:gap-12 md:pt-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Stop guessing.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Start trusting.
            </span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Not algorithms. Not ads. Just people you can rely on. Find food, movies, and travel you’ll actually love—shared by humans, not pushed by feeds.
          </p>

          {/* Email Capture (static for now) */}
          <form className="mt-6 flex w-full max-w-md items-center gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="h-12 flex-1 rounded-xl border border-neutral-200 bg-white px-4 text-neutral-800 shadow-sm outline-none transition focus:border-neutral-400 focus:shadow"
            />
            <button
              type="button"
              className="h-12 shrink-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-white transition hover:opacity-95 active:scale-[0.99]"
            >
              Join the waitlist
            </button>
          </form>

          {/* Micro trust */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <Badge>No ads</Badge>
            <Badge>No algorithms</Badge>
            <Badge>No noise</Badge>
          </div>
        </div>

        {/* Visual Cards */}
        <div className="relative grid place-items-center">
          <div className="relative h-[320px] w-[360px] md:h-[380px] md:w-[420px]">
            {/* Card 1 */}
            <Card className="left-6 top-10 -rotate-6 border-blue-100/60">
              <CardTitle>🍜 Food</CardTitle>
              <CardBody>“Bombay to Barcelona Café — get the orange cheesecake.”</CardBody>
              <CardFoot>Recommended by Aisha</CardFoot>
            </Card>
            {/* Card 2 */}
            <Card className="left-14 top-24 rotate-[5deg] border-emerald-100/60">
              <CardTitle>🎬 Movies</CardTitle>
              <CardBody>“Past Lives — tender, slow, unforgettable.”</CardBody>
              <CardFoot>Recommended by Raj</CardFoot>
            </Card>
            {/* Card 3 */}
            <Card className="left-1/3 top-4 rotate-[10deg] border-amber-100/60">
              <CardTitle>✈️ Travel</CardTitle>
              <CardBody>“Gokarna — Kudle sunrise + Shack #3 breakfast.”</CardBody>
              <CardFoot>Recommended by Neha</CardFoot>
            </Card>
          </div>
        </div>
      </section>

      {/* Pitch */}
      <section className="mx-auto w-full max-w-3xl px-6 pb-10 text-center">
        <p className="text-lg text-neutral-700">
          Recommend is where you find what’s truly worth trying—shared by people, not pushed by algorithms. Everything is human, contextual, and bullshit-free, so you spend less time scrolling and more time living.
        </p>
      </section>

      {/* Tiny Why */}
      <section className="mx-auto w-full max-w-4xl px-6 pb-16">
        <div className="grid gap-4 rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur md:grid-cols-3">
          <Why title="Trust over tricks" desc="Every rec is from a real person. No sponsored stuff, no hidden agendas." />
          <Why title="Designed for taste" desc="Follow people you vibe with. Build your own public page in a tap." />
          <Why title="Less scroll, more life" desc="Short, punchy cards you can act on immediately." />
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 pb-10 text-sm text-neutral-500">
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white/60 p-5 shadow-sm md:flex-row">
          <span>Made with ❤️ for people who still believe in people.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-700">Twitter</a>
            <a href="#" className="hover:text-neutral-700">Instagram</a>
            <a href="#" className="hover:text-neutral-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --- tiny presentational helpers --- */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 shadow-sm">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`absolute rounded-2xl border bg-white p-4 shadow-md transition hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 text-sm font-semibold tracking-wide text-neutral-800">
      {children}
    </h3>
  );
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-neutral-600">{children}</p>;
}

function CardFoot({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-xs text-neutral-400">{children}</p>;
}

function Why({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl p-3">
      <h4 className="text-base font-semibold text-neutral-800">{title}</h4>
      <p className="mt-1 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}
