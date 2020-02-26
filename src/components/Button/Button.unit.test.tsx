import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

const defaultProps = {
  classes: {}
};

describe("The Button instance", () => {
  describe("when called with default properties", () => {
    it("should render without throwing errors", () => {
      const wrapper = shallow(<Button {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("when the onClick prop is passed to the button", () => {
    describe("it should be called when the button is clicked", () => {
      const newProps = {
        ...defaultProps,
        onClick: jest.fn(),
        success: true
      };
      const wrapper = shallow(<Button {...newProps} />);
      const button = wrapper.find("button");

      button.simulate("click");

      expect(newProps.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("when style overrides are passed", () => {
    it("should add a style attribute to the element with the overrides", () => {
      const newProps = {
        ...defaultProps,
        danger: true,
        style: {
          fontSize: 0
        }
      };
      const wrapper = shallow(<Button {...newProps} />);
      const button = wrapper.find("button");

      expect(button.props().style).toEqual(newProps.style);
    });
  });

  describe("when the secondary prop is passed", () => {
    it("should render a secondary button", () => {
      const newProps = {
        ...defaultProps,
        secondary: true
      };
      const wrapper = shallow(<Button {...newProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("when the icon prop is passed", () => {
    it("should render the icon inside the button", () => {
      const newProps = {
        ...defaultProps,
        icon: <div data-test-id="icon" />
      };
      const wrapper = shallow(<Button {...newProps} />);
      const icon = wrapper.find({ "data-test-id": "icon" });

      expect(icon.exists()).toBe(true);
    });
  });
});
