import React, { type ReactElement } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { Menu } from 'antd'
import {
  TeamOutlined,
  VideoCameraOutlined,
  DeploymentUnitOutlined,
  DingtalkOutlined,
  GlobalOutlined,
  CarOutlined
} from '@ant-design/icons'
import { ResourceType } from '../resources/Resources'
import { type MenuItemType } from 'antd/es/menu/hooks/useItems'
import { FULL_CLIENT_PATH } from '../routes/client-path'

interface SiderMenuItem extends MenuItemType {
  isSelected: boolean
}

export function SiderMenu (): ReactElement {
  const items: SiderMenuItem[] = [
    {
      label: <Link to={FULL_CLIENT_PATH.filmsListAndSearch}>
        Films
      </Link>,
      key: ResourceType.Films,
      icon: <VideoCameraOutlined />,
      isSelected: Boolean(useMatch(FULL_CLIENT_PATH.filmsListAndSearch))
    },
    {
      label: <Link to={FULL_CLIENT_PATH.peopleListAndSearch}>
        People
      </Link>,
      key: ResourceType.People,
      icon: <TeamOutlined />,
      isSelected: Boolean(useMatch(FULL_CLIENT_PATH.peopleListAndSearch))
    },
    {
      label: <Link to={FULL_CLIENT_PATH.planetsListAndSearch}>
        Planets
      </Link>,
      key: ResourceType.Planets,
      icon: <GlobalOutlined />,
      isSelected: Boolean(useMatch(FULL_CLIENT_PATH.planetsListAndSearch))
    },
    {
      label: <Link to={FULL_CLIENT_PATH.speciesListAndSearch}>
        Species
      </Link>,
      key: ResourceType.Species,
      icon: <DeploymentUnitOutlined />,
      isSelected: Boolean(useMatch(FULL_CLIENT_PATH.speciesListAndSearch))
    },
    {
      label: <Link to={FULL_CLIENT_PATH.starshipsListAndSearch}>
        Starships
      </Link>,
      key: ResourceType.Starships,
      icon: <DingtalkOutlined />,
      isSelected: Boolean(useMatch(FULL_CLIENT_PATH.starshipsListAndSearch))
    },
    {
      label: <Link to={FULL_CLIENT_PATH.vehiclesListAndSearch}>
        Vehicles
      </Link>,
      key: ResourceType.Vehicles,
      icon: <CarOutlined />,
      isSelected: Boolean(useMatch(FULL_CLIENT_PATH.vehiclesListAndSearch))
    }
  ]
  return <Menu theme="dark" mode="inline"
    items={items.map(({ label, key, icon }) => ({ label, key, icon }))}
    selectedKeys={items
      .filter(item => item.isSelected)
      .map(item => item.key as string)} />
}
