import React from 'react';
import {Link} from 'react-router-dom';

const Notifications = ({notifications}) => {
    return (


        <div className="col s12 m12">
        
                <div className="card white darken-1">
                        <div className="card-content black-text">

                            <span className="card-title center">Notifications</span>
                            <div className="notificationList">
                                <ul>
                                    {notifications && notifications.map(notification => {
                                        return (
                                        <li>
                                            <Link to='/milkoutputdetails'>{notification.title}
                                            <hr></hr>
                                            {notification.content}
                                            </Link>
                                        </li>  
                                        )
                                    })}
                                </ul>
                            </div>
                        
                        </div>
                </div>
        </div>
    )
}


export default Notifications;