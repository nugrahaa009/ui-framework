import { Form } from './Form'
import { Input, Button, Space } from 'antd'
import { Meta, StoryObj } from '@storybook/react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Form>

export const WithItemAndList: Story = {
  render: () => {
    const [form] = Form.useForm()

    const onFinish = (values: any) => {
      console.log('Form values:', values)
    }

    return (
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Form.Item */}
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* Form.List */}
        <Form.List name="contacts">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'name']}
                    rules={[{ required: true, message: 'Please input contact name' }]}
                  >
                    <Input placeholder="Contact name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'phone']}
                    rules={[{ required: true, message: 'Please input contact phone' }]}
                  >
                    <Input placeholder="Phone number" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
                  Add Contact
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  },
}
