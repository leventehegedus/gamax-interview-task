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

const Badges: React.FC = () => {
  const [badgeGroups, setBadgeGroups] = useState<{
    [key in BadgeType]: Badge[];
  }>({
    Gold: [],
    Silver: [],
    Bronze: [],
  });

  useEffect(() => {
    const groupedBadges = userBadges.reduce<{ [key in BadgeType]: Badge[] }>(
      (groups, badge) => {
        groups[badge.type].push(badge);
        return groups;
      },
      {
        Gold: [],
        Silver: [],
        Bronze: [],
      } as { [key in BadgeType]: Badge[] }
    );

    setBadgeGroups(groupedBadges);
  }, []);

  const renderBadges = (badges: Badge[]) => (
    <ul>
      {badges.map((badge) => (
        <li className="flex justify-between" key={badge.name}>
          <div>{badge.name}</div>
          <div>{badge.date.toDateString()}</div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="col-span-3">
      <div className="text-lg text-left">Badges</div>
      <div className="rounded-lg border border-black p-4 flex flex-col grid grid-cols-3 gap-4">
        {Object.entries(badgeGroups).map(([type, badges]) => (
          <div key={type} className="col-span-1">
            <h2>{type} Badges</h2>
            {renderBadges(badges)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
