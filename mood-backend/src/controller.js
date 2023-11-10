const moodSerivce = require('./repository');

exports.pingAPI = (req,res) =>{
        res.send({'message':'MOOD API WORKING PROPERLY','randomNumber':56})
}

exports.getMood = (req,res) =>{

    moodSerivce.getMoodService().then((result)=>{
        console.log('getting all moods')

        if(result){
            res.send({'message':'All Moods','data':result})
        }else{
            res.send({'message':'No Moods Found'})
        }
    }).catch((error)=>{
        console.log(error,'ERROR')

        res.status(500).send({'message':'ERROR','error':error})
    })
}

exports.updateMood = (req,res) => {
    console.log('UPDATING MOOD')
    
    const userID = req.body.id
    const mood = req.body.mood
    const remarks = req.body.remarks

    moodSerivce.updateMoodService(userID,mood,remarks).then((result) =>{
        if(result){res.status(200).send({data:"Mood Update Success"})}
        console.log('MOOD UPDATED')
    }).catch((error)=>{
        console.log(error,"ERROR")
        res.status(500).send({message:'ERROR',problem:error})

    })

}

exports.login = (req,res) => {
    console.log('LOGGING IN');

    const password = req.body.password;

    moodSerivce.loginService(password).then((result) => {
        if(result){res.status(200).send(result)}
    }).catch((error) =>{
        console.log(error,"ERROR")
        res.status(500).send({message:'ERROR',problem:error})
    })
}

