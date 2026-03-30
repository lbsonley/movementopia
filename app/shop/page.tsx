import { ShopifyEmbed } from "components/shopify/ShopifyEmbed";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-[#0d0c0a] sm:text-5xl">
        Shop
      </h1>

      <div className="mt-10">
        <ShopifyEmbed iframeSrc={undefined} />
      </div>
    </div>
  );
}

