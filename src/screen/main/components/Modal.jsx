import { Modal } from "antd";
import React from "react";

const PopUpModal = ({ children, title, open, handleSubmit, openModal }) => {
  return (
    <Modal
      title={<p>{title}</p>}
      // loading={loading}
      open={open}
      onCancel={openModal}
      okText={"Add"}
      onOk={handleSubmit}
    >
      {children}
    </Modal>
  );
};

export default PopUpModal;
