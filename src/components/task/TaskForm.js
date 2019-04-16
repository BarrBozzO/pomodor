import React, { Component } from "react";
import PropTypes from "prop-types";

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { label, description } = this.state;

    if (label !== "" && description !== "") {
      this.props.handleTaskCreation({
        label,
        description
      });
      this.setState({
        label: "",
        description: ""
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <input
            name="label"
            value={this.state.label}
            placeholder="Название"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            name="description"
            value={this.state.description}
            placeholder="Описание"
            onChange={this.handleChange}
          />
        </div>
        <div />
      </form>
    );
  }
}

TaskForm.propTypes = {
  handleTaskCreation: PropTypes.func.isRequired
};

export default TaskForm;
