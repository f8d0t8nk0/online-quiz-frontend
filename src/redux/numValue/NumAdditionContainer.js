import React from 'react';
import {addNum} from "./numValueAction";
import {connect} from 'react-redux';


function NumAdditionContainer(props) {

    return (
        <div>
            <h2>Number of clicks - {props.numVal}</h2>
            <button onClick={props.addNum}>Add</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numVal: state.numVal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addNum: () => dispatch(addNum())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NumAdditionContainer);