const axios = require('axios')

export default function fetchKanbans () {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'FETCH_KANBANS_START'
            })

            const resp = await axios.get('./initialData.json')
            console.log(resp)
            dispatch({
                type: 'FETCH_KANBANS_DONE',
                payload: resp.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}