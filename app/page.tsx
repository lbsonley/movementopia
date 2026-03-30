import { ShopifyEmbed } from "components/shopify/ShopifyEmbed";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="w-full space-y-16">
          <section className="space-y-6">
            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-[#0d0c0a] sm:text-6xl md:text-7xl">
              Minimal moves.
              <br />
              Maximum play.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[#1f1e1a] sm:text-xl">
              Short sessions. Rings, push, hang. Few precise reps that keep
              you light, strong, and ready for real life.
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-[#0d0c0a]/20 bg-white/80 p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
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

            <div className="ml-embedded" data-form="CY75S1" />
          </section>

          <section className="space-y-6 rounded-3xl border border-[#0d0c0a]/20 bg-white/80 p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-[#0d0c0a]">
                Shop
              </h2>
              <p className="text-base leading-relaxed text-[#1f1e1a]/80">
                When your Shopify store is wired up, this area will render your
                official storefront embed.
              </p>
            </div>

            <ShopifyEmbed />
          </section>
        </div>
      </div>
    </div>
  );
}

