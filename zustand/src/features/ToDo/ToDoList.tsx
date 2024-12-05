import { useToDoStore } from "../../store/toDoStore";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = () => {
  const { toDoItems, toggleToDo, removeToDo } = useToDoStore();

  return toDoItems.map((item) => (
    <ToDoListItem
      key={item.id}
      item={item}
      onCheck={toggleToDo}
      onRemove={removeToDo}
    />
  ));
};
