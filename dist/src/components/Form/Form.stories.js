var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Form } from './Form';
import { Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const meta = {
    title: 'Components/Form',
    component: Form,
    tags: ['autodocs'],
};
export default meta;
export const WithItemAndList = {
    render: () => {
        const [form] = Form.useForm();
        const onFinish = (values) => {
            console.log('Form values:', values);
        };
        return (_jsxs(Form, { form: form, layout: "vertical", onFinish: onFinish, children: [_jsx(Form.Item, { name: "email", label: "Email", rules: [{ required: true, type: 'email' }], children: _jsx(Input, { placeholder: "Enter your email" }) }), _jsx(Form.Item, { name: "password", label: "Password", rules: [{ required: true }], children: _jsx(Input.Password, { placeholder: "Enter your password" }) }), _jsx(Form.List, { name: "contacts", children: (fields, { add, remove }) => (_jsxs(_Fragment, { children: [fields.map((_a) => {
                                var { key, name } = _a, restField = __rest(_a, ["key", "name"]);
                                return (_jsxs(Space, { style: { display: 'flex', marginBottom: 8 }, align: "baseline", children: [_jsx(Form.Item, Object.assign({}, restField, { name: [name, 'name'], rules: [{ required: true, message: 'Please input contact name' }], children: _jsx(Input, { placeholder: "Contact name" }) })), _jsx(Form.Item, Object.assign({}, restField, { name: [name, 'phone'], rules: [{ required: true, message: 'Please input contact phone' }], children: _jsx(Input, { placeholder: "Phone number" }) })), _jsx(MinusCircleOutlined, { onClick: () => remove(name) })] }, key));
                            }), _jsx(Form.Item, { children: _jsx(Button, { type: "dashed", onClick: () => add(), icon: _jsx(PlusOutlined, {}), children: "Add Contact" }) })] })) }), _jsx(Form.Item, { children: _jsx(Button, { type: "primary", htmlType: "submit", children: "Submit" }) })] }));
    },
};
