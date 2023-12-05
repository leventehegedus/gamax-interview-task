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

  const getBadgeImage = (type: BadgeType) => {
    switch (type) {
      case BadgeType.Gold:
        return "images/gold_badge_image.png"; // Replace with your actual gold badge image URL
      case BadgeType.Silver:
        return "images/silver_badge_image.png"; // Replace with your actual silver badge image URL
      case BadgeType.Bronze:
        return "images/bronze_badge_image.png"; // Replace with your actual bronze badge image URL
      default:
        return "";
    }
  };

  const renderBadgeBox = (type: BadgeType, badges: Badge[]) => (
    <div key={type} className="col-span-1">
      <h2 className="text-md font-semibold mb-2">{type} Badges</h2>
      <div className="mb-6 p-4 border rounded-lg shadow-md flex">
        <div className="flex-1">
          <div>
            <div className="flex items-center">
              <img
                src={getBadgeImage(type)}
                alt={`${type} Badge`}
                className="w-6 h-6 mr-2"
              />
              <div>
                <span className="text-lg font-bold text-left">
                  {badges.length}{" "}
                </span>
                <span className="text-sm">{type.toLowerCase()} badges</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <ul>
              {badges.map((badge) => (
                <li key={badge.name} className="mb-2">
                  <div className="flex justify-between">
                    <div>
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        {badge.name}
                      </span>
                    </div>
                    <div className="text-sm">
                      {new Date(badge.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="col-span-3 p-4 bg-gray-100 rounded">
      <div className="text-lg text-left mb-4">Badges</div>
      <div className="flex flex-col gap-4 grid grid-cols-3">
        {Object.entries(badgeGroups).map(([type, badges]) =>
          renderBadgeBox(type as BadgeType, badges)
        )}
      </div>
    </div>
  );
};

export default Badges;
