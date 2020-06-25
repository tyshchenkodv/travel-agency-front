/**
 * Events component script class
 *
 * @package    Common
 */

import React, { PureComponent } from 'react';
import axios from 'axios';
import image from "../../styles/images/event_2.jpg";

export default class EventItem extends PureComponent {
    state = {
        loading: false,
        item: {},
    };

    componentDidMount() {
        this.loadEvent();
    }

    loadEvent() {
        const { match: { params: { id } } } = this.props;

        this.setState({
            loading: true,
        }, () => {
            axios.get(`http://localhost:3001/vacations/${id}`)
                .then((response) => {
                    this.setState({
                        loading: false,
                        item: response.data.item,
                    });
                })
                .catch(() => {
                    this.setState({
                        loading: false,
                    });
                });
        });
    }

    render() {
        const {loading, item} = this.state;

        return (
            <>
                <div className="page-top" id="templatemo_events"/>
                <div className="middle-content">
                    <div className="container">
                        <div className="row">
                            {!loading &&
                                <div className="widget-item">
                                    <h3 className="widget-title">{item.title}</h3>
                                    <div className="sample-thumb">
                                        <img src={image} alt="New Event" title="New Event"/>
                                    </div>
                                    <h4 className="consult-title">{item.title}</h4>
                                    <p>{item.description}<br/><br/>
                                        Price: {item.price}<br/><br/>
                                        Date Start: {item.date_start}<br/><br/>
                                        Date End: {item.date_end}<br/><br/>
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
