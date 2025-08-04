import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Title, Text, Paragraph } from './Typography';
const meta = {
    title: 'Components/Typography',
    tags: ['autodocs'],
};
export default meta;
export const Heading = {
    render: () => (_jsxs(_Fragment, { children: [_jsx(Title, { level: 1, children: "Title 1" }), _jsx(Title, { level: 2, children: "Title 2" }), _jsx(Title, { level: 3, children: "Title 3" }), _jsx(Title, { level: 4, children: "Title 4" }), _jsx(Title, { level: 5, children: "Title 5" })] })),
};
export const NormalText = {
    render: () => (_jsxs(_Fragment, { children: [_jsx(Text, { children: "This is normal text." }), _jsx("br", {}), _jsx(Text, { type: "secondary", children: "Secondary" }), _jsx("br", {}), _jsx(Text, { type: "warning", children: "Warning" }), _jsx("br", {}), _jsx(Text, { type: "danger", children: "Danger" }), _jsx("br", {}), _jsx(Text, { strong: true, children: "Strong" }), _jsx("br", {}), _jsx(Text, { italic: true, children: "Italic" }), _jsx("br", {}), _jsx(Text, { underline: true, children: "Underline" })] })),
};
export const ParagraphText = {
    render: () => (_jsx(Paragraph, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie diam sit amet purus fermentum, a placerat sapien bibendum. In hac habitasse platea dictumst." })),
};
