import React from 'react'
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


const Crad = (props) => {


  let course = props.course;
  let likedCources = props.likedCources;
  let setLikedCources = props.setLikedCources;

  function clickHandler(){
       if (likedCources.includes(course.id)){
        //  pahle se like hua pada hai 
        setLikedCources((prev) => prev.filter( (cid) => ( cid !== course.id)));
        toast.warning("Like Removed");
       }

       else{
        // pahle se like nahi hai
        // insert karna hai ye course me 

        if (likedCources.length === 0)  {
          setLikedCources([course.id]);
        }

        else{
        // non empty pahle se

        setLikedCources((prev) => [...prev , course.id]);

        };
        toast.success("Liked Sucessfully");
       }
  }


  return (
    <div className=' w-[20rem] hover:opacity-90  cursor-pointer duration-300 transition-all  bg-bgDark rounded-md overflow-hidden '>

      <div className="relative">
        <img className='w-[full]' src={course.image.url} alt=''/>

        <div className="w-[40px] h-[40px] bg-white rounded-full grid place-content-center absolute right-2 bottom-[0.1px]">
          <button onClick={clickHandler}  >

             {
                  
                  likedCources.includes(course.id) ? 

                  (<FcLike fontSize="1.75rem" />)
                  :
                  (<FcLikePlaceholder fontSize="1.75rem" />) 
                  
                  
             }

          </button>
        </div>
        </div>

       
      

      <div className="text-white flex flex-col m-4  ">
        <p className='font-bold mt-5 leading-6 w-[200px]'>{course.title}</p>
        <p className=' mt-5 mb-6 text-sm font-sans'>
          {
            course.description.length > 100 ? 
            (course.description.substr(0 , 150)) + "..." 
            : 
            (course.description)
          }
        </p>

      </div>
      
    </div>
  )
}

export default Crad
