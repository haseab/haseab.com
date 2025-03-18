import { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const directoryRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "💎 Life Goal",
      description: "i have a goal to master the 5 pillars of human excellence",
      to: "/mastery",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/5439d78d1472d0efde047762e8b337c69a0e8f29575cb57b8d9efe286c115aaa.png",
      alt: "Life Goal",
    },
    {
      title: "Problems I'm Solving",
      description: "including problems I tried to solve",
      to: "/problems",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/baa3b79d60c6d993991a55a22d264a9763fdedc9bf227de670c79191fe7ccecd.png",
      alt: "Problems I Tried to Solve",
    },
    {
      title: "Traits That Define Me",
      description: "some traits that explain my behavior",
      to: "/traits",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/bcb8e76ced55832b2f88004861836e92909381ca4c9e585d7c609c2d19ee8610.png",
      alt: "Unique Traits I Have",
    },
    {
      title: "Content Resonance",
      description:
        "a collection of over 1500 pieces of content that I've reacted to",
      to: "https://haseab.notion.site/5fb0df7bacd8465b92cc1955efd54517?v=dec6459a0113402ca37114e299277b66",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/content-resonance.png",
      alt: "Content Resonance",
      target: "_blank",
    },
    {
      title: "Video Journal",
      description:
        "documenting quarterly the last 5 years of my life on YouTube",
      to: "https://www.youtube.com/@haseab",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/4b66fd63a118e71f0702d66074692c2141129eff871bc414a7261e7ecc9592f1.png",
      alt: "Video Journal",
      target: "_blank",
    },
    {
      title: "Musings",
      description: "articles i wrote in COVID",
      to: "https://haseab.medium.com/",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/cb2104e111b32b8a41abb8706845d778d4d49a1e3d5922e4ff8e3f74adffc124.png",
      alt: "Musings",
      target: "_blank",
    },
    {
      title: "Organization Systems",
      description: "a.k.a ways in which I've stayed organized",
      to: "https://haseab.notion.site/haseab/29b9004090e44b40a0f0b8dc4cc31fa6?v=f8c366baa3d34f3db58bbded0fe55cab",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/98a2ca45a1abb30ac08302ceea418ff0635977c6c084590dfa38fc80b168ee1c.png",
      alt: "Productivity Systems",
      target: "_blank",
    },
    {
      title: "Self Awareness Systems",
      description: "a.k.a ways in which I've reduced suffering",
      to: "https://haseab.notion.site/13ddbdf1830848e781446ea7619182d5?v=141e65f0510180798618000c7b25c366&pvs=4",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/c9817225848daad623828878bb71651dd8df61256ff6eaea9596fc0efb9bfa96.png",
      alt: "Self Awareness Systems",
      target: "_blank",
    },
    {
      title: "Flawed Assumptions",
      description: "assumptions that cause humans to suffer",
      to: "https://haseab.notion.site/Flawed-Life-Assumptions-06e84f1e1a2c4bc4b67355aabd2c36b4",
      imgSrc:
        "https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/e777e6de773c8865d7d3e21f163ebd019605359c05ecc87952e1b6abc0b1a1be.png",
      alt: "Flawed Life Assumptions",
    },
  ];

  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center text-center">
        <div className="items-center">
          <div className="flex justify-center">
            <img
              src="https://pub-7712ec77fabb4a6d996c607b226d98f0.r2.dev/smiledp.png"
              className="rounded-full"
              alt="logo"
              width="200vh"
            />
          </div>
          <p className="pt-2 text-2xl">My name is Haseab (Ha - seeb). </p>
          <p className="pt-2 text-base">
            <strong>Currently In: </strong>📍 Toronto
          </p>
          <p>
            <strong>Building:</strong>{" "}
            <a
              className="text-blue-400"
              href="https://automatic.chat"
              target="_blank"
              rel="noreferrer"
            >
              automatic.chat
            </a>
          </p>
          <p>
            <strong>Live on:</strong>{" "}
            <a
              className="text-blue-400"
              href="https://timetracking.live"
              target="_blank"
              rel="noreferrer"
            >
              timetracking.live
            </a>
          </p>
          <br />
          <p>
            <strong>Know more: </strong>
            <button
              className="text-purple-300"
              onClick={() => {
                directoryRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Here
            </button>
          </p>
          <br />
          <p>
            <strong>Last Updated:</strong> Nov 14, 2024
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-8 mb-16">
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          ref={directoryRef}
        >
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.to}
              target={card.target}
              className="max-w-sm block p-6 bg-gray-800 border border-gray-700 rounded-lg shadow hover:bg-gray-700"
            >
              <div className="flex justify-center items-center h-[120px] overflow-hidden mb-2 rounded-lg">
                <img
                  src={card.imgSrc}
                  alt={card.alt}
                  className="mb-2 rounded-t-lg object-cover"
                />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {card.title}
              </h5>
              <p className="font-normal text-gray-400">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
