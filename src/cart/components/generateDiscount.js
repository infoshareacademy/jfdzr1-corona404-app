import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function GenerateCode() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(null);
  const [isCodeInStorage, setIsCodeInStorage] = useState(false);
  const [yourCodeInfo, setYourCodeInfo] = useState(
    "Wygeneruj swój kod rabatowy"
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setYourCodeInfo(
        "Oto Twój kod rabatowy, użyj go aby otrzymać darmową wysyłkę"
      );
      generateCode();
    }, 1500);
  };

  const generateCode = () => {
    let randomCode = Math.random().toString(36).substr(2, 10);
    localStorage["discountCode"] = JSON.stringify(randomCode);
    setCode(randomCode);
  };

  const getData = JSON.parse(localStorage.getItem("discountCode")) || {};

  useEffect(() => {
    if (getData.length > 0) {
      setIsCodeInStorage(true);
      setCode(getData);
      setYourCodeInfo(
        "Oto Twój kod rabatowy, użyj go aby otrzymać darmową wysyłkę"
      );
    }
  }, []);

  return (
    <div>
      {isCodeInStorage ? (
        <Button onClick={handleClickOpen}>Twój kod rabatowy</Button>
      ) : (
        <Button onClick={handleClickOpen}>Wygeneruj kod</Button>
      )}

      <Dialog
        className="rate-modal"
        open={open}
        maxWidth="xs"
        fullWidth="true"
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle variant="h2" id="form-dialog-title">
          {yourCodeInfo}
        </DialogTitle>
        <DialogContent>
          {isLoading ? (
            <CircularProgress color="secondary" />
          ) : code ? (
            <Typography variant="h3">{getData}</Typography>
          ) : (
            <Button onClick={handleGenerate} color="primary">
              Wygeneruj kod
            </Button>
          )}
        </DialogContent>
        <DialogActions>
          {code ? (
            <Button onClick={handleClose} color="primary">
              Wyjdź
            </Button>
          ) : (
            <Button onClick={handleClose} color="primary">
              Anuluj
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GenerateCode;
