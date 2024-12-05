import { useState } from "react";
import { useToDoStore } from "../../store/toDoStore";
import { Add } from "../Icons/Add";

export const AddToDoInput = () => {
  const [value, setValue] = useState("");
  const { addToDo } = useToDoStore();

  const handleAdd = () => {
    if (value) {
      setValue("");
      addToDo(value);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
      <button onClick={handleAdd}>
        <Add />
      </button>
      <input
        className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
        type="text"
        placeholder="add a new task"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
