import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

export default function Chart() {
  const theme = useTheme();
  const [txt, setTxt] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const handleClick = () => {
    setTodos([...todos, txt]);
    setTxt('');
  };

  return (
    <React.Fragment>
      <TextField onChange={(e) => setTxt(e.target.value)} />
      <br />
      <Button type="button" variant="contained" onClick={handleClick}>
        ADD TODO
      </Button>
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </React.Fragment>
  );
}
