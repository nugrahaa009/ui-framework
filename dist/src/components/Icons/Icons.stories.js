import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import * as Icons from './Icons';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import { Card, Col, Input, message, Row, Typography } from 'antd';
export default {
    title: 'Components/Icons',
};
export const Icon = () => {
    const [search, setSearch] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    const success = (code) => {
        messageApi.open({
            type: 'success',
            content: `${code} copied`,
        });
    };
    const iconEntries = Object.keys(Icons)
        .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
        .map(name => [name, Icons[name]]);
    const handleCopy = (iconName) => {
        const code = `<${iconName} />`;
        copy(code);
        success(code);
    };
    return (_jsxs(_Fragment, { children: [contextHolder, _jsxs(Row, { gutter: [16, 16], style: { padding: '30px 50px' }, children: [_jsx(Col, { span: 24, children: _jsx(Typography.Title, { level: 1, children: "Icon" }) }), _jsx(Col, { children: _jsx(Card, { children: "INI NANTI TUTORIAL" }) }), _jsx(Col, { span: 24, style: { marginBottom: 20 }, children: _jsx(Input, { size: 'large', value: search, placeholder: "Search icons...", onChange: (e) => setSearch(e.target.value) }) }), _jsx(Col, { span: 24, children: _jsx(Row, { gutter: [16, 16], children: iconEntries.map(([name, IconComponent]) => {
                                return (_jsx(Col, { span: 3, children: _jsxs(IconWrapper, { onClick: () => handleCopy(name), style: { cursor: 'pointer', transition: 'all 0.2s ease-in-out', }, children: [_jsx(IconComponent, {}), _jsx(IconLabel, { children: name })] }, name) }));
                            }) }) })] })] }));
};
const IconWrapper = styled.div `
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 12px;
  transition: all 0.2s ease-in-out;
  color: #000;

  &:hover {
    background-color: #1677ff;
    color: #fff;
  }

  svg {
    font-size: 24px;
    transition: color 0.2s ease-in-out;
  }
`;
const IconLabel = styled.div `
  font-size: 12px;
  margin-top: 6px;
`;
