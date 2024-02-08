import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import MainCardTabs from '../MainCardTabs';
import MainCardList from '../MainCardList';

interface StoryProps extends ComponentProps<typeof MainCardTabs> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'main/MainCardTabs',
  component: MainCardTabs,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <MainCardTabs {...props} />;
};

const fixture = [
  {
    slugName: 'glossary1',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary1 slug',
  },
  {
    slugName: 'glossary2',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary2 slug',
  },
  {
    slugName: 'glossary3',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary3 slug',
  },

  {
    slugName: 'glossary4',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary4 slug',
  },

  {
    slugName: 'glossary5',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary5 slug',
  },
  {
    slugName: 'glossary6',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary6 slug',
  },
  {
    slugName: 'glossary7',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary7 slug',
  },
  {
    slugName: 'glossary8',
    spoiler:
      'A/B testing is a way of testing that compares two versions of your design. It helps you to understand which version works best for your users',
    glossary: 'glossary8 slug',
  },
];

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    children: <MainCardList glossaries={fixture} />,
    tabKey: '1',
  },
};

export const Empty: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    children: <MainCardList glossaries={[]} />,
  },
};

export const ControlTabKey: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    tabKey: '4',
  },
};

export const ExceptionTabKey: StoryObj<StoryProps> = {
  render: Template,

  args: {
    ...Default.args,
    tabKey: '1244' as never,
  },
};
