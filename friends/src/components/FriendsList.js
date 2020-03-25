import React, { useEffect, useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendFrom';
import FriendsCard from './FriendsCard';
import Logout from './Logout';

export default function FriendList(){

    const [friends, setFriends] = useState([]);

    useEffect( () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            // console.log(res.data);
            setFriends(res.data);
        })
        .catch(err => console.log(err))
    }, []);


    return(
        <div>
            <Logout/>
            <AddFriendForm />
            <div className='friend-list'>
                {friends.map( friend => 
                    <FriendsCard key= {friend.id} friend={friend}/>) } 
            </div>
        </div> 
    )
}