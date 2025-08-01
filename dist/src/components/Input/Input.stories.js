import { Input } from './Input';
const meta = {
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
export const Default = {
    args: {},
};
export const WithClearButton = {
    args: {
        allowClear: true,
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const WithErrorStatus = {
    args: {
        status: 'error',
    },
};
export const WithWarningStatus = {
    args: {
        status: 'warning',
    },
};
