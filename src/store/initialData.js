export const initialData = {
    'task': {
        '1': {
            id: '1',
            title: 'Development',
            content: 'In order to develop we must care'
        },
        '2': {
            id: '2',
            title: 'Developed',
            content: 'In developed country there\'s people that support it'
        },
        '3': {
            id: '2',
            title: 'Undevelop',
            content: 'I don\'t know what to do'
        }
    },
    'column': {
        'c1': {
            id: 'c1',
            title: 'To Do',
            taskIds: ['1','2']
        },
        'c2': {
            id: 'c2',
            title: 'Doing',
            taskIds: []
        },
        'c3': {
            id: 'c3',
            title: 'Done',
            taskIds: []
        }
    },
    columnOrder: ['c1','c2','c3']
}