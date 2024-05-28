import React, { useState } from "react";
import { Layout, Menu, Avatar, Dropdown, Space } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
  HomeOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
  DownOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Button, theme } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to={"/"}>Profile</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to={"/"}>Settings</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link to={"/logout"}>Lougout</Link>
    </Menu.Item>
  </Menu>
);

const App = () => {
  const { user } = useSelector((state) => state.user);
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="relative"
      >
        <div className="demo-logo-vertical" />

        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "20px",
            width: 64,
            height: 64,
            color: "white",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <HomeOutlined
                  style={{
                    fontSize: "20px",
                  }}
                />
              ),
              label: <Link to={"/"}>Home</Link>,
            },
            {
              key: "2",
              icon: (
                <UnorderedListOutlined
                  style={{
                    fontSize: "20px",
                  }}
                />
              ),
              label: <Link to={"/appointment"}>Appointment</Link>,
            },
            {
              key: "3",
              icon: (
                <MedicineBoxOutlined
                  style={{
                    fontSize: "20px",
                  }}
                />
              ),
              label: <Link to={"/doctor"}>Doctor</Link>,
            },
            {
              key: "4",
              icon: (
                <UserSwitchOutlined
                  style={{
                    fontSize: "20px",
                  }}
                />
              ),
              label: <Link to={"/patient"}>Patient</Link>,
            },
            {
              key: "5",
              icon: (
                <LogoutOutlined
                  style={{
                    fontSize: "20px",
                  }}
                />
              ),
              label: <Link to={"/logout"}>Logout</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* Header */}

        <Header
          className="sticky z-50"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "0 20px",
          }}
        >
          <div className="logo">
            <MedicineBoxOutlined
              style={{
                fontSize: "25px",
              }}
            />
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            // defaultSelectedKeys={["1"]}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Menu.Item key="1">
              <Link to={"/appointment"}>Appointment</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"/doctor"}>Doctor</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/patient"}>Patient</Link>
            </Menu.Item>
          </Menu>

          <NotificationOutlined />
          <div className="ms-4">
            <Dropdown overlay={menu} trigger={["click"]}>
              <Link
                to={"/"}
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  <div class="hidden lg:block">{user?.name}</div>

                  <DownOutlined />
                </Space>
              </Link>
            </Dropdown>
          </div>
        </Header>

        {/* COntent */}

        <Content
          className="sticky z-50"
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 442,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Muhammad Attique ©{new Date().getFullYear()} All Right Reserved
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
