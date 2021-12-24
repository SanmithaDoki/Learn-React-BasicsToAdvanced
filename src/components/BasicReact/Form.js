import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "React",
    };
  }
  onChangeUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  onChangeComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  onChangeTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  onSubmitForm = (event) => {
    const { userName, comments, topic } = this.state;
    alert(`${userName} ${comments} ${topic}`);
    event.preventDefault(); //it is used to not reload page and creat new form fields.. the enter values will be there and will not reload
  };
  render() {
    const { userName, comments, topic } = this.state;
    return (
      <form onSubmit={this.onSubmitForm}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={userName}
            onChange={this.onChangeUserName}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            type="text"
            value={comments}
            onChange={this.onChangeComments}
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.onChangeTopic}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
