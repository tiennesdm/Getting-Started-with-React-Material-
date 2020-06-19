import ResponsiveDialog from "./../dialogComponent";
import React, { useEffect, Fragment } from "react";
import Button from "@material-ui/core/Button";
export default function DialoadPrompt() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    console.log(open);
  }, [open]);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <ResponsiveDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      ></ResponsiveDialog>
    </Fragment>
  );
}
