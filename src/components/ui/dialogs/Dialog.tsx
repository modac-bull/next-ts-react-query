// Dialog 컴포넌트

import { useContext } from "react";

export default const DialogComponent = () => {
  const { open, handleClose } = useContext(DialogContext);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This is the content of the dialog. You can add any components or text here.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};