import { Table as AntTable, TableProps } from 'antd';

export type { TableProps };

export const Table: React.FC<TableProps> = (props) => {
  return <AntTable {...props} />;
};