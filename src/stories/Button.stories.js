import React from 'react';

import { BaselaneButton }  from '../lib/index';

export default {
  title: 'Example/Button',
  component: BaselaneButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <BaselaneButton {...args}>Button</BaselaneButton>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary'
};

export const Large = Template.bind({});
Large.args = {
  type: 'primary',
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  type: 'secondary'
};
