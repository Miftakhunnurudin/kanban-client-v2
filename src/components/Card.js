
function Card (props) {
    const {title,content} = props.task
    return(
        <>
            <div className="card w-100 shadow-sm mb-2">
                <div className="card-body">
                    <div className="card-title">{title}</div>
                    <div className="card-text">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card