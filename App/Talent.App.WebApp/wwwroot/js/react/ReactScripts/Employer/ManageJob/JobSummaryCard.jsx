import React from 'react';
import Cookies from 'js-cookie';
import { Popup } from 'semantic-ui-react';
import moment from 'moment';

export default class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);

        {/* const details = props.details ?
            Object.assign({}, props.details)
            : {
                jobData: {
                    Title: "",
                    Summary: "",
                    Location: { country: "", city: "" }
                    
                }
            }*/}
      
        this.selectJob = this.selectJob.bind(this)
    }

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }

    render() {

        return (
            {/*  <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header"> {this.state.newJob.Title} </div>
                        <div className="ui black right ribbon label"><i className="user icon"></i></div>
                        <div className="meta"> {this.state.newJob.Location} </div>
                        <div className="description"> <p>{this.state.newJob.Summary}</p></div>
                        <div className="extra content">
                            <div className="right floated">
                                <div className="ui primary basic buttons">
                                    <button className="ui button"><i className="window close outline icon"></i>Close</button>
                                    <button className="ui button"><i className="edit icon"></i>Edit</button>
                                    <button className="ui button"><i className="copy icon"></i>Copy</button>
                                </div>
                            </div>
                            <div className= "left floated">
                               <button className="negative ui left button">Expired</button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>*/}
            
        );
    }
}
