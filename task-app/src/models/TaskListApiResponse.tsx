type TaskListDataType = {
    ok: boolean,
    tasks: {
        title: string,
        detail: string
    }[],
};

export default TaskListDataType;