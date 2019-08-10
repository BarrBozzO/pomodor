import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import useForm from "../hooks/useForm";
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
function TaskForm(props) {
  const submit = (task, setTask) => {
    const { label, description } = task;

    if (label !== "" && description !== "") {
      props.handleAdd({
        label,
        description
      });
      setTask({
        label: "",
        description: ""
      });
    }
  };

  const { inputs, handleSubmit, handleChange } = useForm({
    submit
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Input
          name="label"
          type="text"
          value={inputs.label || ""}
          placeholder="Название"
          handleChange={handleChange}
        />
      </div>
      <div>
        <Input
          name="description"
          type="text"
          value={inputs.description || ""}
          placeholder="Описание"
          handleChange={handleChange}
        />
      </div>
      <div>
        <Button
          type={"submit"}
          disabled={inputs.label === "" || inputs.description === ""}
          value="Добавить"
          primary={true}
        />
      </div>
    </StyledForm>
  );
}

TaskForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default TaskForm;
