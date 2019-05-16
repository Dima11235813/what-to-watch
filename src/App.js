import React from 'react';
//styles
import './App.css';

//components
import NetflixByCategory from './NetflixByCategory/NetflixByCategory'
import InputForFilter from './InputForFilter/InputForFilter'

class App extends React.Component {
  state = {
    filter: ""
  }
  handleChange = (event) => {
    if(event.target.value){
      console.log(event.target.value)
      this.setState({
        filter: event.target.value
      })
    }
  }
  appStyle = {
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row"
  }
  render(){
    return (
      <div style={this.appStyle} className="App">
        <InputForFilter handleChange={this.handleChange}/>
        <NetflixByCategory filter={this.state.filter}/>
      </div>
    );
  }
}

export default App;
