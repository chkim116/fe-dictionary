import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import SlugDetailEditLinks from '../SlugDetailEditLinks';

interface StoryProps extends ComponentProps<typeof SlugDetailEditLinks> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'slug/SlugDetailEditLinks',
  component: SlugDetailEditLinks,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <SlugDetailEditLinks {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    editUrl: 'editUrl',
    issueUrl: 'issueUrl',
  },
};
