import React from 'react'
import { Box, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md"   // ✅ Fixed
import { IoArrowBackCircleOutline } from "react-icons/io5"

function History() {
  return (
    <div>
      <h1 className='text-center my-5'>Download Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-80px' }}>
        <IoArrowBackCircleOutline className='me-1' /> Back
      </Link>

      <Box component="section" className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
              <h6>Review At: date & time</h6>
              <button className='btn text-danger fs-4'>
                <MdDelete />  {/* ✅ Correct icon */}
              </button>
              <div className='border rounded p-3'>
                <img
                  width={'200px'}
                  height={'200px'}
                  src="https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg"
                  alt="resume"
                />
              </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default History
