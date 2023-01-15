import React from 'react';
import Sends from './Sends';
import '../index.css'

const LeftPane = () => {
    return (
        <div className="pane"
            // style={{
            //     flex: 1,
            //     border: '10px',
            //     border: '1px solid black',
            //     padding: '8px',
            //     margin: '8px',
            // }}
            >
            <Sends />
        </div>
    );
};

export default LeftPane;