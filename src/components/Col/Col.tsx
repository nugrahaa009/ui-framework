import { Col as AntCol, ColProps } from 'antd';

export type { ColProps };

export const Col: React.FC<ColProps> = (props) => {
  return <AntCol {...props} />;
};