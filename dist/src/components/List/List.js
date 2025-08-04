import { jsx as _jsx } from "react/jsx-runtime";
import { List as AntList } from 'antd';
export const List = Object.assign((props) => _jsx(AntList, Object.assign({}, props)), {
    Item: AntList.Item,
});
List.Item.Meta = AntList.Item.Meta;
