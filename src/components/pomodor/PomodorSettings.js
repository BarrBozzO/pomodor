import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../common/Button";
import Input from "../common/Input";
import CheckBox from "../common/CheckBox";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;

  & > div {
    flex: item;
  }
`;

class PomodorSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.settings
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { long, short, pomodoro, notifyAllowed } = this.state;
    this.props.handleChangeSettings({
      long,
      short,
      pomodoro,
      notifyAllowed
    });
  }

  render() {
    const { long, short, pomodoro, notifyAllowed } = this.state,
      changeDisabled = false;
    return (
      <StyledForm handleSubmit={this.handleSubmit}>
        <div>Настройки</div>
        <div>
          <Input
            name="long"
            type="number"
            value={long}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <Input
            name="short"
            type="number"
            value={short}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <Input
            name="pomodoro"
            type="number"
            value={pomodoro}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <CheckBox
            name="notifyAllowed"
            id="notifyAllowed"
            checked={notifyAllowed}
            value={notifyAllowed}
            disabled={true}
          />
        </div>
        <div>
          <Button
            type={"submit"}
            disabled={changeDisabled}
            value="Изменить"
            handleChange={this.handleChange}
            primary={true}
          />
        </div>
      </StyledForm>
    );
  }
}

PomodorSettings.propTypes = {
  settings: PropTypes.shape({
    long: PropTypes.number,
    short: PropTypes.number,
    pomodoro: PropTypes.number,
    notifyAllowed: PropTypes.bool
  }).isRequired,
  handleChangeSettings: PropTypes.func.isRequired
};

export default PomodorSettings;
