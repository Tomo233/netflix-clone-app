import { type ReactNode } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

type BasicModalProps = {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  width?: number;
};

export default function BasicModal({
  open,
  handleClose,
  children,
  width = 400,
}: BasicModalProps) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width,
    bgcolor: "#141414",
    color: "#fff",
    boxShadow: 24,
    maxHeight: "100vh",
    overflowY: "auto",
    outline: "none",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
