
import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import AddAFriend from './AddAFriend';
import ShowFriendList from "./ShowFriendList";

const App = () => {
    const [friendList, setFriend] = useState([]);
    const setNewFriendObject = (friendName, isClose) => {
      return {
        'id': Date.now(),
        'name': friendName,
        'isClose': isClose
      }
    }
    const setFriendList = (friendName) => {
      if(friendName.length > 0) {
        let allFriends = JSON.parse(JSON.stringify(friendList));
        let newFriend = setNewFriendObject(friendName, false);
        allFriends.push(newFriend);
        setFriend(allFriends);
      }
    }
    const removeFriend = (value) => {
      let updatedFriendList = friendList.map((key)=>{
        if (key['id'] !== value) {
          return key;
        }
      });
      updatedFriendList = updatedFriendList.filter(function(value){
        return value !== undefined
      })
      setFriend(updatedFriendList);
    }
    const changeFriendStatus = (id) => {
      let updatedFriendList = friendList.map((value)=>{
        if(value['id'] === id) {
          value['isClose'] = !value['isClose'];
        }
        return value
      });
      setFriend(updatedFriendList);
    }
    return (
      <div className="main-layout">
        <AddAFriend setFriendList={setFriendList}/>
        <ShowFriendList changeFriendStatus={changeFriendStatus} removeFriend={removeFriend}friendList={friendList}/>
      </div>
    );
}

export default hot(App);
