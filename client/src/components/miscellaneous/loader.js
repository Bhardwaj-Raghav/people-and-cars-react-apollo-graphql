import { Spin } from "antd";

const Loader = ({ isLoading }) => {
  return isLoading ? (
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
      }}
    >
      <Spin size="large" />
    </div>
  ) : null;
};

export default Loader;
