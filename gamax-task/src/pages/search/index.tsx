import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import ResultItem from "../../components/searchResultItem";

interface Owner {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: string;
  profile_image: string;
  display_name: string;
  link: string;
}

export interface StackExchangeItem {
  tags: string[];
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}

interface StackExchangeResponse {
  items: StackExchangeItem[];
}

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<StackExchangeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<StackExchangeResponse> = await axios.get(
        "https://api.stackexchange.com/2.3/search",
        {
          params: {
            order: "desc",
            sort: "activity",
            site: "stackoverflow",
            intitle: searchTerm,
          },
        }
      );
      setResults(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded col-span-4">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 ml-2"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">
          Search Results ({results.length})
        </h2>
        <ul>
          {results.map((result) => (
            <ResultItem key={result.question_id} result={result} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
