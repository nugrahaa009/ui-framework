import { Table } from './Table';
const meta = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
};
export default meta;
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
const sampleColumns = [
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
export const Default = {
    args: {
        dataSource: sampleData,
        columns: sampleColumns,
        rowKey: 'id',
        pagination: false,
    },
};
