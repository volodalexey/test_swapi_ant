import React, { useState, type ReactNode, type ReactElement } from 'react'
import { Button, FloatButton, Layout, Row, Col, Affix } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import { SiderMenu } from '../components/Menu'

const { Header, Sider, Content } = Layout
const { BackTop } = FloatButton

export function MenuAndHeaderLayout ({ headerCenter, contentMain }: { headerCenter: ReactNode, contentMain: ReactNode }): ReactElement {
  const [collapsed, setCollapsed] = useState(false)

  function onClick (): void {
    setCollapsed(!collapsed)
  }

  const siderWidthCollapsed = 0
  const siderWidthExpanded = 150
  const siderWidth = collapsed ? siderWidthCollapsed : siderWidthExpanded

  return (
    <Layout>
      <Sider style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }}
      collapsible
      width={siderWidthExpanded}
      collapsedWidth={siderWidthCollapsed}
      collapsed={collapsed}
      trigger={null} >
        <SiderMenu />
      </Sider>
      <Layout style={{ marginLeft: `${siderWidth}px` }}>
      <Affix offsetTop={0}>
        <Header style={{ height: 'auto', padding: 0 }}>
            <Row align="middle" wrap={false}>
              <Col flex='0 0 40px'>
                <Button
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={onClick}
                />
              </Col>
              <Col flex='1 1 auto'>
                <Row justify='center'>
                  {headerCenter}
                </Row>
              </Col>
            </Row>
        </Header>
          </Affix>
        <Content>
          {contentMain}
          <BackTop type='primary' />
        </Content>
      </Layout>
    </Layout>
  )
}
