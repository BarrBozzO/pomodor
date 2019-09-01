import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { convertToMinutes, convertToMs } from "../../utils/timer";
import { defaultSettings } from "../../constants";

import useForm from "../../hooks/useForm";
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

function PomodorSettings(props) {
  const onSubmit = (settings, setSettings) => {
    const { long, short, pomodoro, notifyAllowed } = settings;
    props.handleChangeSettings({
      long: long,
      short: short,
      pomodoro: pomodoro,
      notifyAllowed
    });
  };

  const onChange = value => {
    return convertToMs(value);
  };

  const onReset = () => {
    const { long, short, pomodoro } = defaultSettings;
    const { notifyAllowed } = inputs;
    return setForm({
      long,
      short,
      pomodoro,
      notifyAllowed
    });
  };

  const { inputs, handleChange, handleSubmit, setForm } = useForm({
    submit: onSubmit,
    change: onChange,
    init: { ...props.settings }
  });

  const { long, short, pomodoro, notifyAllowed } = inputs,
    changeAllowed =
      long !== props.settings.long ||
      short !== props.settings.short ||
      pomodoro !== props.settings.pomodoro,
    resetAllowed =
      long !== defaultSettings.long ||
      short !== defaultSettings.short ||
      pomodoro !== defaultSettings.pomodoro;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormHeader>Настройки</StyledFormHeader>
      <div>
        <StyledFormFieldLabel>{"Перерыв"}</StyledFormFieldLabel>
        <StyledFormFieldInput
          name="long"
          type="number"
          step={1}
          value={convertToMinutes(long)}
          handleChange={handleChange}
        />
      </div>
      <div>
        <StyledFormFieldLabel>{"Пауза"}</StyledFormFieldLabel>
        <StyledFormFieldInput
          name="short"
          type="number"
          step={1}
          value={convertToMinutes(short)}
          handleChange={handleChange}
        />
      </div>
      <div>
        <StyledFormFieldLabel>{"Помодор"}</StyledFormFieldLabel>
        <StyledFormFieldInput
          name="pomodoro"
          type="number"
          step={1}
          value={convertToMinutes(pomodoro)}
          handleChange={handleChange}
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
          type="submit"
          disabled={!changeAllowed}
          value="Изменить"
          primary={true}
        />
        <Button
          type="button"
          disabled={!resetAllowed}
          value="Сбросить"
          handleClick={onReset}
        />
      </div>
    </StyledForm>
  );
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
