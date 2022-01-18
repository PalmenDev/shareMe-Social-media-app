import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {client} from '../client.js';
import MasonryLayout from './MasonryLayout.jsx'
import Spinner from './Spinner.jsx'

function Feed() {
    const [loading, setLoading] = useState(true)
    if(loading) {
        return <Spinner message='We are adding new ideas to your feed!'/>
    } 
    return (
        <div>
            Feed
        </div>
    )
}

export default Feed
