import React from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox'
import { Component } from 'react';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import  './App.css';
// const state ={
//   robots: robots,
//   searchfield:''
// }
class App extends Component
{
  constructor(){
    super()
    this.state ={
        robots: robots,
        searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
     .then((users) => this.setState({robots:users}));
  }

  onSearchChange =(event)=>{
    this.setState({searchfield: event.target.value})
    
  
   //console.log(filterRobots);
  }
  render(){
      const filterRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield)

    })
    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else{
   return(
    <div className = 'tc'>
    <h1 className='f1'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <ErrorBoundry>
       <CardList robots={filterRobots}/>
    </ErrorBoundry>
     
    </Scroll>
    
    </div>
    
  );
   }
  }
  

}

export default App;