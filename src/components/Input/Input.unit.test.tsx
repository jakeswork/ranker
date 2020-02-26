import React from "react";
import { shallow } from "enzyme";

import Input from "./Input";

const defaultProps = {
  classes: {}
};

describe("The Input instance", () => {
  describe("When called with default props", () => {
    it("should render without throwing an error", () => {
      const wrapper = shallow(<Input {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("when a placeholder is passed", () => {
    it("should render a placeholder", () => {
      const newProps = {
        ...defaultProps,
        placeholder: "test"
      };
      const wrapper = shallow(<Input {...newProps} />);
      const placeholder = wrapper.find({ "data-test-id": "placeholder" });

      expect(placeholder.exists()).toBe(true);
    });
  });
});
