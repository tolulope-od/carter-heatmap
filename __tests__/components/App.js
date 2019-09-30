import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/components/App';

describe('App compoenent test', function() {
  let wrapper;
  beforeEach(function() {
    wrapper = shallow(<App />);
  });

  it('Should render without errors', function() {
    const component = wrapper.find('.App');
    expect(component.length).toBe(1);
  });
});
