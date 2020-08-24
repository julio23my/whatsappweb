import React, {useEffect, useState} from 'react';
import "./Chat.css";
import {Avatar, IconButton} from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import {InsertEmoticon, Mic} from "@material-ui/icons"
import {useParams} from "react-router-dom";
import db from './firebase';
function Chat(){
    const [ input, setInput] = useState("");
    const [ seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(()=> {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => setRoomName(snapshot.data().name));



        }

    }, [roomId]);

    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 120));
    },[roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('YOU TYPE >>> ', input);

        setInput('');


    };
    return(
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p> Last Seen At ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                     <IconButton>
                         <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"} `}>
                <span className="chat__name">
                    Mariana Torrens
                </span>

                    hola como esta todo?
                <span className="chat__timestamp">
                    2:22pm
                </span>
                </p>


            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)}  placeholder="Type a message" type="text" className=""/>
                    <button onClick={sendMessage} type='submit'> Send a message</button>
                </form>
                <Mic/>


            </div>
        </div>
    );
}

export default Chat