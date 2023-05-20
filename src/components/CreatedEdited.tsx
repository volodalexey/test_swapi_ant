import { Descriptions, Typography } from 'antd'
import React, { type ReactElement } from 'react'

const { Text } = Typography
const { Item } = Descriptions

export function CreatedEdited ({ created, edited }: { created: string, edited: string }): ReactElement {
  const createdDate = new Date(created)
  const editedDate = new Date(edited)
  return <Descriptions column={1} size='small'>
    <Item label="Created"><Text type="secondary">{createdDate.toLocaleDateString()} {createdDate.toLocaleTimeString()}</Text></Item>
    <Item label="Edited"><Text type="secondary">{editedDate.toLocaleDateString()} {editedDate.toLocaleTimeString()}</Text></Item>
  </Descriptions>
}
