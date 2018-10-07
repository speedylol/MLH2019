import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {

    constructor() {
        super();
        this.state = {
            eventList: []     
         }
    }


    componentDidMount(){
    /* fetch(' http://api.eventful.com/json/events/search?app_key=9cFkFXpsgH57B659&location=Raleigh')
        .then(results => {
            return results.json();
        }).then(data => {
            if(this.props.data){
            var events = this.data.results.map((ev) => {
                return(
                    <div key={ev.results}>
                        <h1>{ev.events}</h1>
                    </div>
                )
            })
        }
            this.setState({eventList: events});
            console.log("state", this.state.eventList);
        })
    */
   this.getEvents();
    }

    getEvents(){
        fetch('http://api.eventful.com/json/events/search?app_key=9cFkFXpsgH57B659&location=Raleigh')
        .then(results => results.json())
        .then(results => this.setState({eventList: results.title}));
    }

    render(){
        return (
            /*<ul>
                {this.state.eventList.map((event, index) => {
                    return <h1>{event.title}</h1>
                })}
            </ul> */
            console.log(this.state.eventList.map(event => event.length))
        );
    }
}

export default Search;