import React, { useEffect, useState } from "react";

interface Stat {
  reputation: number;
  reached: number;
  answers: number;
  questions: number;
  top: number;
}
const userStats: Stat[] = [
  {
    reputation: 1000,
    reached: 500,
    answers: 200,
    questions: 50,
    top: 10,
  },
  {
    reputation: 1500,
    reached: 800,
    answers: 300,
    questions: 70,
    top: 5,
  },
  {
    reputation: 1200,
    reached: 600,
    answers: 250,
    questions: 60,
    top: 8,
  },
  {
    reputation: 2000,
    reached: 1000,
    answers: 400,
    questions: 80,
    top: 3,
  },
  {
    reputation: 800,
    reached: 400,
    answers: 150,
    questions: 40,
    top: 15,
  },
];

const Stats: React.FC = () => {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    setStats(userStats);
  }, []);

  return (
    <div className="col-span-1">
      <div className="text-lg text-left">Stats</div>
      <ul className="rounded-lg border border-black p-4 flex flex-col gap-4">
        {stats.map((stat, index) => {
          return (
            <li className="flex justify-between" key={index}>
              <div>{stat.reputation}</div>
              <div>{stat.reached}</div>
              <div>{stat.questions}</div>
              <div>{stat.answers}</div>
              <div>{stat.top}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stats;
