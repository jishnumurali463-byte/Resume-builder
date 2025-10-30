import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";

const steps = [
  'Basic information',
  'Contact Details',
  'Education details',
  'Work Experience',
  'Skills & Certifications',
  'Review & Submit'
];

function Userinput() {

  const skillSuggestionArray = ['NODE JS','MONGOBD','EXPRESS JS','REACT','ANGULAR','LEADERSHIP','COMMUNICATION','COACHING','POWER BI','MS EXCEL']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  //create state for storing resume details
  const [resumeDetails,setResumeDetails] = React.useState({

    username:"",
    jobTitle:"",
    location:"",
   email:"",
   mobile:"",
    github:"",
    linkedin:"",
   portfolio:"",
    course:"",
    collage:"",
    university:"",
   passoutYear:"",
    jobtype:"",
   company:"",
    CLocation:"",
    duration:"",
      userSkills:[],
       summary:"",
    
    
  })
  console.log(resumeDetails);
  

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  const renderSteps = (stepcount)=>{
    switch(stepcount){
        case 0 : return(
            <div>
                <h3>Personal Details</h3>
                <div className="row p-3">
                    <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic" label="Full name" variant="standard" />
                    <TextField value={resumeDetails.jobTitle}    onChange={e=>setResumeDetails({...resumeDetails,jobTitle:e.target.value})}   id="standard-basic" label="Job Title" variant="standard" />
                    <TextField value={resumeDetails.location}   onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic" label="Location" variant="standard" />
                    

                </div>
            </div>
        )
         case 1 : return(
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
        )
         case 2 : return(
            <div>
                <h3>Education details</h3>
                <div className="row p-3">
                   <TextField value={resumeDetails.course}   onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic" label="Course Name" variant="standard" />
                    <TextField value={resumeDetails.collage}   onChange={e=>setResumeDetails({...resumeDetails,collage:e.target.value})} id="standard-basic" label="Collage Name" variant="standard" />
                    <TextField value={resumeDetails.university}   onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic" label="University" variant="standard" />
                    <TextField value={resumeDetails.passoutYear}    onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic" label="Year of Passout" variant="standard" />
                
            </div>
            </div>
        )
         case 3 : return(
            <div>
               <h3>Work Experience</h3>
                
                 <div className="row p-3">
                   <TextField value={resumeDetails.jobtype}  onChange={e=>setResumeDetails({...resumeDetails,jobtype:e.target.value})}  id="standard-basic" label="Job or Internship" variant="standard" />
                    <TextField value={resumeDetails.company}  onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})}  id="standard-basic" label="Company Name" variant="standard" />
                    <TextField  value={resumeDetails.CLocation}  onChange={e=>setResumeDetails({...resumeDetails,CLocation:e.target.value})} id="standard-basic" label="Company Location" variant="standard" />
                    <TextField value={resumeDetails.duration}   onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic" label="Duration" variant="standard" />
                
            </div>
            </div>
        )
         case 4 : return(
            <div>
                <h3>Skills</h3>
                <div className="d-flex align-items-center justify-content-between p-3 w-100">
                 <input placeholder='Add skill' type="text" className = "form-control"/>
                  <button variant='text'>ADD</button>

                </div>
                <h5>Suggestions</h5>
                <div className="d-flex flex-wrap justify-content-between p-3 my-3">
                



{skillSuggestionArray.map((item,index)=>(
  <Button key={index} variant='outlined' className='m-2'>{item}</Button>
))}
  


                </div>
                <h5>Added Skills:</h5>
                <div className="d-flex flex-wrap justify-content-between p-3 my-3">
                  <Button variant="contained">NODE JS <FaXmark className='ms-2 cursor-pointer' /></Button>
                
                </div>
            </div>
        )
         case 5 : return(
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
        )
        default : return null 




    }



  }

  return (
    <Box sx={{ width: '80%', margin: 'auto', mt: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed — you’re finished!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
           {/* render contents according to steps */}
           <Box>
             {renderSteps(activeStep)}
           </Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Userinput;
