import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";

function Appbar() {
    const [email, setEmail] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/admin/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            res.json().then((data) => {
                if (data.username) {
                    setEmail(data.username);
                }
                console.log(email);
            });
        });
    }, []);

    if (email) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 4,
            }}>
                <div>
                    <Typography>Coursera</Typography>
                </div>
                <div style={{
                    display: 'flex',
                }}>
                    <div>
                        {email}
                    </div>
                    <div style={{ marginRight: 10 }}>
                        <Button onClick={
                            () => {
                                localStorage.setItem('token', null);
                                window.location.href = '/signup';
                            }

                        } variant={"contained"} >Logout</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 4,
        }}>
            <div>
                <Typography>Coursera</Typography>
            </div>
            <div style={{
                display: 'flex',
            }}>
                <div style={{ marginRight: 10 }}>
                    <Button onClick={
                        () => {
                            window.location.href = '/signup';
                        }

                    } variant={"contained"} >Sign Up</Button>
                </div>
                <div>
                    <Button onClick={
                        () => {
                            window.location.href = '/login';
                        }

                    } variant={"contained"} >Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Appbar;
