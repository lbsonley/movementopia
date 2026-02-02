import { useState } from "react";
import { Helmet } from "react-helmet";
import ConvertKitForm from "convertkit-react";

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9BFP7YKCT7"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9BFP7YKCT7');
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-[#262219] relative overflow-hidden">
        <div className="film-grain"></div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
          <div className="max-w-2xl w-full mx-auto text-center">
            <header className="mb-28 space-y-12">
              <h1 className="font-serif text-[#faf7f2] text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[1.05] opacity-95">
                Join the Movement.
              </h1>

              <div className="h-px bg-gradient-to-r from-transparent via-[#6b6558] to-transparent opacity-20 my-8"></div>

              <p className="font-sans text-[#a89885] text-sm md:text-base font-light tracking-wide max-w-lg mx-auto leading-loose">
                Training philosophy for men who carry weight in silence.
              </p>
            </header>

            <div className="border border-[#4a4640] border-opacity-30 bg-[#1a1713]/50 backdrop-blur-sm p-12 md:p-20 space-y-16">
              <div className="space-y-8">
                <h2 className="font-serif text-[#faf7f2] text-4xl md:text-5xl font-light tracking-tight opacity-90">
                  Get the Quiet Strength Protocol
                </h2>

                <p className="font-sans text-[#8f8577] text-sm md:text-base font-light leading-relaxed max-w-md mx-auto opacity-85">
                  A free 8-page guide for men who want a simple system to build body and presence.
                </p>
              </div>
              <div className="ml-embedded" data-form="CY75S1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
