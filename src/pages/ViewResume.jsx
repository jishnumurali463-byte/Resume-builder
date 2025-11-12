import React, { useEffect, useState } from 'react';
import Preview from "../components/Preview";
import { useParams } from "react-router-dom";
import { addHistoryAPI, getResumeAPI } from "../services/allAPI";
import { FaDownload } from "react-icons/fa6";

import { IoMdRefreshCircle } from "react-icons/io";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



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
  const handleDownloadResume = async()=>{
    //create pdf document
    const doc = new jsPDF();
    const preview = document.getElementById("preview")
    //screenshot of preview-html2canvas
    const canvas = await html2canvas(preview,{scale:2})
    // console.log(canvas);
    //covert canvas to image
    const resumeImg = canvas.toDataURL('image/png')
    console.log(resumeImg);
    //add screenshot to pdf
    const pageWidth = doc.internal.pageSize.getWidth()
    // const pageHeight = doc.internal.pageSize.getHeight()
    const imgWidth = pageWidth-20
     const imgHeight = canvas.height*imgWidth/canvas.width
      doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)

    doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
    
    //download pdf
    doc.save(`${resume.username}-resume.pdf`)
    //local time data = new Date
    const localTimeData = new Date()
    // console.log(localTimeData );
 const timestamp = `${localTimeData.toLocaleDateString()}, ${localTimeData.toLocaleTimeString()}`;

    // console.log(timestamp);
    try{
      await addHistoryAPI({timestamp,resumeImg})
    }catch(err){
      console.log(err);
      
    }
    


  }

  return (
    <>
     
      <div className="container ">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-7 col-12">
            <div className="d-flex justify-content-center align-items-center mt-5">
              <button  onClick={handleDownloadResume}     className="btn fs-4 text-primary"> <FaDownload/> </button>
                <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                <Link to={'/history'} className="btn fs-4 text-primary">  <IoMdRefreshCircle/></Link>
                 <Link to={'/resume'} className="btn fs-4 text-success">  <FaBackward/></Link>

            </div>
            <div id='preview'><Preview resumeDetails={resume} /></div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    
    </>
  );
}

export default ViewResume;
