import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import MainCard from '../MainCard';

interface StoryProps extends ComponentProps<typeof MainCard> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'main/MainCard',
  component: MainCard,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <MainCard {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    glossary: 'glossary1',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    slugName: 'glossary1 slug',
  },
};

export const LongText: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    glossary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque debitis dignissimos? Necessitatibus, illum asperiores, modi at rerum tempore harum nesciunt praesentium quia unde facere quod maiores quidem, pariatur enim!',
    slugName:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque debitis dignissimos? Necessitatibus, illum asperiores, modi at rerum tempore harum nesciunt praesentium quia unde facere quod maiores quidem, pariatur enim!',
    spoiler:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque debitis dignissimos? Necessitatibus, illum asperiores, modi at rerum tempore harum nesciunt praesentium quia unde facere quod maiores quidem, pariatur enim!',
  },
};

export const EmptySpoiler: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    spoiler: '',
  },
};
