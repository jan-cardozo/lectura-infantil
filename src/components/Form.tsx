import * as React from 'react';

export default class Form extends React.Component {
    captureInput(e) {
        console.log(e);
        
    }
    render() {
        return (
            <div>
                <div>
                    <span>Palabra:</span>
                    <input type="text" onChange={this.captureInput} />
                </div>
                <div>
                    <span>Imagen:</span>
                    <input type="file" />
                </div>
                <div>
                    <button {/*onClick={this.props.onSaveWord}*/}>Guardar</button>
                </div>
            </div>
        );
    }
}