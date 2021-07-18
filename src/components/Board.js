import {mdiAccountGroupOutline} from '@mdi/js';
import Icon from '@mdi/react';
import { useState } from 'react';
import { initialData } from '../store/initialData';
import Column from './Column';

function Board () {
    // eslint-disable-next-line
    const [data, setData] = useState(initialData)
    const sizeIcon = 0.9
    const colorIcon = '#6F6F6F'
    return (
        <>
            <div className="board">
                <div className="d-flex justify-content-between">
                    <h2>Title</h2>
                    <div>
                        <Icon path={mdiAccountGroupOutline}
                          size = {sizeIcon}
                          color = {colorIcon}
                          className = "m-1 me-2"
                        />
                    </div>
                </div>
                <div className="row align-items-start h-100 pb-3">
                    {
                        data.columnOrder.map(columnId => <Column key={columnId} columnData={data.column[columnId]}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Board