import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { convertToMinutes, convertToMs } from "../../utils/timer";

import Button from "../common/Button";
import Input from "../common/Input";
import CheckBox from "../common/CheckBox";

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 450px;

  @media (max-width: 550px) {
    width: 100%;
  }

  > div {
    flex: 1 0 100%;
    display: flex;
    flex-flow: row nowrap;

    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const StyledFormHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
`;

const StyledFormFieldLabel = styled.span`
  flex: 1 0 auto;
  align-self: center;
`;

const StyledFormFieldInput = styled(Input)`
  flex: 0 0 50%;
  width: 0;
`;

const StyledFormFieldCheckbox = styled(CheckBox)`
  flex: 0 0 50%;
  padding: 11px 0 8px;
  text-align: right;
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
    this.setState({ [e.target.name]: convertToMs(e.target.value) });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { long, short, pomodoro, notifyAllowed } = this.state;
    this.props.handleChangeSettings({
      long: long,
      short: short,
      pomodoro: pomodoro,
      notifyAllowed
    });
  }

  render() {
    const { long, short, pomodoro, notifyAllowed } = this.state,
      changeAllowed =
        long !== this.props.settings.long ||
        short !== this.props.settings.short ||
        pomodoro !== this.props.settings.pomodoro;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledFormHeader>Настройки</StyledFormHeader>
        <div>
          <StyledFormFieldLabel>{"Перерыв"}</StyledFormFieldLabel>
          <StyledFormFieldInput
            name="long"
            type="number"
            step={1}
            value={convertToMinutes(long)}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <StyledFormFieldLabel>{"Пауза"}</StyledFormFieldLabel>
          <StyledFormFieldInput
            name="short"
            type="number"
            step={1}
            value={convertToMinutes(short)}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <StyledFormFieldLabel>{"Помодор"}</StyledFormFieldLabel>
          <StyledFormFieldInput
            name="pomodoro"
            type="number"
            step={1}
            value={convertToMinutes(pomodoro)}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <StyledFormFieldLabel>{"Уведомления"}</StyledFormFieldLabel>
          <StyledFormFieldCheckbox
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
            disabled={!changeAllowed}
            value="Изменить"
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
