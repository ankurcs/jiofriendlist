import React, { useEffect, useState } from "react";

export default function ShowFriendList(props) {
    useEffect(() => {
        setFriends(props.friendList);
    }, [props.friendList]);

    const [friends, setFriends] = useState(props.friendList);
    const [searchText, setSearch] = useState('');
    const setSearchText = (text) => {
        setSearch(text);
        if (text.length > 1) {
            let allFriends = JSON.parse(JSON.stringify(friends));
            let findFriends = allFriends.filter(function (value) {
                if (value['name'].indexOf(text) > -1)
                    return value;
            });
            setFriends(findFriends);
        }
        else {
            setFriends(props.friendList);
        }
    }
    return (
        <div>
            <input type="search" value={searchText} onChange={(event) => { setSearchText(event.target.value) }} placeholder="Enter friend name to search in the list" />
            {
                friends && friends.length > 0
                    ?
                    <div className="friendlist-container">
                    {
                        friends.map((key) => {
                            return (
                                <div className="friend-inner" key={key['id']}>
                                    <div>
                                        <div>{key['name']}</div>
                                        <div className="friend-status">is your {key['isClose'] && 'close'} friend</div>
                                    </div>
                                    <div className="friend-operations">
                                        <div 
                                            className={`isClose ${key['isClose'] === true ? 'isCloseFriend' : 'normal'}`}
                                            onClick={()=>props.changeFriendStatus(key['id'])}
                                        >
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="isClose" onClick={()=>props.removeFriend(key['id'])}>
                                            <i className="fa fa-trash"></i>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
                    :
                    <h4>Friend list is empty</h4>
            }
        </div>
    );
}