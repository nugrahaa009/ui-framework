import { Button } from './Button';
const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['default', 'primary', 'dashed', 'text', 'link'],
        },
        shape: {
            control: 'select',
            options: ['default', 'circle', 'round'],
        },
        size: {
            control: 'select',
            options: ['small', 'middle', 'large'],
        },
        icon: {
            control: false,
        },
    },
    args: {
        children: 'Click me',
        type: 'default',
        shape: 'default',
        size: 'middle',
    },
};
export default meta;
export const Primary = {
    args: {
        type: 'primary',
    },
};
