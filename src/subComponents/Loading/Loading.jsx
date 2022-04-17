import React from "react";
import "./style.css";
const Loading = () => {
  return (
    <div class="loading-container">
      <svg class="spinner" viewBox="0 0 50 50">
        <circle
          class="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Loading;
