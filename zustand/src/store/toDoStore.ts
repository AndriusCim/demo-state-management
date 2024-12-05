import { create } from "zustand";

export interface ToDoItem {
  text: string;
  done: boolean;
  id: string;
}

export interface ToDoStore {
  toDoItems: ToDoItem[];
  addToDo: (text: string) => void;
  toggleToDo: (id: string) => void;
  removeToDo: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set) => {
  return {
    toDoItems: [],
    addToDo: (text) =>
      set((state) => ({
        toDoItems: [
          ...state.toDoItems,
          {
            text,
            done: false,
            id: Math.random().toString(36),
          },
        ],
      })),
    toggleToDo: (id) =>
      set((state) => ({
        toDoItems: state.toDoItems.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        ),
      })),
    removeToDo: (id) =>
      set((state) => ({
        toDoItems: state.toDoItems.filter((item) => item.id !== id),
      })),
  };
});
