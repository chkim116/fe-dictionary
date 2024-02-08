import { ComponentProps, useState } from 'react';
import { ArgTypes, Meta, StoryFn, StoryObj } from '@storybook/react';
import Navbar, { ThemeModeType } from '../Navbar';

interface StoryProps extends ComponentProps<typeof Navbar> {}

type MyArgTypes = Partial<Record<keyof StoryProps, ArgTypes[string]>>;
const argTypes: MyArgTypes = {};

export default {
  title: 'shared/Navbar',
  component: Navbar,
  argTypes,
} as Meta;

const Template: StoryFn<StoryProps> = ({ ...props }) => {
  const [theme, setTheme] = useState<ThemeModeType>('dark');

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    props.onThemeChange();
  };

  return <Navbar {...props} theme={theme} onThemeChange={handleChangeTheme} />;
};

export const Default: StoryObj<StoryProps> = {
  render: Template,

  args: {},
};
