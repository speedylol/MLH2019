import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';


const API_KEY = "9cFkFXpsgH57B659"
const API_URL = 'http://api.eventful.com/json/events/search?'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            myEvent: [],
            location: 'Chapel Hill',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        fetch(`${API_URL}app_key=${API_KEY}&location=${this.state.location}}}`, {
            mode: "cors"
        })
            .then(results => results.json())
            .then(json => {this.setState({
                myEvent: json.events.event,
            })
        });
    }

    handleChange (e) {
        this.setState({
            location: e.target.value
        });
      }

    handleSubmit(e){
        this.setState({location: e.target.value});
        e.preventDefault();
    }

    render(){

        return (
            <div>
                <form onSubmit="{this.handleSubmit}">
                    <input type="text" value={this.state.location} ref="text" onChange={this.handleChange} />
                    <button type="submit"> Search</button>
                </form>

                <ul>
                        {this.state.myEvent.map(event => (
                            <li>
                                {event.title} | {event.start_time}
                            </li> 
                        ))}
                    </ul>
            </div>
        
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);