import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 1
    };

    render() {
        let classes = 'badge m-1 bg-';
        classes += this.state.count === 0 ? 'warning' : 'primary';

        return (
            <>
                <div class="container">
                    <span className={classes}>{this.formateCount()}</span>
                    <button className="btn btn-primary">Increment</button>
                </div>
            </>
        );
    }
    formateCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
