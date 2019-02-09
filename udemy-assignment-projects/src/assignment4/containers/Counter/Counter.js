import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter(1)} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter(1)}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddValueCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtrackValueCounter(5)}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: (value) => dispatch({type: 'INCREMENT', value: value}),
        onDecrementCounter: (value) => dispatch({type: 'DECREMENT', value: value}),
        onAddValueCounter: (value) => dispatch({type: 'ADD_VALUE', value: value}),
        onSubtrackValueCounter: (value) => dispatch({type: 'SUBTRACK_VALUE', value: value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);