import fs from 'fs'

export default function fetchKanbans () {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'FETCH_KANBANS_START'
            })

            const data = fs.readFileSync('./src/store/initialData.json','utf-8')

            dispatch({
                type: 'FETCH_KANBANS_DONE',
                payload: data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}