import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//resume add api- called by userInputs, when finish btn clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

//get resume
//update resume api
//add history api
//get history api
//remove history api