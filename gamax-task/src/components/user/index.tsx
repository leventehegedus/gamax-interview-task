import React from "react";

interface UserProps {
  user: {
    avatar: string;
    username: string;
    joinDate: string;
    lastSeenDate: string;
  };
}

const user = {
  avatar: "https://placekitten.com/100/100",
  username: "exampleUser",
  joinDate: "January 1, 2022",
  lastSeenDate: "December 15, 2022",
};

const User: React.FC<UserProps> = () => {
  return (
    <div className="p-4 bg-gray-100 rounded flex justify-between items-center col-span-4">
      <div className="flex items-center">
        <img
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg">{user.username}</h3>
          <p className="text-gray-700 text-sm">
            Joined: {user.joinDate}, Last Seen: {user.lastSeenDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
