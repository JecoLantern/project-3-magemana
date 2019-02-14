import React from 'react';
import { Col } from '../../../components/Grid';
import '../styles/avatar.css';
import AvatarDummyIMG from '../assets/avatarDummy';

const Avatar = () => (
    <Col size="2">
        <div id="square1"><h6><AvatarDummyIMG></AvatarDummyIMG></h6></div>
    </Col>
)

export default Avatar;