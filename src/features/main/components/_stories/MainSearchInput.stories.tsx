import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import MainSearchInput from '../MainSearchInput';

interface StoryProps extends ComponentProps<typeof MainSearchInput> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'main/MainSearchInput',
  component: MainSearchInput,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <MainSearchInput {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    keyword: '기본 입력값',
  },
};

export const Empty: StoryObj<StoryProps> = {
  render: Template,

  args: {
    keyword: '',
  },
};
