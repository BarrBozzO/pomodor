import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../common/Button";
import Input from "../common/Input";

const StyledForm = styled.form`
  display: flex;
  flex-flow; row nowrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  & input,
  & button {
    width: 100%;
  }
  & > div {
    flex: 1 0 auto;
    padding-left: 5px;
    padding-right: 5px;
  }
  & > div:first-child {
    padding-left: 0;
  }
  & > div:last-child {
    padding-right: 0;
  }
  @media (max-width: 550px) {
    flex-flow: column;
    & > div {
      display:block;
      width: 100%;
      padding: 0;
    }
    & input,
    & button {
      margin-top: 15px;
    }
  }
`;
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
      <StyledForm onSubmit={this.handleSubmit}>
        <div>
          <Input
            name="label"
            type="text"
            value={label}
            placeholder="Название"
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <Input
            name="description"
            type="text"
            value={description}
            placeholder="Описание"
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <Button
            type={"submit"}
            disabled={label === "" || description === ""}
            value="Добавить"
            primary={true}
          />
        </div>
      </StyledForm>
    );
  }
}

TaskForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default TaskForm;
