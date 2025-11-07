import React, { useState,useRef } from 'react'
import { MdEditDocument } from "react-icons/md";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: '80vh',
  overflow:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({resumeDetails, setResumeDetails}) {
    const [open,setOpen] = useState(false)
    const skillRef = useRef()

     const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const addskill = (skill)=>{
    if(resumeDetails.userSkills.includes(skill)){
      alert("The given skill already added, Please add another!!!")
    }else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      //to clear add skill text box
      skillRef.current.value = ""
    }
  }

  const removeSkill = (skill)=>{
    setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
  }
  return (
    <div>
         <button onClick={handleOpen} className="btn fs-4 text-warning"> < MdEditDocument/> </button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personel data */}
              <div>
                            <h3>Personal Details</h3>
                            <div className="row p-3">
                                <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic" label="Full name" variant="standard" />
                                <TextField value={resumeDetails.jobTitle}    onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})}   id="standard-basic" label="Job Title" variant="standard" />
                                <TextField value={resumeDetails.location}   onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic" label="Location" variant="standard" />
                                
            
                            </div>
                        </div>
                     {/* contact details */}
                     <div>
                             <h3>Contact Details</h3>
                           <div className="row p-3">
                                            <TextField value={resumeDetails.email}   onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic" label="Email" variant="standard" />
                                            <TextField value={resumeDetails.mobile}   onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic" label="Phone Number" variant="standard" />
                                            <TextField value={resumeDetails.github}    onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic" label="Github profile Link" variant="standard" />
                                            <TextField value={resumeDetails.linkedin}   onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic" label="Linkedin profile Link" variant="standard" />
                                            <TextField value={resumeDetails.portfolio}   onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic" label="Portfolio Link" variant="standard" />
                                            
                        
                                        </div>
                                    </div>
            {/* education data */}
             <div>
                            <h3>Education details</h3>
                            <div className="row p-3">
                               <TextField value={resumeDetails.course}   onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic" label="Course Name" variant="standard" />
                                <TextField value={resumeDetails.collage}   onChange={e=>setResumeDetails({...resumeDetails,collage:e.target.value})} id="standard-basic" label="Collage Name" variant="standard" />
                                <TextField value={resumeDetails.university}   onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic" label="University" variant="standard" />
                                <TextField value={resumeDetails.passoutYear}    onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic" label="Year of Passout" variant="standard" />
                            
                        </div>
                        </div>
            {/* work experience */}
             <div>
                           <h3>Work Experience</h3>
                            
                             <div className="row p-3">
                               <TextField value={resumeDetails.jobtype}  onChange={e=>setResumeDetails({...resumeDetails,jobtype:e.target.value})}  id="standard-basic" label="Job or Internship" variant="standard" />
                                <TextField value={resumeDetails.company}  onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})}  id="standard-basic" label="Company Name" variant="standard" />
                                <TextField  value={resumeDetails.CLocation}  onChange={e=>setResumeDetails({...resumeDetails,CLocation:e.target.value})} id="standard-basic" label="Company Location" variant="standard" />
                                <TextField value={resumeDetails.duration}   onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic" label="Duration" variant="standard" />
                            
                        </div>
                        </div>
            {/* skills */}
                    <div>
                <h3>Skills</h3>
                <div className="d-flex align-items-center justify-content-between p-3 w-100">
                 <input ref={skillRef} placeholder='Add skill' type="text" className = "form-control"/>
                  <button onClick={()=>addskill(skillRef.current.value)} variant='text'>ADD</button>

                </div>
              
              <h5>Added Skills:</h5>
<div className="d-flex flex-wrap gap-2 p-2 my-3">
  {resumeDetails.userSkills?.length > 0 ? (
    resumeDetails.userSkills.map((skill, index) => (
      <Button key={index} variant="contained">
        {skill}
        <FaXmark onClick={() => removeSkill(skill)} className="ms-2 cursor-pointer" />
      </Button>
    ))
  ) : (
    <p className="fw-bolder">No Skills are added yet!!!</p>
  )}
</div>

            </div>   
            {/* summary */}
            <div>
                            <h3>Summary</h3>
                            <div className="p-3" row>
                           <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} 
              label="Summary"
              variant="outlined"
              fullWidth
              multiline
              rows={7}
              defaultValue={`A MERN Stack Developer is a full-stack web developer skilled in building modern web applications using MongoDB, Express.js, React.js, and Node.js. They handle both the frontend and backend, creating dynamic user interfaces with React, managing data with MongoDB, and developing APIs using Express and Node.js. Proficient in JavaScript across all layers, MERN developers deliver efficient, responsive, and scalable web solutions.`}
            />
            
                            </div>
                        </div>
             {/* button update */}
             <div className="my-3">
                <button className="btn btn-warning text-light">Update</button>

             </div>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit