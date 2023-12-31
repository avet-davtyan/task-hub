import CSS from 'csstype'
import React from "react";
import * as dgram from "dgram";

export interface task {
    task_id: number;

    [key: string]: any;
}

export interface todoBoard {
    board_id: string;
    tasks: task[];

    [key: string]: any;
}


export interface TodoBoardType {
    boardStyle?: CSS.Properties;
    todoBoards: todoBoard[];
    setTodoBoards: React.Dispatch<React.SetStateAction<todoBoard[]>>;
    HeaderRenderer?: React.FunctionComponent<any>;
    TaskRenderer?: React.FunctionComponent<any>;
    AddRenderer?: React.FunctionComponent<any>;
    boardId: string;
    tasks?: task[];
}

export interface styles {
    [key: string]: CSS.Properties;
}

interface renderer {
    [key: string]: React.FunctionComponent<any>;
}

interface renderers {
    [key: string]: renderer;
}

export interface TodosType {
    boards: todoBoard[];
    styles?: styles;
    renderers?: renderers;
    onTaskDrop?: (source: any, destination: any) => void;
}