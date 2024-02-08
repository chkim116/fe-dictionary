import { ComponentProps } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import SearchResultsList from '../SearchResultsList';

interface StoryProps extends ComponentProps<typeof SearchResultsList> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'shared/SearchResultsList',
  component: SearchResultsList,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  return <SearchResultsList {...props} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {
    glossaries: [
      {
        slugName: 'keyword1',
        spoiler: 'spoiler1',
        glossary: 'keyword1',
      },
      {
        slugName: 'keyword2',
        spoiler: 'spoiler2',
        glossary: 'keyword2',
      },
      {
        slugName: 'keyword3',
        spoiler: 'spoiler3',
        glossary: 'keyword3',
      },
    ],
    keyword: 'keyword',
  },
};

export const EmptyResults: StoryObj<StoryProps> = {
  render: Template,

  args: {
    glossaries: [],
    keyword: 'empty',
  },
};
