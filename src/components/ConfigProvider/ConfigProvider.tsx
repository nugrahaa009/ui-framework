import { ConfigProvider as AntdConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';

export type { ConfigProviderProps };

export const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  return <AntdConfigProvider {...props} />;
};
