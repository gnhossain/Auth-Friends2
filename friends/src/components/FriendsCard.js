import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function FriendsCard(props){

    const handleRemove = () => {

        axiosWithAuth()
        .delete(`/api/friends/${props.friend.id}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));

         window.location.reload();
    }

    return(
        <div className='friend-card'>
            <h2>Name:{props.friend.name}</h2>
            <h3>Email:{props.friend.email}</h3>
            <h4>Age:{props.friend.age}</h4>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}