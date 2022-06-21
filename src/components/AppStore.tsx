import React from "react";
import create from "zustand";
import TodoItem from "./TodoItem";


interface TodoItem {
  task: string;
  status: string
}


interface AppState {
  // todoList: String[];
  todoList: TodoItem[];
  newTodo: string,
  setNewTodo: (todo: string) => void;
  addTodo: (task: string) => void;
  removeTodo: (id: number) => void;
  handleStrike: (id: number) => void;
}

const useStore = create<AppState>((set) => ({
  todoList: [],
  newTodo: "",
  setNewTodo: (todo) => set({ newTodo: todo }),
  addTodo: (task) => set((state) => ({
    // todoList: [...state.todoList, newTodo]
    todoList: [...state.todoList, { task, status: '' }]
  })),
  removeTodo: (id) => set((state) => ({
    todoList: state.todoList.filter((todo, index) => {
      return index !== id
    })
  })),
  handleStrike: (id) => set((state) => ({
    todoList: state.todoList.map((todo, index) => index === id ? { ...todo, status: 'complete' } : todo),
  }))
}))

export default useStore;