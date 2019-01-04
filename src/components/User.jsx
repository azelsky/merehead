import React, {Component} from 'react';
import {Panel, Image} from 'react-bootstrap';

import {pictureURL} from '../constants'

class User extends Component {

    render() {
        const {id, name, surname, desc} = this.props.user;
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h3">{`${name} ${surname}`}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Image src={pictureURL.replace('{{id}}', id)} rounded />
                </Panel.Body>
                <Panel.Body>
                    {desc}
                </Panel.Body>
            </Panel>
        );
    }
}

export default User
