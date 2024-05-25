import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Spinner() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 44,
              }}
              spin
            />
          }
        />
      </div>
    </>
  );
}

export default Spinner;
