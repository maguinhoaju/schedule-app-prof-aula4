'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import { addTask, getTasks } from '../utils/indexedDb';
import { addTaskToFirestore, getTasksFromFirestore } from '../utils/firebase';

// Criação do Contexto
const TaskContext = createContext();

// Hook para usar o TaskContext
export const useTaskContext = () => {
    return useContext(TaskContext);
};

// Componente Provider
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const tasksFromDB = await getTasks();
            setTasks(tasksFromDB);

            // Sincronizar com Firebase se estiver online
            if (navigator.onLine) {
                const tasksFromFirestore = await getTasksFromFirestore();
                // Implementar lógica para mesclar tarefas do Firebase com tarefas locais
                // Por exemplo, você pode decidir como mesclar ou substituir tarefas
            }
        };
        loadTasks();
    }, []);

    const addNewTask = async (task) => {
        await addTask(task);
        await addTaskToFirestore(task); // Salvar no Firebase
        const tasksFromDB = await getTasks();
        setTasks(tasksFromDB);
    };

    return (
        <TaskContext.Provider value={{ tasks, addNewTask }}>
            {children}
        </TaskContext.Provider>
    );
};
