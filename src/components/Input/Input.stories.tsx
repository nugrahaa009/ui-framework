import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    status: {
      control: 'select',
      options: ['error', 'warning', undefined],
    },
    allowClear: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const WithClearButton: Story = {
  args: {
    allowClear: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithErrorStatus: Story = {
  args: {
    status: 'error',
  },
};

export const WithWarningStatus: Story = {
  args: {
    status: 'warning',
  },
};
