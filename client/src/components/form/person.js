import { UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

const PersonForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="person-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="firstname"
        style={{
          width: "300px",
        }}
        rules={[{ required: true, message: "Please enter first name!" }]}
      >
        <Input
          placeholder="First Name"
          prefix={
            <UserOutlined
              style={{
                color: "#1890ff",
              }}
            />
          }
        />
      </Form.Item>

      <Form.Item
        name="lastname"
        rules={[{ required: true, message: "Please enter last name!" }]}
        style={{
          width: "300px",
        }}
      >
        <Input
          placeholder="Last Name"
          prefix={
            <UserOutlined
              style={{
                color: "#1890ff",
              }}
            />
          }
        />
      </Form.Item>

      <Form.Item
        style={{
          width: "300px",
        }}
      >
        <Button type="primary" htmlType="submit">
          Add Person
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PersonForm;
