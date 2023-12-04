import React, { useEffect, useState } from "react";

interface Stat {
  reputation: number;
  reached: number;
  answers: number;
  questions: number;
  top: number;
}

const userStats: Stat = {
  reputation: 1000,
  reached: 500,
  answers: 200,
  questions: 50,
  top: 10,
};

const Stats: React.FC = () => {
  const [stats, setStats] = useState<Stat | null>(null);

  useEffect(() => {
    setStats(userStats);
  }, []);

  const renderStat = (stat: Stat) => (
    <li className="flex justify-between">
      <div>{stat.reputation}</div>
      <div>{stat.reached}</div>
      <div>{stat.questions}</div>
      <div>{stat.answers}</div>
      <div>{stat.top}</div>
    </li>
  );

  return (
    <div className="col-span-1">
      <div className="text-lg text-left">Stats</div>
      <ul className="rounded-lg border border-black p-4 flex flex-col gap-4">
        {stats && renderStat(stats)}
      </ul>
    </div>
  );
};

export default Stats;
