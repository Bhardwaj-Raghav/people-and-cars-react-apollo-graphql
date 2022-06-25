import { Alert } from "antd";

const ErrorMessage = ({ message }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "9999",
      padding: "100px",
    }}
  >
    <Alert
      message="Error (Please Reload)"
      description={message}
      type="error"
      showIcon
    />
  </div>
);

export default ErrorMessage;
