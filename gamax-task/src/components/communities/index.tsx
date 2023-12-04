import React, { useEffect, useState } from "react";

interface Community {
  name: string;
  numberOfMembers: number;
}

const listOfCommunities: Community[] = [
  {
    name: "alfa",
    numberOfMembers: 30,
  },
  {
    name: "beta",
    numberOfMembers: 20,
  },
  {
    name: "gamma",
    numberOfMembers: 50,
  },
  {
    name: "delta",
    numberOfMembers: 80,
  },
];

const Communities: React.FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    setCommunities(listOfCommunities);
  }, []);

  const renderCommunity = (community: Community, index: number) => (
    <li className="flex justify-between" key={index}>
      <div>{community.name}</div>
      <div>{community.numberOfMembers}</div>
    </li>
  );

  return (
    <div className="col-span-1">
      <div className="text-lg text-left">Communities</div>
      <ul className="rounded-lg border border-black p-4 flex flex-col gap-4">
        {communities.map(renderCommunity)}
      </ul>
    </div>
  );
};

export default Communities;
