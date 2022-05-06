


exports.errorResponse = (res, status, data)=>{  
  let statusCode = status ? status : 500
  
  if(typeof data === "string"){
    res.status(statusCode).json({message: data})  
  } else{
    res.status(statusCode).json(data)  
  }
}


exports.successResponse = (res, status, data)=>{ 
  let statusCode = status ? status : 500
  
  if(typeof data === "string"){
    res.status(statusCode).json({message: data})  
  } else{
    res.status(statusCode).json(data)  
  }
}





