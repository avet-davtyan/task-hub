# Task Hub

<div>
    <img src="readme_materials/githubRepoImage.png">
</div>

## Installation

```jsx
npm
i
@not/
published
```

## Usage

```jsx
import {Todos} from "@not/published";
```

### Defining boards

```jsx
const boards = [
    {
        board_id: '1',
        tasks: [
            {task_id: 1, name: 'Buy paint and supplies'},
        ]
    },
    {
        board_id: '2',
        tasks: [
            {task_id: 2, name: 'Prepare a presentation for the client'},
            {task_id: 3, name: 'Visit the supermarket'}
        ]
    }
]
```

### Defining styles for boards

```jsx
const styles = {
    '1': {border: '0px solid black', padding: '10px'},
    '2': {backgroundColor: '#3A4750'}
}
```

### Defining renderers for boards

```jsx
const renderers = {
    '1': {
        headerRenderer: CustomHeaderRenderer,
        addRenderer: CustomAddRenderer,
        taskRenderer: CustomTaskRenderer,
    }
}
```

### Using Todos

```jsx
<Todos
    boards={boards}
    styles={styles}
    renderers={renderers}
/>
```

### Todos Props

| Prop      | Value                                                                                                                                                 |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| boards    | Array of todoBoard <br> <pre>type todoBoard = {<br>board_id: string;<br>tasks: task[];<br>[key: string]: any; </br>} </pre>                           |
| styles    | <pre>type styles = {<br>[key: string]: CSS.Properties;</br>} </pre>                                                                                   |
| renderers | <pre>type renderer = {<br>[key: string]: React.FunctionComponent<any>;</br>} <br> <br>type renderers = {<br>[key: string]: renderer;</br>}</br></pre> |