import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <script>
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1982575');
          `}
        </script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9BFP7YKCT7"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9BFP7YKCT7');
          `}
        </script>
      </Helmet>
      <div className="relative min-h-screen overflow-hidden bg-[#f7f7f4] text-[#0d0c0a]">
        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20 md:px-10 md:py-28">
          <div className="w-full space-y-16">
            <header className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#0d0c0a]/15 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0d0c0a]/70">
                <span>Movementopia</span>
                <span className="h-1 w-1 rounded-full bg-[#0d0c0a]/50" />
                <span>Playful Minimal Strength</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-[#0d0c0a] sm:text-6xl md:text-7xl">
                  Minimal moves.
                  <br />
                  Maximum play.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-[#1f1e1a] sm:text-xl">
                  Short sessions. Rings, push, hang. Few precise reps that keep
                  you light, strong, and ready for real life.
                </p>
              </div>
            </header>

            <div className="space-y-6 rounded-3xl border border-[#0d0c0a]/20 bg-white/80 p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-[#0d0c0a]">
                  The Quiet Strength Protocol
                </h2>
                <p className="text-base leading-relaxed text-[#1f1e1a]/80">
                  A lean 8-page guide with the exact weekly layout I use: three
                  anchors, micro warmups, and progressions that stay friendly on
                  joints.
                </p>
              </div>

              <ul className="space-y-2 text-sm font-medium uppercase tracking-[0.18em] text-[#0d0c0a]/70">
                <li className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#0d0c0a]/30" />
                  <span>Under 25 minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#0d0c0a]/30" />
                  <span>Rings + floor only</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#0d0c0a]/30" />
                  <span>Built for calm focus</span>
                </li>
              </ul>

              <div className="ml-embedded" data-form="CY75S1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
