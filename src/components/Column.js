import {mdiPlus} from '@mdi/js';
import { useState } from 'react';
import { initialData } from '../store/initialData';
import Icon from '@mdi/react';
import Card from './Card'

function Column (props) {
    // eslint-disable-next-line
    const [task, setTask] = useState(initialData.task)
    const sizeIcon = 0.9
    const {title,taskIds} = props.columnData
    return (
        <>
            <div className="col-md-4 col-sm-6 h-100">
                <div className="h-100 p-3 item">
                    <div>
                        <h6>{title}</h6>
                    </div>
                    <div className="w-100 add mt-4 mb-3">
                        <Icon path={mdiPlus}
                            size = {sizeIcon}
                            color = "#E36F66"
                            className = "m-1 me-2"
                        />
                    </div>
                    {
                        taskIds?.map(taskId => <Card key={taskId} task={task[taskId]}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Column