import { connect } from "react-redux";
import Administration from "../components/Administration";
import { addWord } from "../state/actions";

const mapStateToProps = state => {
    return {
        words: state.words
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveWord: (word, image) => {
            dispatch(addWord(word, image));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Administration);