import {mdiPlus} from '@mdi/js';
import { useState } from 'react';
import { initialData } from '../store/initialData';
import { Droppable } from 'react-beautiful-dnd'
import Icon from '@mdi/react';
import Card from './Card'

function Column (props) {
    // eslint-disable-next-line
    const [task, setTask] = useState(initialData.task)
    const sizeIcon = 0.9
    const {title,taskIds, id} = props.columnData
    console.log('key column ',id)
    return (
        <>
            <div className="col-md-4 col-sm-12 mb-2">
                <div className="p-3 item">
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
                    <Droppable droppableId={id}>
                        { (provided) =>
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {taskIds?.map( (taskId, index) => <Card key={taskId} task={task[taskId]} index={index}/>)}
                                {provided.placeholder}
                            </div>
                        }
                    </Droppable>
                </div>
            </div>
        </>
    )
}

export default Column