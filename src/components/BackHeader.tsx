import { Button } from 'antd'
import React, { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { RollbackOutlined } from '@ant-design/icons'
import { logBackNavigation } from '../helpers/logger'

export function BackHeader (): ReactElement {
  const navigate = useNavigate()
  function onClick (): void {
    logBackNavigation(-1)
    navigate(-1)
  }
  return <Button
    type="primary"
    icon={<RollbackOutlined />}
    onClick={onClick}
  >
    Back
  </Button>
}
