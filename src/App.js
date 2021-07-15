import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./state/actions";
import { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "./app.scss";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo, desc));
    setTodo("");
    setDesc("");
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography variant="h3" color="initial" className="title">
          Todo List App
        </Typography>
      </Container>
      <Grid container spacing={5} direction="column">
        <form action="">
          <Grid item md={12}>
            <TextField
              id="todo"
              label="Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item md={12}>
            <TextField
              id="desc"
              label="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item md={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add Todo
            </Button>
          </Grid>
        </form>
      </Grid>
      <section>
        <List component="nav" aria-label="secondary mailbox folders">
          {state.allId == null
            ? "Belum Ada Todo"
            : state.allId.map((v) =>
                state.byId[v].visible ? (
                  <ListItem button onClick={() => removeTodo(v)}>
                    <ListItemText primary={state.byId[v].todo} />
                  </ListItem>
                ) : (
                  ""
                )
              )}
        </List>
      </section>
    </div>
  );
}

export default App;
