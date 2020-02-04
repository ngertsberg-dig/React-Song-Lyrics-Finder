import React from 'react';
import './App.css';
import Search from './components/Search';
import Lyrics from './components/Lyrics';
import './index.sass';

class App extends React.Component {
  state = {
    fetching: false,
    lyrics: null,
    lyricsnotfound: false,
    fetchedOnce: false
  }

  componentDidMount(){
    document.addEventListener("keydown",(key)=>{
      if(key.keyCode === 13){
        this.searchLyrics();
      }
    })
  }

  async searchLyrics(){
    const artistName = document.querySelector("#artistName input").value;
    const songName = document.querySelector("#songName input").value;
    if(artistName.length > 0 && songName.length > 0){
      this.setState({
        fetching: true,
        fetchedOnce: true
      })
      const data = await fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`).then(res=>res.json());
      if(data.error){
        this.setState({
          lyricsnotfound: true,
          fetching: false
        })
      }
      else{
        this.setState({ lyrics: data.lyrics, lyricsnotfound: false, fetching: false });
      }
    }
    else{
      alert("fill out both Artist Name and Song Name!");
    }
  }
  render(){
      return (
        <div className="App">
          <Search searchLyrics = {(e)=>this.searchLyrics(e)}/>
          {
            this.state.fetching != true ? 
              <Lyrics lyrics = {this.state.lyrics} lyricsError = {this.state.lyricsnotfound} />
                :
              <p>Loading..</p>
          }
        </div>
    );
  }
}

export default App;
