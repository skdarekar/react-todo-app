import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { addTask } from '../../features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    formControl: {
        display: "flex",
        marginTop: 20,
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: 20,
    },
}));

export default function AddTodoItem() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [summary, setSummary] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [dueBy, setDueBy] = React.useState("2021-05-24");
    const [priority, setPriority] = React.useState("medium");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {
        console.log("All Data:")
        console.log(summary, description, dueBy, priority);
        dispatch(addTask({ summary, description, dueBy, priority }))
        handleClose()
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                +
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Todo Item</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="summary"
                        label="Summary"
                        type="text"
                        fullWidth
                        onChange={(e) => {
                            setSummary(e.target.value);
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    {/* <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Description" /> */}
                    <FormControl className={classes.formControl}>
                        <React.Fragment>
                            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                            <Select
                                margin="dense"
                                labelId="priority-select-label"
                                id="priority"
                                className={classes.selectEmpty}
                                value={priority}
                                onChange={(e) => {
                                    setPriority(e.target.value);
                                }}
                            >
                                <MenuItem value="low">Low</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="high">High</MenuItem>
                            </Select>
                        </React.Fragment>
                        <TextField
                            margin="dense"
                            id="dueBy"
                            label="Due By"
                            type="date"
                            defaultValue={dueBy}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setDueBy(e.target.value);
                            }}
                        />
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
