import { Dialog} from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function ModalDialog({
  open,
  handleClose,
  children,
  maxWidth,
  className = "",
}) {
  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" disablePortal={true} ref={ref} {...props} />;
  // });

  return (
    <Dialog
      open={open}
      maxWidth={maxWidth}
      // TransitionComponent={Transition}
      disableEnforceFocus={true}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className={`min-w-[500px] min-h-[300px] p-4 ${className}`}>
        <div className="text-right ">
          <CloseRoundedIcon
            onClick={() => {
              handleClose();
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center"> {children}</div>
      </div>
    </Dialog>
  );
}
