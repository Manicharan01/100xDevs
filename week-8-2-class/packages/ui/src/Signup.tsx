"use client";

import { Button, TextField, Typography, Card } from "@mui/material";
import { useState } from "react";

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
                        variant="outlined"
                        fullWidth={true}
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Username'
                    />
                    <br /><br />
                    <TextField
                        type='password'
                        fullWidth={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        variant="outlined"
                    />
                    <br /><br />
                    <Button
                        variant="contained"
                        onClick={() => alert('Hello from your app!')}
                    ><Typography variant={"button"}>Signup</Typography></Button>
                </Card>
            </div>
        </div>
    )
};
