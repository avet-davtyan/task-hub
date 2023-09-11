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
```

### Defining styles for boards

```jsx
const styles = {
    '1': {
        border: '0px solid black',
    },
    '2': {
        border: '2px solid black',
    }
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
<Todos boards={boards} styles={styles} renderers={renderers}/>
```