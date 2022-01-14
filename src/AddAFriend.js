import React from 'react';

import { useState } from "react";

export default function AddAFriend(props) {
    const [friendName, setFriendName] = useState('');
    const onChangeFriend = (event) => {
        setFriendName(event.target.value);
    }
    const onAddFriend = () => {
        props.setFriendList(friendName);
        setFriendName('');
    }
    return(<div>
        <input type="text" onChange={(event)=>onChangeFriend(event)} value={friendName} placeholder='Enter name to add in the friend list.'/>
        <button className="btn-primary" onClick={()=>onAddFriend()}>Add Friend</button>
    </div>)
}