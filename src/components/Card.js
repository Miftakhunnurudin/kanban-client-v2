import {Draggable} from 'react-beautiful-dnd'

function Card (props) {
    const {title,content,id} = props.task
    const {index, colWidth} = props
    // console.log('props task', id)
    return(
        <>
            <Draggable draggableId={id} index={index}>
                {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="card shadow-sm mb-2"
                    //   style = {{width: colWidth+'px'}}
                    >
                        <div className="card-body">
                            <div className="card-title">{title}</div>
                            <div className="card-text">
                                {content}
                            </div>
                        </div>
                    </div>
                )}
            </Draggable>
        </>
    )
}

export default Card