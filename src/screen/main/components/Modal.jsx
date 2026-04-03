import { Modal } from "antd";
import React from "react";

const PopUpModal = ({ children, title, open, onFinish, openModal }) => {
  return (
    <Modal
      title={<p>{title}</p>}
      onOk={onFinish}
      open={open}
      onCancel={openModal}
      okText={"Add"}
      footer={false}
    >
      {children}
    </Modal>
  );
};

export default PopUpModal;
