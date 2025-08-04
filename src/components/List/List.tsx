import { List as AntList } from 'antd';
import type { ListProps } from 'antd';

export type { ListProps };

export const List = Object.assign(
  <T extends object>(props: ListProps<T>) => <AntList {...props} />,
  {
    Item: AntList.Item,
  }
);

List.Item.Meta = AntList.Item.Meta;
