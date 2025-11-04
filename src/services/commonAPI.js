import axios from "axios"


const commonAPI = async (URL,httpmethod,reqBody)=>{
    const requestConfig = {
        url,
        method:httpmethod,
        data:reqBody
    }
    //api call
    return await axios(requestConfig).then(res=>res).catch(err=>err)
}

export default commonAPI