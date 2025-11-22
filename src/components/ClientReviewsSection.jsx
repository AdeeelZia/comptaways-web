import React, { useState, useRef, useEffect } from "react";
import Heading from "./common/Heading";

export default function ClientReviewsSection() {
  const scrollRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const reviews = [
    {
      name: "Gwenaëlle",
      role: "Concessionnaire auto",
      text: "Comptaways est un cabinet comptable sachant répondre à chaque attente de son client. Je recommande fortement de faire confiance à ce professionnel.",
      color: "text-[#2AD884]",
    },
    {
      name: "Catherine",
      role: "Avocate",
      text: "J’ai confié le suivi comptable de mon entreprise à Comptaways et suis entièrement satisfaite. Les déclarations sont faites sans retard. C’est clair, précis et à l’heure. Je recommande vivement !",
      color: "text-[#C9B2FF]",
    },
    {
      name: "Rémi",
      role: "Chef cuisinier",
      text: "Comptaways vous accompagne dans tous les aspects comptables de votre société. Forte expertise, je vous le recommande !",
      color: "text-[#FF9067]",
    },
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current?.firstChild) {
        setCardWidth(scrollRef.current.firstChild.offsetWidth + 24);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-[150px] py-12 md:py-20 bg-[#E9FFF4] rounded-[30px] mx-3 md:mx-8 lg:mx-12 overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center px-4 relative">
        <Heading
          as="h2"
          className="text-2xl md:text-4xl font-semibold mb-10 flex justify-center items-center gap-2"
        >
          <span role="img" aria-label="star">
            ✨
          </span>
          Les avis de{" "}
          <span className="font-bold text-gray-900">nos clients</span>
        </Heading>

        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 bg-[#2AD884] text-white rounded-full w-10 h-10 items-center justify-center hover:bg-[#2AD884] transition shadow-md"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 bg-[#2AD884] text-white rounded-full w-10 h-10 items-center justify-center hover:bg-[#2AD884] transition shadow-md"
        >
          →
        </button>

        <div
          ref={scrollRef}
          className="flex justify-center gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full sm:w-[317px] bg-white rounded-[18px] p-[30px] transition-all"
              style={{ boxShadow: `0px 2px 15px 0px #0000000F` }}
            >
              <Heading
                as="h4"
                className="text-lg font-semibold text-start mb-5"
              >
                {r.name}
              </Heading>
              <p
                className={`${r.color} text-[15px] font-semibold text-start mb-5`}
              >
                {r.role}
              </p>
              <p className="text-[#4C4C4C] text-[15px] text-start">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-5 md:hidden">
          <button
            onClick={() => scroll("left")}
            className="bg-[#2AD884] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#2AD884] transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-[#2AD884] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#2AD884] transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
