// import React, { useState } from "react";
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { Button, Layout, Menu, theme } from "antd";
// import { Link } from "react-router-dom";
// const { Header, Sider, Content } = Layout;
// const App = () => {
//   const [collapsed, setCollapsed] = useState(true);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />

//         <Button
//           type="text"
//           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//           onClick={() => setCollapsed(!collapsed)}
//           style={{
//             fontSize: "16px",
//             width: 64,
//             height: 64,
//             color: "white",
//           }}
//         />
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={["1"]}
//           items={[
//             {
//               key: "1",
//               icon: <UserOutlined />,
//               label: <Link to={"/"}>Home</Link>,
//             },
//             {
//               key: "2",
//               icon: <VideoCameraOutlined />,
//               label: <Link to={"/appointment"}>Appointment</Link>,
//             },
//             {
//               key: "3",
//               icon: <UploadOutlined />,
//               label: <Link to={"/doctor"}>Doctor</Link>,
//             },
//             {
//               key: "4",
//               icon: <UploadOutlined />,
//               label: <Link to={"/patient"}>Patient</Link>,
//             },
//             {
//               key: "5",
//               icon: <UploadOutlined />,
//               label: <Link to={"/logout"}>Logout</Link>,
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           {/* <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: "16px",
//               width: 64,
//               height: 64,
//             }}
//           /> */}
//         </Header>
//         <Content
//           className="bg-slate-600"
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 487,

//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;

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
} from "@ant-design/icons";
import { Button, theme } from "antd";
import { Link } from "react-router-dom";
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
  const [collapsed, setCollapsed] = useState(true);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
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
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "0 20px",
          }}
        >
          <div className="logo">
            <h2>MyLogo</h2>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Menu.Item key="1">
              <Link to={"/"}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"/appointment"}>Appointment</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/doctor"}>Doctor</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/patient"}>Patient</Link>
            </Menu.Item>
          </Menu>
          <div>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  <Avatar icon={<UserOutlined />} />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Content
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
