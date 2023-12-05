import React from "react";

interface User {
  avatar: string;
  username: string;
  joinDate: string;
  lastSeenDate: string;
}

const user: User = {
  avatar: "/images/dude.webp",
  username: "Jeff Lebowski",
  joinDate: "January 1, 2022",
  lastSeenDate: "December 15, 2022",
};

const User: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded flex justify-between items-center col-span-4">
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg text-left">{user.username}</h3>
          <p className="text-gray-700 text-sm">
            Joined: {user.joinDate}, Last Seen: {user.lastSeenDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
