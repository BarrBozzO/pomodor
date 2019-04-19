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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { label, description } = this.state;

    if (label !== "" && description !== "") {
      this.props.handleAdd({
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
    const { label, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="label"
            value={label}
            placeholder="Название"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            name="description"
            value={description}
            placeholder="Описание"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            disabled={label === "" || description === ""}
            type="submit"
            value="+"
          />
        </div>
      </form>
    );
  }
}

TaskForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default TaskForm;
