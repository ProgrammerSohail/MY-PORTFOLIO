import React, { useState } from "react";
import CV from "../../public/Sohail-CV.pdf";

const CVButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (isChecked) {
      // Open CV in a new tab
      window.open(CV, "_blank");
    } else {
      // Download CV
      const link = document.createElement("a");
      link.href = CV;
      link.download = "Sohail's_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="btn-container cursor-none">
      <a onClick={handleClick}>
        <label className="label">
          <input
            type="checkbox"
            className="input"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span className="circle">
            <svg
              className="icon"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
            <div className="btn-square" />
          </span>
          <div className="btn-title">Download CV</div>
          <p className="btn-title pl-4">{isChecked ? "Open" : "Download CV"}</p>
        </label>
      </a>
    </div>
  );
};

export default CVButton;
