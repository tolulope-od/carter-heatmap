import React from 'react';
import { shallow } from 'enzyme';

import Grid from '../../src/components/Grid';

describe('Grid compoenent test', function() {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<Grid />);
  });

  it('Should render without errors', function() {
    const component = wrapper.find('.grid');
    expect(component.length).toBe(1);
  });
});
