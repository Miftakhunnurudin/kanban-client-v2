import {mdiAccountGroupOutline} from '@mdi/js';
import Icon from '@mdi/react';
import { useState, useEffect } from 'react';
import Column from './Column';
import {DragDropContext} from 'react-beautiful-dnd'
import {useSelector, useDispatch} from 'react-redux'
import fetchKanbans from '../store/actions/fetchKanbans';

function Board () {
    // eslint-disable-next-line
    const {kanbans, loading} = useSelector(state => state.kanbans)
    const [data, setData] = useState(kanbans)
    const dispatch = useDispatch()
    const sizeIcon = 0.9
    const colorIcon = '#6F6F6F'

    useEffect(()=>{
      dispatch(fetchKanbans())
      // eslint-disable-next-line
    },[])

    useEffect(()=>{
      setData(kanbans)
      console.log('kanbaaan')
    },[kanbans])

    const onDragEnd = (result) => {
        // console.log(result)
        const {destination, source, draggableId } = result;

        if(!destination) {
          return;
        }
      
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
          return;
        }
        const start = data.column[source.droppableId];
        const finish = data.column[destination.droppableId];

        if (start.id === finish.id) {
          const newTaskIds = Array.from(start.taskIds);
          newTaskIds.splice(source.index, 1);
          newTaskIds.splice(destination.index, 0, draggableId);
        
          const newColumn = {
            ...finish,
            taskIds: newTaskIds,
          };
        
          const newState = {
            ...data,
            column: {
              ...data.column,
              [newColumn.id]: newColumn,
            },
          };
        
          setData(newState)
          // console.log(newState,"same column");
          return ;
        }
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
          ...start,
          taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          taskIds: finishTaskIds,
        };

        const newState = {
          ...data,
          column: {
            ...data.column,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        };
        setData(newState)
        // console.log(newState,"different column");
    }
    return (
        <>
          {!loading && (<>
            <div className="board">
                <div className="d-flex justify-content-between">
                    <h2>Testing</h2>
                    <div>
                        <Icon path={mdiAccountGroupOutline}
                          size = {sizeIcon}
                          color = {colorIcon}
                          className = "m-1 me-2"
                        />
                    </div>
                </div>
                <div className="row align-items-start h-100 pb-3">
                    <DragDropContext onDragEnd={onDragEnd}>
                        {
                            data.columnOrder?.map(columnId => <Column key={columnId} columnData={data.column[columnId]}/>)
                        }
                    </DragDropContext>
                </div>
            </div>
            </>)}
        </>
    )
}

export default Board