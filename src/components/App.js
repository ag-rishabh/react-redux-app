import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-8">
                    <SongList />
                </div>
                <div className="col-sm-6 col-md-4">
                    <SongDetail />
                </div>
            </div>
        </div>
    );
};

export default App;