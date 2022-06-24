import { Button, Form, Input, InputNumber, Select } from "antd";
import {
  CalendarTwoTone,
  DollarCircleTwoTone,
  CarTwoTone,
} from "@ant-design/icons";

import React from "react";

const { Option } = Select;

const AddCarForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // year (int), make (string),
  // model (string),
  // price (float) and
  // personId (string, the personId should be a dropdown select box with the choices being the person names)

  return (
    <Form
      form={form}
      name="car-form"
      initialValues={{
        year: new Date().getFullYear(),
        price: "100.00",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="make"
        style={{
          width: "300px",
          justifyContent: "flex-start",
        }}
        rules={[{ required: true, message: "Please enter car make!" }]}
      >
        <Input placeholder="Make" prefix={<CarTwoTone />} />
      </Form.Item>

      <Form.Item
        name="model"
        style={{
          width: "300px",
        }}
        rules={[{ required: true, message: "Please enter car model!" }]}
      >
        <Input placeholder="Model" prefix={<CarTwoTone />} />
      </Form.Item>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          width: "300px",
        }}
      >
        <Form.Item
          name="price"
          style={{
            width: "142px",
          }}
          rules={[{ required: true, message: "Please enter car price!" }]}
        >
          <InputNumber
            type={"number"}
            style={{ width: "100%" }}
            min="0.01"
            step="0.01"
            prefix={<DollarCircleTwoTone />}
          />
        </Form.Item>

        <Form.Item
          name="year"
          style={{
            width: "142px",
          }}
          rules={[{ required: true, message: "Please enter car year!" }]}
        >
          <InputNumber
            placeholder="Year"
            type={"number"}
            style={{ width: "100%" }}
            min="2000"
            step="1"
            prefix={<CalendarTwoTone />}
          />
        </Form.Item>
      </div>
      <Form.Item
        style={{
          textAlign: "left",
          width: "300px",
        }}
        name="personId"
        rules={[{ required: true, message: "Please enter car Owner!" }]}
      >
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>

      <Form.Item
        style={{
          width: "300px",
        }}
      >
        <Button type="primary" htmlType="submit">
          Add Car
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCarForm;
