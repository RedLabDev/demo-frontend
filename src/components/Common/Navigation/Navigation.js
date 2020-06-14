import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import './Navigation.css'

function Navigation() {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <NavLink exact to="/">Page One</NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink exact to="/page-two">Page Two</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;
