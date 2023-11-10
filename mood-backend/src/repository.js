const db = require('../db');

exports.getMoodService = () =>{

    return new Promise((resolve,reject) => {
        const query = `SELECT * FROM mood`

        db.query(query, (error,result) => {
            if(error){
                reject(error)
            }else{
                resolve(result.length > 0 ? result : null)
            }
        })
    })

}

exports.updateMoodService = (id,moodLevel,remarks) =>{
    return new Promise((resolve,reject) => {
    
        const query = `UPDATE mood SET mood = '${moodLevel}', remarks = '${remarks}' WHERE id = '${id}'`;

    
        db.query(query,(error,result) => {
          if(error){reject(error)}
          else{
            resolve(result)
          }
        })
    
      })
}

exports.loginService = (password) =>{

  return new Promise((resolve,reject) => {
      const query = `SELECT id FROM mood WHERE password = '${password}'`

      db.query(query, (error,result) => {
          if(error){
              reject(error)
          }else{

            if(result.length > 0){
                resolve(result)
            }else{
                reject("No User Found")
            }
          }
      })
  })

}
