import { FC } from "react";
import { CheckMark } from "../Icons/CheckMark";
import { ToDoItem } from "../../store/toDoStore";
import { Remove } from "../Icons";

interface ToDoListItemProps {
  item: ToDoItem;
  onCheck: (id: string) => void;
  onRemove: (id: string) => void;
}

export const ToDoListItem: FC<ToDoListItemProps> = ({
  item,
  onCheck,
  onRemove,
}) => {
  return (
    <div className="flex justify-between">
      <input
        className="hidden"
        type="checkbox"
        id="task_1"
        checked={item.done}
      />
      <label
        onClick={() => onCheck(item.id)}
        className="flex items-center h-10 px-2 rounded cursor-pointer w-full hover:bg-gray-100"
      >
        <span className="flex items-center justify-center h-5 text-transparent border-2 border-gray-300 rounded-full">
          <CheckMark />
        </span>
        <span className="ml-4 text-sm">{item.text}</span>
      </label>
      <button onClick={() => onRemove(item.id)}>
        <Remove />
      </button>
    </div>
  );
};
