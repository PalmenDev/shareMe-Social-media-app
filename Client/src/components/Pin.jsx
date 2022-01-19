import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {MdDownloadForOffline} from 'react-icons/md';
import {AiTwotoneDelete} from 'react-icons/ai';
import {BsFillArrowUprightCircleFill} from 'react-icons/bs';

import { urlFor, client } from '../client';

const Pin = ({pin: {postedBy, image, _id, destination}}) => {

    const [postHovered, setPostHovered] = useState(false);
    const [savingPost, setSavingPost] = useState(false);

    const navigate = useNavigate();

    return (
        <div className='m-2'>
            <div onMouseEnter={() => setPostHovered(true)}
            onMouseLeave={() => setPostHovered(false)}
            onClick={() => navigate(`/pin/-detail/${_id}`)}
            >

            </div>

            <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
        </div>
    )
}

export default Pin
