import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const Search = ({ searchLyrics }) => (
    <div className = 'lyric-inputs'>
        <div id = 'artistName'>
            <TextField
            label="Artist Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            />
        </div>
        <div id = 'songName'>
            <TextField
            label="Song Name"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            />
        </div>
        <button onClick = {searchLyrics}>Search</button>
    </div>
)

export default Search;