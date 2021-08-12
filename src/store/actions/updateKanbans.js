// const axios = require('axios')

export default function updateKanbans (data) {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'UPDATE_KANBANS_START'
            })
            // const resp = await axios.put('./initialData.json')
            // console.log(resp)
            dispatch({
                type: 'UPDATE_KANBANS_DONE',
                payload: data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}