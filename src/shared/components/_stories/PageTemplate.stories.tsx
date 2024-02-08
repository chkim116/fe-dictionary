import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import PageTemplate from '../PageTemplate';

interface StoryProps extends ComponentProps<typeof PageTemplate> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'shared/PageTemplate',
  component: PageTemplate,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <PageTemplate {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    children: <h1 className="text-4xl">I am Page Template!</h1>,
  },
};
