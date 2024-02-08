import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import SlugHeader from '../SlugHeader';

interface StoryProps extends ComponentProps<typeof SlugHeader> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'slug/SlugHeader',
  component: SlugHeader,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <SlugHeader {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    related: ['related1', 'related2', 'related3', 'related4', 'related5'],
    title: '제목',
    date: '2024-01-23',
    category: '카테고리',
  },
};

export const EmptyRelated: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    related: [],
  },
};

export const EmptyTitle: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    title: '',
  },
};

export const EmptyDate: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    date: '',
  },
};

export const EmptyCategory: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    category: '',
  },
};

export const LongText: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    title:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis sint adipisci commodi omnis accusamus id iste, in vitae fuga tempore mollitia maiores eveniet deserunt laudantium hic eos quisquam voluptatibus!',
  },
};
