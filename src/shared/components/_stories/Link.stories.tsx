import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import Link from '../Link';

interface StoryProps extends ComponentProps<typeof Link> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'shared/Link',
  component: Link,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return (
    <Link {...props} />
  );
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    href: '/',
    children: '링크',
  }
};

export const ChangeColor: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    color : 'danger',
    
  }
};

export const CustomStyle: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    className: 'font-bold text-lg'
  }
};