import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import MainCardList from '../MainCardList';

interface StoryProps extends ComponentProps<typeof MainCardList> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'main/MainCardList',
  component: MainCardList,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <MainCardList {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    glossaries: [
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
    ],
  },
};

export const Empty: StoryObj<StoryProps> = {
  render: Template,

  args: {
    glossaries: [],
  },
};
