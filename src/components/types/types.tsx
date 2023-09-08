import CSS from 'csstype'
import React from "react";

export interface task {
    task_id: number;

    [key: string]: any;
}

export interface todoBoard {
    board_id: string;
    tasks: task[];
}


export interface TodoBoardType {
    boardStyle?: CSS.Properties,
    todoBoards: todoBoard[],
    setTodoBoards: React.Dispatch<React.SetStateAction<todoBoard[]>>,
    TaskRenderer?: React.FunctionComponent<any>;
    AddButton?: React.FunctionComponent<any>;
    TaskTextField?: React.FunctionComponent<any>;
    boardId: string,
    tasks?: task[]
}

interface styles {
    [key: string]: CSS.Properties
}


export interface TodosType {
    boards: todoBoard[],
    styles?: styles
}