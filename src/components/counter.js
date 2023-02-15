import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return "<p>There are no data</p>";
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  handleIncrement = () => {
    console.log("Handle Increment", this);
  };

  render() {
    return (
      <>
        <div className="container">
          {/* {this.state.tags.length === 0 && "Please create a new tags"}
          <div>{this.renderTags()}</div> */}
          <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
          <button onClick={this.handleIncrement} className="btn btn-primary">
            Increment
          </button>
        </div>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-1 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
