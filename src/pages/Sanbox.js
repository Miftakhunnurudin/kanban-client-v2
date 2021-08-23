import {useState, useEffect} from 'react'

function Sanbox ({socket}) {
    const [user,setUser] = useState('')
    const [msg,setMsg] = useState('')
    const [msgList,setMsgList] = useState([])

    const onChangeHandler = ({target}) => {
        const {value, name} = target
        if (name === 'user') setUser(value)
        if (name === 'msg') setMsg(value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        socket.emit("message",{user,msg})
        console.log("click")
    }

    useEffect(()=>{
        socket.on("message", (data) => {
            console.log(msgList);
            setMsgList([...msgList,data])
        })
    },[socket, msgList]);
    return (
        <>
            <form className="mb-5">
                <input type="text" className="form-control" name="user" onChange={onChangeHandler}/>
                <input type="text-area" className="form-control" name="msg" onChange={onChangeHandler}/>
                <button className="btn btn-primary" onClick={onClickHandler}>SEND</button>
            </form>
            <ul>
                {
                    msgList?.map(msg => <li>{msg.user} - {msg.msg}</li>)
                }
            </ul>
        </>
    )
}

export default Sanbox