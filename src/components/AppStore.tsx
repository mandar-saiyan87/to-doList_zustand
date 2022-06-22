import React from "react";
import create from "zustand";
import TodoItem from "./TodoItem";


// To-do item object
interface TodoItem {
  task: string;
  status: string
}

// Defining app state and types and function
interface AppState {
  todoList: TodoItem[];
  newTodo: string,
  setNewTodo: (todo: string) => void;
  addTodo: (task: string) => void;
  removeTodo: (id: number) => void;
  handleStrike: (id: number) => void;
}

// Creating store (zustand) using Appstate types
const useStore = create<AppState>((set) => ({
  // Todo list
  todoList: [],

  // Onchange todo event (input)
  newTodo: "",

  // Handle onchange state from input
  setNewTodo: (todo) => set({ newTodo: todo }),

  // Add new todo item to list
  addTodo: (task) => set((state) => ({
    // todoList: [...state.todoList, newTodo]
    todoList: [...state.todoList, { task, status: '' }]
  })),

  // Remove todo item from list
  removeTodo: (id) => set((state) => ({
    todoList: state.todoList.filter((todo, index) => {
      return index !== id
    })
  })),

  // Handle strike through for completed item click
  handleStrike: (id) => set((state) => ({
    todoList: state.todoList.map((todo, index) => index === id ? { ...todo, status: 'complete' } : todo),
  }))
}))

export default useStore;