import React,{ Component} from 'react';

import {robots} from './robots';
import CardList from './CardList';
import SearchField from './SearchField';
import 'tachyons';
import './App.css';

const state ={
  robots:robots,
  searchfield:''
}
class App extends Component{
  constructor(){
    super()
    this.state ={
        robots:[],
        searchfield:''
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({robots:users}));
  }

  onSearchChange = (event) => {
    
     this.setState({searchfield:event.target.value})
     
      
  }
  render(){
    const filterRobots = this.state.robots.filter(robots =>{
       return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     })
     if(this.state.robots.length === 0){
       return <h1>Loading</h1>
     }else{
  return (
    <div >
    <div className = 'tc'>
      <h1 > RoboFriend</h1>
       <SearchField searchChange={this.onSearchChange}/>

    </div>
     
     <CardList robots={filterRobots}/>
    </div>
     
  );

}
  }
}
export default App;