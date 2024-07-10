import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData , apiUrl} from "./data";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinear from "./components/Spinear";

function App() {

  const [courses , setCourses] = useState(null);
  const [ loading , setLoading] = useState(true);
  const [ category , setCategory ] = useState(filterData[0].title); // filtring Data using title for All

  // fetching api Data

  async function fetchData(){

    // jab tak data fetch ho raha tab tak true this

    setLoading(true);

    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      // output  ->
      setCourses(output.data);

    }
    catch(error){
      toast.error("Api Calling Me Kuch Error hai ");
    }
// after loading do it false
    setLoading(false);
  }

  // calling the data from Api 

  useEffect(() =>{
    fetchData();
  },[])



  return (

    <div className="">

         <div className=" bg-bgDark2 w-full  h-full min-h-screen flex  flex-col  items-center ">

          

      <Navbar/>
       
       <div className=" ">

      <Filter 
      filterData={filterData}

      category={category}
      setCategory={setCategory}
      />

       </div>

      <div>
        {
          loading ? (<Spinear/>) : (<Cards courses={courses} category={category} />)
        }
      </div>

    </div>
    </div>
  );
}

export default App;
