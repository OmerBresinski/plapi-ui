import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as C from 'constant';
import Button from 'components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Submit',
  size: 's',
  width: "200px",
  onClick: () => alert('Clicked')
};