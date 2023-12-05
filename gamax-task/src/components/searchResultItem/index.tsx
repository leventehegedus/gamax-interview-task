import React from "react";
import { StackExchangeItem } from "../search";

interface ResultItemProps {
  result: StackExchangeItem;
}

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  const renderCounts = (label: string, count: number) => (
    <p className="text-gray-700 text-sm">
      <span className="font-bold">{label}:</span> {count}
    </p>
  );

  return (
    <li
      className="mb-6 p-4 border rounded-lg shadow-md flex"
      key={result.question_id}
    >
      <div className="flex-1">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4">
            <h3 className="text-blue-500 text-lg font-semibold mb-2 text-left">
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {result.title}
              </a>
            </h3>
          </div>
          <div className="col-span-1">
            <div className="text-left">
              {renderCounts("Score", result.score)}
              {renderCounts("Answer Count", result.answer_count)}
              {renderCounts("View Count", result.view_count)}
            </div>
          </div>
          <div className="col-span-3">
            <p className="text-gray-700 text-sm mb-2 text-right">
              created by{" "}
              <a
                href={result.owner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {result.owner.display_name}
              </a>{" "}
              at{" "}
              {new Date(result.creation_date * 1000).toLocaleDateString(
                "en-GB",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }
              )}
            </p>
            <div className="flex flex-wrap gap-1 justify-end">
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-200 text-blue-700 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ResultItem;
