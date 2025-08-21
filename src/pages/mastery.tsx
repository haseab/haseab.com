//create useEffect to reset the scroll
import { useEffect } from "react";

const Mastery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-start max-w-4xl rounded-lg p-16">
      {/* <p className="text-5xl text-center"> 🧘 Mastery</p>
      <br></br>
      <p className="prose-xl">
        <strong>As of June 5 2023:</strong>
      </p>
      <br></br>
      <p className="prose-xl">
        <strong>
          I want to master the 5 pillars of human excellence. No one in
          documented history seems to have done it and I will.
        </strong>
      </p>
      <br></br>
      <p className="prose-xl">
        <strong>Pillar #1: Low Self-Conflict </strong>:
        <div>
          Self-conflict is just another word for suffering. Everyone has
          problems, thus everyone suffers. Mastering this pillar means that
          self-conflict does not exist within you. You have no major flawed
          assumptions about yourself or about life.
        </div>
      </p>
      <br></br>
      <p className="prose-xl">
        <strong>
          Pillar #2: Solving a Problem that Impacts The Whole World{" "}
        </strong>
        :
        <div>
          I think of Tesla, I think of SpaceX, I think of the printing press, I
          think of the iPhone, I think of Amazon Marketplace, I think of the
          Ford Model-T, I think of chatGPT. Something that genuinely helps the
          world in a big way.
        </div>
      </p>
      <br></br>
      <p className="prose-xl">
        <strong>Pillar #3: Physical Fitness & Health </strong>:
        <div>
          Being in supremely good physical shape. The body of a warrior. I think
          of Leonidas I from the movie 300. Or a modern example could be
          Killmonger from Black Panther and I think of David Goggins as the real
          life example.
        </div>
      </p>
      <br></br>
      <p className="prose-xl">
        <strong>Pillar #4: Charisma & Confidence </strong>:
        <div>
          Very unique in their personality from everyone else. Able to capture
          your attention, there is an aura to them. I think of Jamie Foxx&apos;s
          energy, I think of Stephen A Smith&apos;s sass, I think of Shah Rukh
          Khan in his movies, I think of Keegan Michael Key in his skits, I
          think of Maajid Nawaz&apos;s speech, I think of Jim Carrey&apos;s &
          Russell Brand&apos;s comfort in the uncomfortable, I think of Gordon
          Ramsay&apos;s character. These are all examples of mastery of charisma
          in many different forms. I would have a great time talking to all of
          the above people lol.
        </div>
      </p>
      <br></br>
      <p className="prose-xl">
        <strong>Pillar #5: Creative Arts </strong>:
        <div>
          Someone that has achieved complete control over their skill. They are
          able to manipulate things in ways that not many people can, and make
          it look easy. I think of Hans Zimmer at composing, JUICE WRLD & Harry
          Mack at freestyling, Christopher Nolan at filmmaking, Chris Brown &
          Jason Derulo at dancing, Leonardo DiCaprio at acting, Adele at
          singing, Rick Riordan in writing.
        </div>
      </p>
      <br></br>
      <p className="prose-xl">
        No one in documented history has been able to master all 5 pillars. And
        I 100% think it&apos;s possible for me to do it.
      </p>
      <br></br>

      <div className="border-t-2 border-white"></div>
      <br></br>
      <h1 className="prose-2xl">FAQ</h1>
      <br></br>
      <p>
        <strong>
          Q: You&apos;re the one that is picking the goals, what if someone
          disagrees with what you consider to be the most self-actualized
          person?
        </strong>
        <p>
          The 5 pillars that I have chosen were the pillars that I thought had
          to do with peak human development, what I&apos;ll ask in return is
          what would you consider to be the most self-actualized person? What am
          I missing?
        </p>
        <br></br>
        <strong>
          Q: How do you know whether you&apos;ve achieved these goals? What are
          the quantifiable metrics?
        </strong>
        <p>
          Let us assume that I pick a metric for each of the 5 pillars. Imagine
          I say that in order to solve a problem that has impacted the whole
          world, I need to impact like 80% of people, but then I only impact 79%
          of people. Does that mean I failed? Did Tesla fail to impact the world
          because they didn&apos;t impact 80% of people? The problem with
          quantifiable metrics is that the goal then becomes to hit the metric,
          not actually solve the problem. I think that the best way to measure
          this is to see the lasting legacy that I leave behind, what will the
          people say about it? What will the history books say about it? Can you
          currently name anybody that has mastered all 5 pillars? If despite
          your mental gymnastics you can&apos;t, and I get to the point where I
          am even considered for mastering the 5 pillars, then haven&apos;t I
          succeeded?
        </p>
        <br></br>
        <p>
          This is why I also mentioned specific people, to show what I consider
          to be excellence.
        </p>
        <br></br>
        <strong>
          Q: Why not just get really good at one thing? This seems like an
          excuse to not focus your craft on one thing very clearly.
        </strong>
        <p>
          I remember when I used to play video games, I would be the best out of
          all of my friends, but then when I would see the leaderboards, they
          were so far ahead of me that I genuinely couldn&apos;t imagine being
          that good. I tirelessly tried to get remotely close to them, but I
          never could. I also thought about all of the people that became
          successful in business and realized that a lot of these insane results
          likely came from luck. The error bars are large and not indicative of
          showcasing excellence. However, if you can build 3 successful
          businesses in 3 completely different industries, it&apos;s more
          indicative of excellence. I think of being able to master all 5
          pillars as being a way to minimize those error bars.
        </p>
        <br></br>
        <div className="space-y-2">
          <strong>
            Q: What makes you think that you can achieve this when no one else
            has been able to?
          </strong>
          <p>
            I have a confidence from first principles which I personally think
            is the ingredient necessary to achieve this. I haven&apos;t seen
            anyone else with this type of confidence.
          </p>
          <p>
            See more information in the tweet{" "}
            <a
              className="text-blue-700"
              href="https://x.com/haseab_/status/1823225734795817073"
              target="_blank"
            >
              here
            </a>
          </p>
          <p>
            I also dedicate so much time towards self-awareness compared to
            other people. Self-awareness is necessary in order to achieve{" "}
            <a
              className="text-blue-700"
              href="https://x.com/haseab_/status/1824243383805808898"
              target="_blank"
            >
              no self-conflict{" "}
            </a>
            and I have actively been working{" "}
            <a
              className="text-blue-700"
              href="https://x.com/haseab_/status/1829690409045672010"
              target="_blank"
            >
              towards it{" "}
            </a>
          </p>
        </div>
      </p> */}
    </div>
  );
};

export default Mastery;
