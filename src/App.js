
import { Component } from 'react';
import './App.css';
import playlists from './data';
import Song from './Song';

class App extends Component{
  state=  {
    playlists: playlists,
    title: '',
    artist:'', 
    time:''
  }

  handleChange =(e)=> {
    this.setState({ [e.target.id] : e.target.value})
  }

  handleSubmit =(e) =>{
   e.preventDefault();
   const newSong = {
    title: this.state.title,
    artist: this.state.artist, 
    time: this.state.time
   }

   this.setState({
     playlists: {
       songs:[...this.state.playlists.songs, newSong],
       title: this.state.title,
       created: this.state.created
     },
     title: '',
     artist:'',
     time:''
   })
   console.log(this.state.playlists.songs)
  }

  render(){
  return(
    <div className="tunr-container">
      <header>
      <h1>Tunr.</h1>
      <h2>For All Your Playlist Needs</h2>
      </header>

      <div className="playlist">
            <h1>{this.state.playlists.title}</h1>

            <div className="songs">
              {/* <h1>{this.state.playlists.songs[0].title}</h1>
              <h2>{this.state.playlists.songs[0].artist}</h2>
              <h3>{this.state.playlists.songs[0].time}</h3> */}
              {this.state.playlists.songs.map(song => (
               <Song song={song}/>
              ))
              }
            </div>
      </div>

    <form onSubmit={this.handleSubmit}>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' value={this.state.title} onChange={this.handleChange}/>

      <label htmlFor='artist'>Artist</label>
      <input type='text' id='artist' value={this.state.artist} onChange={this.handleChange}/>

      <label htmlFor='time'>Time</label>
      <input type='text' id='time' value={this.state.time} onChange={this.handleChange}/>
      
      <input type='submit'/>
    </form>
    </div>
  )
}
}

export default App;
