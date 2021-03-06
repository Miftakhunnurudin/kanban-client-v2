import {useState, useEffect} from 'react'

function Sanbox ({socket}) {
    const [user,setUser] = useState('')
    const [msg,setMsg] = useState('')
    const [msgList,setMsgList] = useState([])
    const [kanban,setKanban] = useState({})

    const onChangeHandler = ({target}) => {
        const {value, name} = target
        if (name === 'user') setUser(value)
        if (name === 'msg') setMsg(value)
    }

    const onClickHandler = (e) => {
        e.preventDefault()
        socket.emit("message",{user,msg})
        // const newMsgList = Array.from(msgList)
        // newMsgList.push({user,msg})
        // console.log(newMsgList,'newMsgList')
        // setMsgList(newMsgList)
        // console.log("click")
        // console.log(msgList,'msgList')

    }

    useEffect(()=>{
        socket.on("message", (data) => {
            // console.log(msgList);
            const newMsgList = Array.from(msgList)
            console.log(msgList,data,'incoming');
            newMsgList.push(data)
            console.log(newMsgList,'newMsgList socket')
            setMsgList(newMsgList)
        })
        socket.on("getKanban", (data) => {
            setKanban(data)
            console.log(data)
        })
    // eslint-disable-next-line
    },[socket,msgList]);

    useEffect(()=>{
        socket.emit('getKanban','612a4cf473d2880af079ef02')
    },[])
    return (
        <>
            <form className="mb-5">
                <input type="text" className="form-control" name="user" onChange={onChangeHandler}/>
                <input type="text-area" className="form-control" name="msg" onChange={onChangeHandler}/>
                <button className="btn btn-primary" onClick={onClickHandler}>SEND</button>
            </form>
            <div>{JSON.stringify(kanban,2,1)}</div>
            <ul>
                {
                    msgList?.map((msg,i) => <li key={i}>{msg.user} - {msg.msg}</li>)
                }
            </ul>
        </>
    )
}

export default Sanbox