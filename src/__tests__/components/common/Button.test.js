import React from "react";
import renderer from "react-test-renderer";

import Button from "../../../components/common/Button";

it("should render Button component correctly", () => {
  const handleClick = jest.fn(),
    value = "testBtn",
    disabled = false,
    primary = true,
    type = "submit";

  const tree = renderer
    .create(
      <Button
        value={value}
        disabled={disabled}
        primary={primary}
        handleClick={handleClick}
        type={type}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
