import React, { useEffect, useState } from "react";

const Header = ({ data, onLogout }) => {
  const [email, setemail] = useState("");
  useEffect(() => {
    // setemail(data.email);
  }, [data]);

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium ">
        Hello <br />
        <span className="text-3xl font-semibold"> 👋</span>
      </h1>
      <button
        onClick={() => {
          onLogout;
        }}
        className="bg-red-600 text-white px-4 py-2 rounded text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
