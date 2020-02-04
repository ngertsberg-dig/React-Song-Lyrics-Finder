import React from 'react';

const formated = () =>{
    return <p>hello</p>
}
const Lyrics = ({ lyrics, lyricsError }) => {
    let toDisplay;
    if(lyricsError){
        toDisplay = <p>Lyrics not found :(</p>;
    }
    else{
        if(lyrics){
            const LyricArray = lyrics.match(/[^\r\n]+/g);
            toDisplay = LyricArray.map((el,index)=><p key = {index}>{el}</p>);
        }
    }
    return(
        <div className = 'lyrics'>
            {toDisplay}
        </div>
    )
}

export default Lyrics;