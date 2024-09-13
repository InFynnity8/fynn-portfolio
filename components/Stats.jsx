"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 19,
    text: "Projects completed",
  },
  {
    num: 12,
    text: "Technologies mastered",
  },
  {
    num: 617,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className= "pt-0 pb-12 xl:pt-0 xl:pb-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex justify-center items-center gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  start={0}
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-[40px] font-extrabold"
                  separator=","
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80` }
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
