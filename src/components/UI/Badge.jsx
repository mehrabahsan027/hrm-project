// Badge.jsx

import React from "react";

const Badge = ({ text, color = "gray" }) => {
  const colorMap = {
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      dot: "bg-green-700",
    },

    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      dot: "bg-blue-700",
    },

    orange: {
      bg: "bg-orange-100",
      text: "text-orange-700",
      dot: "bg-orange-700",
    },

    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
      dot: "bg-purple-700",
    },

    gray: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      dot: "bg-gray-700",
    },
  };

  const styles = colorMap[color] || colorMap.gray;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${styles.bg} ${styles.text}`}
    >
      {/* Dot */}
      <span
        className={`h-2 w-2 rounded-full ${styles.dot}`}
      ></span>

      {/* Text */}
      {text}
    </span>
  );
};

export default Badge;