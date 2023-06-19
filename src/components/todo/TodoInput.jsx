import React from "react";
import { Button } from "@mui/material";
import { Grid, TextField } from "@mui/material";

function TodoInput() {
  return (
    <Grid container spacing={5} alignItems="center" justifyContent="center">
      <Grid item>
        <TextField
          type="text"
          margin="dense"
          sx={{
            width: 400,
          }}
          placeholder="タスクを入力しましょう"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" size="large" color="secondary">
          追加
        </Button>
      </Grid>
    </Grid>
  );
}

export default TodoInput;
