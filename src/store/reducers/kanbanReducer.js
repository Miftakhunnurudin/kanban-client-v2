const initialStateKanban = {
    loading: false,
    errorMessage: '',
    kanbans: {
        task: {},
        column: {},
        columnOrder: []
    },
    detailKanban: {}
}

const kanbanReducer = (state = initialStateKanban, action) => {
    switch(action.type){
        case 'FETCH_KANBANS_START':
            return {...state, loading: true}
        case 'FETCH_KANBANS_DONE':
            return {...state, loading: false, kanbans: action.payload}
        default:
            return state
    }
}

export default kanbanReducer