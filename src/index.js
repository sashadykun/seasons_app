import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season_display';
import Spinner from './spinner';
import useLocation from './use_location'


const App = () => {
    const [lat, errorMessage] = useLocation();

    let content;
    if(errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if ( lat ) {
        content = <SeasonDisplay latitude={lat} />;
    } else {
        content = <Spinner message="Please accept location request"/>
    }

    return <div className="border red">{content}</div>
    

};

// class App extends React.Component{
    
//     state = {
//         latitude: null,
//         errorMessage: '' 
//     }

//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => this.setState({ latitude: position.coords.latitude }),
//             (err) => this.setState({ errorMessage: err.message })
//         )
//     }

    


//     renderContent(){
//         if(this.state.errorMessage && !this.state.latitude){
//             return <div>Error: {this.state.errorMessage}</div>
//         }

//         if(!this.state.errorMessage && this.state.latitude){
//             return <SeasonDisplay latitude={this.state.latitude}/>
//         }
        
//         return <Spinner message="Please accept location request"/>
//     }

//     render(){
//         return(
//             <div className="border red">
//                 {this.renderContent()}
//             </div>
//         )
           
//     }
// }

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);