import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season_display';
import Spinner from './spinner';

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


    renderContent(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude){
            return <SeasonDisplay latitude={this.state.latitude}/>
        }
        
        return <Spinner message="Please accept location request"/>
    }

    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
           
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);