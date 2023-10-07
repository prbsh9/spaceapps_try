import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ nextSectionLink }) => {
  return (
    <div className=" mt-6 p-6 rounded-lg  flex justify-end underline">
      <div className="mt-4">
        <Link to={nextSectionLink} className="text-blue-600 hover:underline">
          Go to Next Section
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
