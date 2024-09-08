// export const errorHandler = (statusCode,message)=>{
//     const err = new Error();
//     err.statusCode= statusCode;
//     err.message = message;
//     return err;
// }




export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
  };
  