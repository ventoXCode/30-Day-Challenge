import React, { useState } from "react";
import Card from "./components/Card";
import Habit from "./components/Habit";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [habits, setHabits] = useState(new Set());
  const [isHabitOpen, setIsHabitOpen] = useState(false);
  const [currentHabit, setCurrentHabit] = useState(null);

  const handleOpenModal = () => {
    if (isHabitOpen) {
      return;
    }
    setIsModalOpen(true);
  };

  const handleOpenHabit = (habit) => {
    setIsModalOpen(false);
    setCurrentHabit(habit);
    setIsHabitOpen(true);
  };

  const handleCloseHabit = (habit) => {
    setIsHabitOpen(false);
    setCurrentHabit(habit);
  };

  const onDelete = (habit) => {
    setHabits((prevHabits) => {
      return Array.from(prevHabits).filter((h) => h !== habit);
    });
  };

  const handleAddHabit = (event) => {
    event.preventDefault();
    const newHabit = event.target.elements.habit.value;
    if (newHabit === "") {
      alert("Please enter a habit");
      return;
    }
    setHabits((prevHabits) => new Set(prevHabits).add(newHabit));
    event.target.reset();
    setIsModalOpen(false);
  };

  const Modal = () => {
    return (
      <div className="bg-neutral-700 z-10 fixed px-40 py-8 rounded-lg top-32">
        <form
          className="flex flex-col items-center gap-4 w-80"
          onSubmit={handleAddHabit}
        >
          <h1 className="text-white font-bold text-2xl">Add Habit</h1>
          <input
            name="habit"
            type="text"
            placeholder="Habit"
            className="rounded p-2 mt-2 w-56 outline-none"
          />
          <div className="flex gap-10">
            <button
              onClick={handleCloseHabit}
              className="rounded-md w-24 p-2 mt-2 bg-neutral-700 text-white border-gray-300 border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded w-24 p-2 mt-2 bg-neutral-700 text-white border-gray-300 border"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-around text-white">
        <a href="/">
          <img src="/Habby-text.png" alt="" width={120} />
        </a>
        <button
          onClick={handleOpenModal}
          className="font-bold hover:bg-neutral-700 rounded p-2"
        >
          Add Habit
        </button>
      </div>
      <div></div>
      <div className="flex items-center justify-center">
        {isModalOpen && <Modal />}
      </div>
      <div className="flex justify-around items-center">
        <div className="grid grid-cols-4 grid-rows-4 gap-16 mt-16 capitalize">
          {Array.from(habits).map((habit, index) => (
            <Card
              key={index}
              habit={habit}
              onDelete={onDelete}
              handleOpenHabit={handleOpenHabit}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center relative z-50">
        {isHabitOpen && (
          <Habit habit={currentHabit} handleCloseHabit={handleCloseHabit} />
        )}
      </div>
    </div>
  );
}

export default App;
