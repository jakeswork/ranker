import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

const defaultProps = {
  classes: {}
};

describe("The Card instance", () => {
  describe("When called with default props", () => {
    it("should render without crashing", () => {
      const wrapper = shallow(<Card {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
