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

  return (
    <div className="col-span-1 p-4 bg-gray-100 rounded">
      <div className="text-lg text-left">Communities</div>
      <ul>
        {communities.map((community, index) => (
          <li key={index} className="mb-6 p-4 border rounded-lg shadow-md flex">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="flex items-center">
                    <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded">
                      {community.name}
                    </span>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="flex items-center justify-end">
                    <span>{community.numberOfMembers}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communities;
