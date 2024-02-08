import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import SlugDetailRelated from '../SlugDetailRelated';

interface StoryProps extends ComponentProps<typeof SlugDetailRelated> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'slug/SlugDetailRelated',
  component: SlugDetailRelated,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <SlugDetailRelated {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    related: ['related1', 'related2', 'related3', 'related4', 'related5'],
  },
};

export const Many: StoryObj<StoryProps> = {
  render: Template,

  args: {
    related: Array.from({ length: 20 }, (_, i) => `related${i + 1}`),
  },
};
