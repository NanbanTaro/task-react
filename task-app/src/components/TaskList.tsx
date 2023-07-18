import React, {useState, useEffect} from "react";
import TaskListDataType from "../models/TaskListApiResponse";
import instance from "../api/axios";
import { list } from "../api/requests";

function TaskList() {
    const [tasks, setTask] = useState<TaskListDataType | null>(null);

    useEffect(() => {
        const fetchTask =async () => {
            try {
                const response = await instance.get<TaskListDataType>(list);
                setTask(response.data);
            } catch (error) {
                console.error(`ERROR: ${error}`);
            }
        };
        fetchTask();
    }, []);

    return (
        <div>
            {tasks ? (
                tasks.tasks.map((item, index) => (
                    <div key={index}>
                        <div>{item.title}</div>
                        <div>{item.detail}</div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default TaskList;