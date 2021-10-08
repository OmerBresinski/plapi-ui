import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Submit',
  size: 's',
  width: '200px',
  onClick: action('Clicked'),
};
