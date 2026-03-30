export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-[#0d0c0a] sm:text-5xl">
        Disclaimer
      </h1>

      <div className="mt-8 space-y-4 rounded-3xl border border-[#0d0c0a]/20 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
        <p className="text-base leading-relaxed text-[#1f1e1a]/80">
          Movementopia content is for general informational and educational
          purposes only. It is not medical advice.
        </p>
        <p className="text-base leading-relaxed text-[#1f1e1a]/80">
          Exercise involves risk of injury. You should consult a qualified
          healthcare professional before starting any new program, and stop
          if you experience pain, dizziness, or discomfort.
        </p>
        <p className="text-base leading-relaxed text-[#1f1e1a]/80">
          By using this site, you agree that you are responsible for your own
          health and safety.
        </p>
      </div>
    </div>
  );
}

