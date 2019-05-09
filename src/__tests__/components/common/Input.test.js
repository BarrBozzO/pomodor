import React from "react";
import renderer from "react-test-renderer";

import Input from "../../../components/common/Input";

it("should render Input component correctly when all props are passed", () => {
  const name = "testInput",
    type = "password",
    disabled = true,
    value = "test",
    placeholder = "test placeholder",
    onChange = jest.fn();

  const tree = renderer
    .create(
      <Input
        name={name}
        type={type}
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        handleChange={onChange}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
