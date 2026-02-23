"use client";

import { useEffect, useState } from "react";

type Location = "toronto" | "seoul";

export default function LocationTimeBadge() {
  const [location, setLocation] = useState<Location>("toronto");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: location === "toronto" ? "America/Toronto" : "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, [location]);

  const toggleLocation = () => {
    setLocation((prev) => (prev === "toronto" ? "seoul" : "toronto"));
  };

  return (
    <button
      type="button"
      onClick={toggleLocation}
      className="px-3 py-1 rounded-md text-base
                 transition-colors hover:bg-black/10 cursor-pointer"
      aria-label="Toggle location time"
    >
      {location === "toronto" ? (
        <>BASED IN TORONTO&nbsp;{time}</>
      ) : (
        <>ORIGINALLY FROM SEOUL&nbsp;{time}</>
      )}
    </button>
  );
}
