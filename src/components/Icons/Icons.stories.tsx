import { useState } from 'react'
import * as Icons from './Icons'
import copy from 'copy-to-clipboard'
import styled from 'styled-components'
import { Card, Col, Collapse, Input, message, Row, Typography } from 'antd'

export default {
  title: 'Components/Icons',
}

export const Icon = () => {
  const [search, setSearch] = useState('')

  const [messageApi, contextHolder] = message.useMessage()

  const success = (code: string) => {
    messageApi.open({
      type: 'success',
      content: `${code} copied`,
    })
  }

  const iconEntries = (Object.keys(Icons) as Array<keyof typeof Icons>)
  .filter((name) => name.toLowerCase().includes(search.toLowerCase()))
  .map(name => [name, Icons[name]] as const)

  const handleCopy = (iconName: string) => {
    const code = `<${iconName} />`
    copy(code)
    success(code)
  }

  return (
    <>
      {contextHolder}
      <Row gutter={[16, 16]} style={{ padding: '30px 50px' }}>
        <Col span={24}>
          <Typography.Title level={1}>Icon</Typography.Title>
        </Col>
        <Col>
          <Card>
            INI NANTI TUTORIAL
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: 20 }}>
          <Input
            size='large'
            value={search}
            placeholder="Search icons..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col span={24}>
          <Row gutter={[16, 16]}>
            {iconEntries.map(([name, IconComponent]) => {
              return (
                <Col span={3}>
                  <IconWrapper
                    key={name}
                    onClick={() => handleCopy(name)}
                    style={{ cursor: 'pointer', transition: 'all 0.2s ease-in-out', }}
                  >
                    <IconComponent />
                    <IconLabel>{name}</IconLabel>
                  </IconWrapper>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
    </>
  )
}

const IconWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  border-radius: 8px;
  padding: 12px;
  transition: all 0.2s ease-in-out;
  color: #000;

  &:hover {
    background-color: #1677ff;
    color: #fff;
  }

  svg {
    font-size: 24px;
    transition: color 0.2s ease-in-out;
  }
`;

const IconLabel = styled.div`
  font-size: 12px;
  margin-top: 6px;
`;