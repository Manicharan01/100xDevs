import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function AddCourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={changeTitle}
                />
                <br /><br />
                <TextField
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={changeDescription}
                />
                <br /><br />
                <ButtonMine title={title} description={description} />
            </Card>
        </div>
    )
}

function ButtonMine(props) {
    return (
        <Button size={"large"} variant="contained" onClick={
            () => {
                fetch('http://localhost:3000/admin/courses', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: props.title,
                        description: props.description,
                        imagelLink: "",
                        published: true
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                }).then((res) => res.json())
                    .then((data) => {
                        alert(data.message);
                    });
            }
        } >Add Course</Button>
    )
}

export default AddCourse
