import React, { useState } from 'react'
import Card from "./Card";

const Cards = (props) => {


    //  converting the Api Data into Single Array 
 
    let courses = props.courses;
    let category = props.category;



   const [likedCources , setLikedCources ] = useState([]);

    function getCourses (){
        if (category === "All"){
          let allCourses = [];

        Object.values(courses).forEach(array =>{
            array.forEach(coursesData =>{
                allCourses.push(coursesData);
            })
        })

        return allCourses;
        }

        else{

          //  sirf category Specific show karo 
          return courses[category];
        }
    };


  return (
    <div className='flex flex-wrap gap-12 w-[1200px] justify-center pb-[2rem] '>
      {
        getCourses().map((course) =>(
            <Card key={course.id} 
            course={course}

            likedCources={likedCources}
            setLikedCources={setLikedCources}
            
            />
        ))
      }

      
    </div>

    
  )
};

export default Cards
