import React from 'react'

const Filter = (props) => {

  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler (title){
    setCategory (title);
  }

   
  return (
    <div className='flex   items-center justify-center mt-[1rem] '>
      {filterData.map ((data) => {
        return(
          <button key={data.id} className={`p-[7px] bg-[#22223b] text-white  rounded-lg mr-9 font-bold hover:bg-opacity-50 duration-300 transition-all mb-4
           ${category === data.title ? 
            "bg-opacity-60 border-white border-2 " 
            : 
            "bg-opacity-40 border-transparent"
          }`}
          onClick={() => filterHandler (data.title)}
          >
            {data.title}
            </button>
        )
      }

      )}
    </div>
  )
}

export default Filter




