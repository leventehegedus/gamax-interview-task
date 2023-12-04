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
      <div className="text-lg text-left">Top tags</div>
      <ul className="rounded-lg border border-black p-4 flex flex-col gap-4">
        {tags.map((item) => (
          <li key={item.name} className="flex justify-between">
            <h3>{item.name}</h3>
            <ul className="flex justify-end">
              {Object.entries(item.stats).map(([key, value]) => (
                <li key={key} className="flex flex-col">
                  <div>{value}</div>
                  <div>{key}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
