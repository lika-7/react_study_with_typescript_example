import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks";
import { useAuth } from "../../contexts";
import { useCallback } from "react";
import { Button, Modal, ModalContent } from "../../theme/daisyui";

const Logout = () => {
  const [open, toggleOpen] = useToggle(true);

  const navigate = useNavigate();
  const { logout } = useAuth();
  const onAccept = useCallback(() => {
    logout(() => {
      toggleOpen();
      navigate("/");
    });
  }, [navigate, toggleOpen, logout]);
  const onCancel = useCallback(() => {
    toggleOpen();
    navigate(-1);
  }, [navigate, toggleOpen]);
  return (
    <Modal open={open}>
      <ModalContent
        closeIconClassName="btn-primary btn-outline"
        onCloseIconClicked={onCancel}
      >
        <p className="text-xl text-center">Are you sure you want to log out?</p>
      </ModalContent>
      <Button className="btn-primary btn-sm" onClick={onAccept}>
        LOGOUT
      </Button>
      <Button className="btn-secondary btn-sm" onClick={onCancel}>
        CANCEL
      </Button>
    </Modal>
  );
};

export default Logout;
