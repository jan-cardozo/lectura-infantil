import * as React from 'react';

export default (props) => (
    <div>
        <div>
            <span>Palabra:</span>
            <input type="text" />
        </div>
        <div>
            <span>Imagen:</span>
            <input type="file" />
        </div>
        <div>
            <button onClick={props.onSaveWord}>Guardar</button>
        </div>
    </div>
);