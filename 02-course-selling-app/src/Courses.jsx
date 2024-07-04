import { useEffect, useState } from 'react';
import { Card, Typography } from '@mui/material';

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/admin/courses', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            res.json().then((data) => {
                setCourses(data.courses);
            });
        });
    }, []);

    return (
        <div style={{
            display: 'flex',
        }}>
            {courses.map((course) => {
                return (
                    <Card key={course.id} style={{
                        margin: 10,
                        width: 300,
                        minHeight: 200,

                    }}>
                        <Typography
                            variant={"h6"}
                            textAlign={"center"}
                        >
                            {course.title}
                        </Typography>
                        <Typography
                            variant={"subtitle1"}
                            textAlign={"center"}
                        >
                            {course.description}
                        </Typography>
                        <img src={course.imageLink} alt={course.title} style={{ marginTop: 20, width: 300, objectFit: 'fill' }} />
                    </Card>
                );
            })}
        </div>
    );
}

export default Courses;
