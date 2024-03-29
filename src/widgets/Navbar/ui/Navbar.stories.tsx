import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import 'app/styles/index.scss';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    
  },
};

export const Dark: Story = {
  args: {
    
  },
};