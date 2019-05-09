import React from "react";
import renderer from "react-test-renderer";

import Checkbox from "../../../components/common/CheckBox";

it("should render Button component correctly", () => {
  const id = "testId",
    checked = false,
    disabled = true,
    name = "testName",
    handleChange = jest.fn();

  const tree = renderer
    .create(
      <Checkbox
        id={id}
        checked={checked}
        disabled={disabled}
        handleChange={handleChange}
        name={name}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
