import { Card, Form, Input, InputNumber, Select } from "antd";
import {
  CalendarTwoTone,
  DollarCircleTwoTone,
  CarTwoTone,
} from "@ant-design/icons";

import React from "react";
import EditCardFormCardHeader from "../miscellaneous/edit-car-form-card-header";

const { Option } = Select;

const EditCarForm = ({
  make,
  model,
  year,
  price,
  personId,
  saveOnClick,
  cancelOnClick,
}) => {
  const [form] = Form.useForm();

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
        make,
        model,
        year,
        price,
        personId,
      }}
      onFinish={(values) => saveOnClick(values)}
      onReset={cancelOnClick}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Card type="inner" title={<EditCardFormCardHeader />}>
        <Form.Item
          name="make"
          style={{
            width: "100%",
            marginBottom: "10px",
          }}
          rules={[{ required: true, message: "Please enter car make!" }]}
        >
          <Input placeholder="Make" prefix={<CarTwoTone />} />
        </Form.Item>

        <Form.Item
          name="model"
          style={{
            width: "100%",
            marginBottom: "10px",
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
          }}
        >
          <Form.Item
            name="price"
            style={{
              width: "calc(50% - 8px)",
              marginBottom: "10px",
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
              width: "calc(50% - 8px)",
              marginBottom: "10px",
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
          name={"personId"}
          style={{
            textAlign: "left",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="1">Test</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
      </Card>
    </Form>
  );
};

export default EditCarForm;
