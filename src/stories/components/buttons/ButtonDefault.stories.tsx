import type { Meta, StoryObj } from '@storybook/react';
import { ButtonDefault } from './ButtonDefault';

const meta = {
  title: 'atoms/buttons/Button',
  component: ButtonDefault,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.args = {
  children: 'Default button',
  onClick: () => {
    console.log('Default...');
  },
};

export const Disabled: Story = {};

Disabled.args = {
  disabled: true,
  children: 'Disabled button',
  onClick: () => {
    console.log('Disabled...');
  },
};
