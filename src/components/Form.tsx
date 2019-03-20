import * as React from 'react';

interface FormProps {
    saveWord: (word: string, img: string) => void
}

interface FormState {
    word: string;
}

export default class Form extends React.Component<FormProps, FormState> {

    fileInput

    constructor(props) {
        super(props);
        this.state = {
            word: undefined
        };
        this.fileInput = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.onSaveWord = this.onSaveWord.bind(this);
    }

    handleChange(e) {
        this.setState({
            word: e.target.value
        });
    }

    onSaveWord() {
        this.props.saveWord(this.state.word, this.fileInput.current.files[0].path);
    }

    render() {
        return (
            <div>
                <div>
                    <span>Palabra:</span>
                    <input type="text" value={this.state.word} onChange={this.handleChange} />
                </div>
                <div>
                    <span>Imagen:</span>
                    <input type="file" ref={this.fileInput} />
                </div>
                <div>
                    <button onClick={this.onSaveWord}>Guardar</button>
                </div>
            </div>
        );
    }
}