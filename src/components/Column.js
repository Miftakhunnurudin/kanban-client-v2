import {mdiPlus} from '@mdi/js';
import { useState, useCallback } from 'react';
import {useSelector} from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'
import Icon from '@mdi/react';
import Card from './Card'

function Column (props) {
    // eslint-disable-next-line
    const {task} = useSelector(state => state.kanbans.kanbans)
    // const [task, setTask] = useState(initialData.task)
    const [colWidth, setColWidth] = useState(null)
    const sizeIcon = 0.9
    const {title,taskIds, id} = props.columnData
    const columnRef = useCallback(node => {
        if (node !== null) {
          setColWidth(node.getBoundingClientRect().width);
        }
      }, []);
    // console.log(task)
    return (
        <>
            <div className="col-md-4 col-sm-12 mb-2" ref={columnRef}>
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
                                {taskIds?.map( (taskId, index) => <Card key={taskId} task={task[taskId]} index={index} colWidth={colWidth}/>)}
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