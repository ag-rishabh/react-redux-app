import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends React.Component {
    renderList = () => {
        return this.props.songs.map(song => {
            return (
                <div key={song.title}>
                    <ul className="list-group">
                        <li className="list-group-item">
                            {song.title}
                            <span 
                                className="btn btn-primary badge"
                                onClick={() => this.props.selectSong(song)}
                            >
                                Select
                            </span>
                        </li>
                    </ul>
                </div>
            );
        });
    }
    render() {
        return(
            <div>{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        songs: state.songs
    };
}

export default connect(mapStateToProps,{ selectSong })(SongList);