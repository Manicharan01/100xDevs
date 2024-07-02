import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Appbar() {
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
