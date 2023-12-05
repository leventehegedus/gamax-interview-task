import React, { useEffect, useState } from "react";

const listOfTags: Tag[] = [
  {
    name: "react",
    stats: {
      score: 30,
      posts: 20,
      postsPercentage: 60,
    },
  },
  {
    name: "ts",
    stats: {
      score: 30,
      posts: 2,
      postsPercentage: 60,
    },
  },
  {
    name: "js",
    stats: {
      score: 30,
      posts: 200,
      postsPercentage: 20,
    },
  },
  {
    name: "tailwind",
    stats: {
      score: 30,
      posts: 40,
      postsPercentage: 53,
    },
  },
];

interface Tag {
  name: string;
  stats: {
    score: number;
    posts: number;
    postsPercentage: number;
  };
}

const Tags: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    setTags(listOfTags);
  }, []);

  return (
    <div className="col-span-3">
      <div className="p-4 bg-gray-100 rounded col-span-4">
        <div className="text-lg text-left mb-4">Top Tags</div>
        <ul>
          {tags.map((item) => (
            <li
              key={item.name}
              className="mb-6 p-4 border rounded-lg shadow-md flex justify-between"
            >
              <div className="flex items-center">
                <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded">
                  {item.name}
                </span>
              </div>
              <div className="flex gap-2">
                <div>
                  <span className="font-bold mr-2">{item.stats.score}</span>
                  <span>score</span>
                </div>
                <div>
                  <span className="font-bold mr-2">{item.stats.posts}</span>
                  <span>posts</span>
                </div>
                <div>
                  <span className="font-bold mr-2">
                    {item.stats.postsPercentage}
                  </span>
                  <span>posts %</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
