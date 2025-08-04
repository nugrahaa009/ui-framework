import { Row as AntRow, RowProps } from 'antd';

export type { RowProps };

export const Row: React.FC<RowProps> = (props) => {
  return <AntRow {...props} />;
};