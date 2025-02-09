import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            < div style={{
                paddingTop: '150px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'center',
            }} >
                <Typography variant={"h6"}>
                    Welcome to Coursera. Signup below!
                </Typography>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                    <TextField
                        fullWidth={true}
                        label="E-mail"
                        variant="outlined"
                        value={email}
                        onChange={changeEmail}
                    />
                    <br /><br />
                    <TextField
                        fullWidth={true}
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={changePassword} />
                    <br /><br />
                    <ButtonMine email={email} password={password} />
                </Card>
            </div>
        </div >
    )
}

function ButtonMine(props) {
    console.log(props.email)
    return (
        <Button size={"large"} variant="contained" onClick={
            () => {
                fetch('http://localhost:3000/admin/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: props.email,
                        password: props.password,
                    }),
                }).then((res) => res.json())
                    .then((data) => {
                        localStorage.setItem("token", data.token);
                        alert(data.message)
                        window.location.href = '/courses';
                    });
            }
        } >Sign Up</Button>
    )
}

export default Signup
