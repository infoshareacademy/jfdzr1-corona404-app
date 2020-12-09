import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import CommentPopup from "./CommentPopup";

import Rating from "@material-ui/lab/Rating";

const StyledButton = withStyles({
  root: {
    height: "40px",
    background: "#457b9d",
    borderRadius: 10,
    fontSize: 20,
    lineHeight: 1.2,
    border: 0,
    opacity: 0.9,
    color: "white",
    textDecoration: "none",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

function RateUs() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveComment = () => {
    const newComment = {
      author: "author",
      comment: comment,
      rate: value,
    };

    fetch("https://corona404-2499f.firebaseio.com/comments.json", {
      method: "POST",
      body: JSON.stringify(newComment),
    });
  };

  const handleAccept = () => {
    saveComment();
    handleClose();
    setValue(0);
    setComment(null);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="rating">
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Dodaj opinię
      </StyledButton>
      <Dialog
        className="rate-modal"
        open={open}
        maxWidth="xs"
        fullWidth="true"
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Oceń naszą Aplikację</DialogTitle>
        <DialogContent>
          <Rating
            name="simple-controlled"
            value={value}
            size="large"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Komentarz"
            type="text"
            fullWidth
            inputProps={{
              maxLength: 30,
            }}
            disableUnderline
            value={comment}
            onChange={handleComment}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          {comment ? (
            <Button onClick={handleAccept} color="primary">
              Dodaj Opinię
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>

      <div>
        {showPopup === true && <CommentPopup open={showPopup}></CommentPopup>}
      </div>
    </div>
  );
}

export default RateUs;
