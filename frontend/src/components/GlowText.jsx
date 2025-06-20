import React from "react";

const GlowText = ({ children, className = "", style = {}, ...props }) => {
  const dropShadows = [
    {
      offsetX: "0px",
      offsetY: "0px",
      blurRadius: "calc((var(--active, 100) / 100) * 5px)",
      color: "hsl(0 0% 100% / 0.6)",
    },
    {
      offsetX: "0px",
      offsetY: "0px",
      blurRadius: "calc((var(--active, 100) / 100) * 10px)",
      color: "hsl(0 0% 100% / 0.4)",
    },
    {
      offsetX: "0px",
      offsetY: "calc((var(--active, 100) / 100) * 6px)",
      blurRadius: "calc((var(--active, 100) / 100) * 15px)",
      color: "hsl(0 0% 100% / 0.3)",
    },
    {
      offsetX: "0px",
      offsetY: "calc((var(--active, 100) / 100) * 8px)",
      blurRadius: "calc((var(--active, 100) / 100) * 20px)",
      color: "hsl(0 0% 100% / 0.2)",
    },
    {
      offsetX: "0px",
      offsetY: "calc((var(--active, 100) / 100) * 10px)",
      blurRadius: "calc((var(--active, 100) / 100) * 30px)",
      color: "hsl(0 0% 100% / 0.1)",
    },
  ];

  const filterValue = dropShadows
    .map(
      ({ offsetX, offsetY, blurRadius, color }) =>
        `drop-shadow(${offsetX} ${offsetY} ${blurRadius} ${color})`
    )
    .join(" ");

  return (
    <span
      className={`select-none font-semibold ${className}`}
      style={{
        filter: filterValue,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default GlowText;
