import React, { useEffect, useState } from 'react';
import Preview from "../components/Preview";
import { useParams } from "react-router-dom";
import { getResumeAPI } from "../services/allAPI";
import { FaDownload } from "react-icons/fa6";

import { IoMdRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import Edit from '../components/Edit';


function ViewResume() {
  const { id } = useParams();
  const [resume, setResume] = useState({});

  useEffect(() => {
    getResumeDetails();
  }, []);

  const getResumeDetails = async () => {
    const result = await getResumeAPI(id);
    console.log(result);

    if (result.status === 200) {
      setResume(result.data);
    }
  };

  return (
    <>
     
      <div className="container ">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-7 col-12">
            <div className="d-flex justify-content-center align-items-center mt-5">
              <button className="btn fs-4 text-primary"> <FaDownload/> </button>
                <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                <Link to={'/history'} className="btn fs-4 text-primary">  <IoMdRefreshCircle/></Link>
                 <Link to={'/resume'} className="btn fs-4 text-success">  <FaBackward/></Link>

            </div>
            <Preview resumeDetails={resume} />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    
    </>
  );
}

export default ViewResume;
