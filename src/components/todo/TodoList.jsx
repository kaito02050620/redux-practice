import React from "react";
import { Box, Button, Stack } from "@mui/material";

const TODO_LIST = [
  { id: 1, task: "学習" },
  { id: 2, task: "芋ほり" },
];

console.log(TODO_LIST);

function TodoList() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
      sx={{
        margin: 2,
      }}
    >
      {TODO_LIST.map((todo) => {
        return (
          <Box
            key={todo.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1,
              m: 1,
              background:
                " linear-gradient(167deg, rgba(255, 167, 247, 1), rgba(255, 137, 179, 1) 19%, rgba(224, 216, 239, 1) 31%, rgba(216, 237, 255, 1) 61%)",
              borderRadius: 1,
              width: 500,
            }}
          >
            <Box>{todo.task}</Box>
            <Button>削除</Button>
          </Box>
        );
      })}
    </Stack>
  );
}
export default TodoList;
