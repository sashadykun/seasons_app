import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season_display';

class App extends Component{
    
    state = {
        latitude: null,
        errorMessage: '' 
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ latitude: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        )
    }

    // componentDidUpdate(){
    //     console.log('my component did update')
    // }

    render(){
        
       
           if(this.state.errorMessage && !this.state.latitude){
               return <div>Error: {this.state.errorMessage}</div>
           }

           if(!this.state.errorMessage && this.state.latitude){
               return <SeasonDisplay latitude={this.state.latitude}/>
           }
           
           return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);