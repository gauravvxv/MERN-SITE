const validateForm = (req,res,next) => {
    const {name,email,password} = req.body;
  let error = [];
    if(!name){
        error.push({message: "Name is required"});
    }


    if(!email){
error.push({message: "Please enter the valid email"})
    }

    if(!password || password.length < 6){
        error.push({message: "Password  must be at least 6 characters long"})
    }

    if(error.length > 0  ){
        return res.status(400).json({error})
    }



    next();
}

module.exports = validateForm