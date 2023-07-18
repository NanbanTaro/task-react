import React, {useState, useEffect} from "react";
import axios from "axios";
import TaskListDataType from "../models/TaskListApiResponse";

function TaskList() {
    const [tasks, setTask] = useState<TaskListDataType | null>(null);

    useEffect(() => {
        axios.get('http://localhost:3000/task/list')
            .then(response => {
                // レスポンスの処理
                console.log(response.data);
                setTask(response.data);
            })
            .catch(error => {
                // エラーハンドリング
                console.error(error);
            });
    }, [])

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