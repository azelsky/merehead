import React, {Component} from 'react';
import {Panel, Image} from 'react-bootstrap';
import PropTypes from "prop-types";

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

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    })
};
