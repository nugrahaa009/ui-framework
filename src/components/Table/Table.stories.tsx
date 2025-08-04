import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableProps } from 'antd';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

const sampleData = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    address: 'London No. 1 Lake Park',
  },
];

const sampleColumns: TableProps<any>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const Default: Story = {
  args: {
    dataSource: sampleData,
    columns: sampleColumns,
    rowKey: 'id',
    pagination: false,
  },
};
