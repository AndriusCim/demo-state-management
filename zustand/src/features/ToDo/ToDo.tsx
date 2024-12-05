import { AddToDoInput } from "./AddToDoInput";
import { Title } from "./Title";
import { ToDoList } from "./ToDoList";

export const ToDo = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
          <Title />
          <ToDoList />
          <AddToDoInput />
        </div>
      </div>
    </div>
  );
};
