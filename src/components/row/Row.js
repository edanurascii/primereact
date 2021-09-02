import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Row extends Component {

    static defaultProps = {
        style: null,
        className: null,
        rowName: null
    }

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        rowName: PropTypes.string
    }

    render() {
        return <tr>{this.props.children}</tr>;
    }
}