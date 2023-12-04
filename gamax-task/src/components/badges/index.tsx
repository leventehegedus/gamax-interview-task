import React, { useEffect, useState } from "react";

enum BadgeType {
  Gold = "Gold",
  Silver = "Silver",
  Bronze = "Bronze",
}
interface Badge {
  name: string;
  type: BadgeType;
  date: Date;
}

const userBadges: Badge[] = [
  {
    name: "Achiever",
    type: BadgeType.Gold,
    date: new Date("2023-01-01"),
  },
  {
    name: "Contributor",
    type: BadgeType.Silver,
    date: new Date("2023-02-15"),
  },
  {
    name: "Enthusiast",
    type: BadgeType.Bronze,
    date: new Date("2023-03-10"),
  },
  {
    name: "Expert",
    type: BadgeType.Gold,
    date: new Date("2023-04-22"),
  },
  {
    name: "Innovator",
    type: BadgeType.Silver,
    date: new Date("2023-05-05"),
  },
  {
    name: "Supporter",
    type: BadgeType.Bronze,
    date: new Date("2023-06-18"),
  },
  {
    name: "Mentor",
    type: BadgeType.Gold,
    date: new Date("2023-07-02"),
  },
  {
    name: "Pioneer",
    type: BadgeType.Silver,
    date: new Date("2023-08-14"),
  },
  {
    name: "Champion",
    type: BadgeType.Bronze,
    date: new Date("2023-09-27"),
  },
  {
    name: "Influencer",
    type: BadgeType.Gold,
    date: new Date("2023-10-10"),
  },
  {
    name: "Trailblazer",
    type: BadgeType.Silver,
    date: new Date("2023-11-23"),
  },
  {
    name: "Explorer",
    type: BadgeType.Bronze,
    date: new Date("2023-12-31"),
  },
];

const Stats: React.FC = () => {
  const [goldBadges, setGoldBadges] = useState<Badge[]>([]);
  const [silverBadges, setSilverBadges] = useState<Badge[]>([]);
  const [bronzeBadges, setBronzeBadges] = useState<Badge[]>([]);

  useEffect(() => {
    // Filter badges based on their types
    const gold = userBadges.filter((badge) => badge.type === BadgeType.Gold);
    const silver = userBadges.filter(
      (badge) => badge.type === BadgeType.Silver
    );
    const bronze = userBadges.filter(
      (badge) => badge.type === BadgeType.Bronze
    );

    // Set local states
    setGoldBadges(gold);
    setSilverBadges(silver);
    setBronzeBadges(bronze);
  }, []);

  const renderBadges = (badges: Badge[]) => {
    return (
      <ul>
        {badges.map((badge, index) => {
          return (
            <li className="flex justify-between" key={index}>
              <div>{badge.name}</div>
              <div>{badge.date.toDateString()}</div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="col-span-3">
      <div className="text-lg text-left">Stats</div>
      <ul className="rounded-lg border border-black p-4 flex flex-col grid grid-cols-3 gap-4">
        <li className="col-span-1">{renderBadges(goldBadges)}</li>
        <li>{renderBadges(silverBadges)}</li>
        <li>{renderBadges(bronzeBadges)}</li>
      </ul>
    </div>
  );
};

export default Stats;
