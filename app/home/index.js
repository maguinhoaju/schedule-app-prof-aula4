'use client'

import { useState } from 'react'
import { useTaskContext } from '@/contexts/TaskContext'

export default function Home(){
    const { tasks, addNewTask } = useTaskContext();
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = { title, time, completed: false };
        addNewTask(newTask)
        setTitle('');
        setTime('');
    }

    return(
        
    )
}