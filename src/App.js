
import { Component } from 'react';
import './App.css';
import playlists from './data';
console.log(playlists);

class App extends Component{
  state=  {
    playlists: playlists
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
                <div className='song' key={song.time}>
                    <h1>{song.title}</h1>
                    <h2>{song.artist}</h2>
                    <h3>{song.time}</h3>
                </div>
              ))}

            </div>
      </div>
    </div>
  )
}
}

export default App;
