import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category=props.category;
    const [LikeCourse, setLikeCourse] = useState([]);

    if(courses.length === 0)
    {
        return (
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                <h1 className="text-2xl font-bold text-white">No courses found</h1>
            </div>
        )
    }

    function getCourses(){
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach((arrays) => {
                arrays.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course) =>(
                <Card key={course.id} course={course} LikeCourse={LikeCourse} setLikeCourse={setLikeCourse}/>
            ))
        }
    </div>
  )
}

export default Cards;