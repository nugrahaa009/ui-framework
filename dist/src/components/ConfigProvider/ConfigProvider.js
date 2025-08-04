import { jsx as _jsx } from "react/jsx-runtime";
import { ConfigProvider as AntdConfigProvider } from 'antd';
export const ConfigProvider = (props) => {
    return _jsx(AntdConfigProvider, Object.assign({}, props));
};
