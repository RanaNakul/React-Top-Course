import React from 'react';
import {FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';
 
const Card = (props) => {
    const course = props.course;
    let LikeCourse = props.LikeCourse;
    let setLikeCourse = props.setLikeCourse;

    function clickHandler(){
        if(LikeCourse.includes(course.id)){
            setLikeCourse( prev => prev.filter ( cid => (cid !== course.id) ));
            toast.warning("like Removed");
        }
        else{ 
            setLikeCourse([...LikeCourse, course.id]);          
            toast.success("liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        LikeCourse.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : <FcLikePlaceholder fontSize="1.75rem"/>
                    }
                </button>
            </div>
            
        </div>
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>{
                course.description.length >100 ? 
                (course.description.substr(0,100)) + "..." :
                (course.description)
            }</p>
        </div>
    </div>
  )
}

export default Card;