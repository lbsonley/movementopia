"use client";

type ShopifyEmbedProps = {
  /**
   * If you have an official Shopify embed iframe URL, provide it here.
   * When omitted, the component renders a lightweight placeholder.
   */
  iframeSrc?: string;
  className?: string;
};

export function ShopifyEmbed({ iframeSrc, className }: ShopifyEmbedProps) {
  if (iframeSrc) {
    return (
      <div
        className={className}
        aria-label="Shopify store embed"
        role="region"
      >
        <iframe
          src={iframeSrc}
          title="Shopify store"
          className="h-[70vh] w-full rounded-3xl border border-[#0d0c0a]/15 bg-white"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      aria-label="Shopify store placeholder"
      role="region"
    >
      <div className="rounded-3xl border border-[#0d0c0a]/15 bg-white/80 p-10 text-center shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
        <p className="text-lg font-medium">Shop coming soon</p>
        <p className="mt-2 text-sm text-[#1f1e1a]/70">
          When you’re ready, wire your official Shopify embed URL into{" "}
          <span className="font-mono text-[#0d0c0a]">ShopifyEmbed</span>.
        </p>
      </div>
    </div>
  );
}

