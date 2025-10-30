import { Divider,Button } from '@mui/material'
import React from 'react'


function Preview() {
  return (
    <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h5>Job Title</h5>
      <h6><span className='mx-2'>Location</span>|<span className='mx-2'>E mail</span>|<span className='mx-2'>Mobile</span> </h6>
      <p className='my-3'>
        <a href="" target='_blank'>GITHUB</a> |
        
        <a href="" target='_blank'>LINKEDIN</a> |
        
        <a href="" target='_blank'>PORTFOLIO</a>

      </p>
      <Divider sx={{fontSize:'25px'}}> Summary </Divider>
      <p style={{textAlign:'justify'}}>lhttps://www.youtube.com/watch?v=hFH1NuHt-nQhttps://www.youtube.com/watch?v=hFH1NuHt-nQhttps://www.youtube.com/watch?v=hFH1NuHt-nQhttps://www.youtube.com/watch?v=hFH1NuHt-nQ</p>
      <Divider sx={{fontSize:'25px'}}> Education </Divider>
      <h5>Course name</h5>
       <p><span className='mx-2'></span><span className='mx-2'>Collage</span>|<span className='mx-2'>University</span>|<span className='mx-2'>Passout year</span> </p>
       <Divider sx={{fontSize:'25px' ,marginBottom:'10px'}}> Professional experience </Divider>
      <h5>Job / Internship</h5>
       <p><span className='mx-2'></span><span className='mx-2'>Company name</span>|<span className='mx-2'>Company location</span>|<span className='mx-2'>duration</span> </p>
       <Divider sx={{fontSize:'25px' ,marginBottom:'10px'}}>Skills </Divider>
       <div className="d-flex flex-wrap justify-content-between p-3 my-3">
       <Button variant="contained">NODE JS </Button>
                       
      </div>

    </div>
  )
}

export default Preview