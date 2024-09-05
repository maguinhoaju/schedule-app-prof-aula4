'use client'

import { createContext, useContext, useState } from "react";

// Criação do contexto
const TaskContext = createContext();

//Hook ou função para acessar o contexto
export const useTaskContext = () => {
    return useContext(TaskContext);

}

// Provedor de contexto
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    
    const addNewTask =  (task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    }

    return(
        <TaskContext.Provider value = {{ tasks, addNewTask }}>
            {children}
        </TaskContext.Provider>
    )
}