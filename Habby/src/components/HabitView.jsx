import React, { useState } from "react";

const HabitView = () => {
  const [activeDays, setActiveDays] = useState([]);

  const markDayAsActive = (day) => {
    setActiveDays([...activeDays, day]);
    if (activeDays.includes(day)) {
      setActiveDays(activeDays.filter((activeDay) => activeDay !== day));
      return;
    }
  };

  const days = Array.from({ length: 365 }, (_, i) => i + 1);

  const getCurrentStreak = () => {
    let currentStreak = 0;
    let maxStreak = 0;
    let previousDay = null;

    const sortedActiveDays = [...activeDays].sort((a, b) => a - b);

    for (let i = 0; i < sortedActiveDays.length; i++) {
      if (previousDay !== null && sortedActiveDays[i] === previousDay + 1) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }

      maxStreak = Math.max(maxStreak, currentStreak);
      previousDay = sortedActiveDays[i];
    }

    return maxStreak;
  };

  const [nextDayToMark, setNextDayToMark] = useState(0);

  const markNextDayAsActive = () => {
    if (nextDayToMark < days.length) {
      markDayAsActive(days[nextDayToMark]);
      setNextDayToMark(nextDayToMark + 1);
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-53 md:grid-cols-30 grid-cols-12 gap-2 mt-10 mb-10">
        {days.map((day) => (
          <div
            key={day}
            style={{
              backgroundColor: activeDays.includes(day) ? "red" : "gray",
            }}
            className="h-[10px] w-[10px]"
            onClick={() => markDayAsActive(day)}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <p>Longest Streak: {getCurrentStreak()}</p>
        <button
          onClick={markNextDayAsActive}
          className="rounded-md p-2 mt-2 bg-neutral-700 text-white border-gray-300 border hover:bg-white
          hover:text-neutral-700"
        >
          Mark Next Day
        </button>
      </div>
    </div>
  );
};

export default HabitView;
