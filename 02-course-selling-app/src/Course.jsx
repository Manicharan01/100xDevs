import { useEffect, useState } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

function Course() {
    const { courseId } = useParams();
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

    let specificCourse = null;
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].id == courseId) {
            specificCourse = courses[i];
        }
    }

    if (!specificCourse) {
        return <div>
            Loading....
        </div>
    }

    return (
        <div>
            <CourseCard specificCourse={specificCourse} />
            <UpdateCard specificCourse={specificCourse} />
        </div>
    );
}

function CourseCard(props) {
    const specificCourse = props.specificCourse;

    return (
        <Card key={specificCourse.id} style={{
            marginTop: 10,
            marginRight: 10,
            marginLeft: 10,
            width: 300,
            minHeight: 200,

        }}>
            <Typography
                variant={"h6"}
                textAlign={"center"}
            >
                {specificCourse.title}
            </Typography>
            <Typography
                variant={"subtitle1"}
                textAlign={"center"}
            >
                {specificCourse.description}
            </Typography>
            <img src={specificCourse.imageLink} alt={specificCourse.title} style={{ marginTop: 20, width: 300, objectFit: 'fill' }} />
        </Card>
    );
}

function UpdateCard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageLink, setImageLink] = useState('');
    const course = props.specificCourse;

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const changeImageLink = (e) => {
        setImageLink(e.target.value)
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
                <TextField
                    fullWidth={true}
                    label="Image Link"
                    variant="outlined"
                    value={imageLink}
                    onChange={changeImageLink}
                />
                <br /><br />
                <ButtonMine title={title} description={description} imageLink={imageLink} course={course} />
            </Card>
        </div>
    )
}

function ButtonMine(props) {
    const courseId = props.course.id;

    return (
        <Button size={"large"} variant="contained" onClick={
            () => {
                fetch(`http://localhost:3000/admin/courses/${courseId}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        title: props.title,
                        description: props.description,
                        imageLink: props.imageLink,
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
        } >Update Course</Button>
    )
}

export default Course;
