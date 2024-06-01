import HabitView from "./HabitView";

const Habit = ({ habit, handleCloseHabit }) => {
  return (
    <div className="p-10 w-3/6 mt-20 bg-neutral-700 z-10 fixed rounded-lg top-16 font-bold text-white">
      <div className="flex justify-between items-baseline">
        <h1 className="text-lg underline font-bold capitalize max-w-24 min-w-24">
          {habit}
        </h1>
        <p className="font-bold underline uppercase text-2xl text-center">
          365 Days
        </p>
        <p className="text-lg">Keep it up💯</p>
      </div>
      <HabitView />
      <div className="flex justify-around">
        <button
          onClick={handleCloseHabit}
          className="rounded-md w-24 p-2 mt-2 bg-neutral-700 text-white border-gray-300 border hover:bg-white
          hover:text-neutral-700"
        >
          Cancel
        </button>
        <button
          className="rounded-md w-24 p-2 mt-2 bg-neutral-700 text-white border-gray-300 border hover:bg-white
          hover:text-neutral-700"
          onClick={handleCloseHabit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Habit;
