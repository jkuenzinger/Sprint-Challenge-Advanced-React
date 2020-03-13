import React from 'react'
// creating a class component that is goign to render all my players from the data i recieve.
// intializing the state with an array called Players this is where im going to stick the date i recieve form the api call.

export default class PlayerList extends React.Component{
    constructor(){
        super()
            this.state={
                players: []
            }
        }
// below im creating a componedidmount function wehre i will be fetching the players data fom the api hosted locally on my system
// I will then set the response i get to the players array use this.setstate and set up a catch in case there is an error
componentDidMount(){
fetch('http://localhost:5000/api/players')
.then(res => res.json())
.then(res =>{this.setState({players: res})})
.catch(err => console.log('unable to fetch players', err))
}
// due to this being a class component we need to call render before our return
// in our return I plan to return a div and map through the data recieved in hopes of creating a div for each player returned
// i play for each player to have their own styled card
render(){
    return(
        <div>
            <h2>Players</h2>
            {this.state.players.map((player) => <p>{player.name}</p>)}
        </div>
    )
}
}