import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { apiUrl,filterData } from "./data";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";
import NotFound from "./assets/not-found.png";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)
  const [networkError, setnetworkError] = useState(false);

  async function fatchData(){
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json(); 

      setCourses(output.data);
    } catch (error) {
        toast.error("Network error");
        setnetworkError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    fatchData(); 
  },[])

  return(
    <div className="min-h-screen flex flex-col bg-bgDark2" >
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>

      {
        networkError ? (
          <div className="mx-auto w-[400px]">
              <img src={NotFound}  />
              <p className="text-center text-white text-lg font-bold">Network error</p>
          </div>
          ) :
            <div className="w-11/12 max-w-[1200px] 
                  mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
                  {
                    Loading ? (<Spinner/>) : (<Cards courses={courses}  category={category}/>)
                  }   
                      
            </div>
      }
      
    </div>
  )

};

export default App;
