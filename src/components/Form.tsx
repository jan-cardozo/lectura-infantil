import * as React from 'react';

export default (props) => {
    return (
        <div>
            <div>
                <span>Palabra:</span>
                <input type="text" />
            </div>
            <div>
                <span>Imagen:</span>
                <input type="file" />
            </div>
        </div>
    );
}