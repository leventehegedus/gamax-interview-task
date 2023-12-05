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

  const renderStat = (label: string, value: number) => (
    <li
      className="mb-6 p-4 border rounded-lg shadow-md flex justify-between items-center"
      key={label}
    >
      <span className="text-lg font-semibold text-left">{label}</span>
      <span className="text-gray-700 text-sm text-right font-bold">
        {value}
      </span>
    </li>
  );

  return (
    <div className="p-4 bg-gray-100 rounded col-span-1">
      <div className="mb-4">
        <div className="text-lg text-left">Stats</div>
      </div>
      <ul>
        {stats && (
          <>
            {renderStat("Reputation", stats.reputation)}
            {renderStat("Reached", stats.reached)}
            {renderStat("Questions", stats.questions)}
            {renderStat("Answers", stats.answers)}
            {renderStat("Top", stats.top)}
          </>
        )}
      </ul>
    </div>
  );
};

export default Stats;
