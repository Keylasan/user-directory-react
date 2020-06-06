const employees = require("../models/users")


module.exports = function(app){

    app.get("/api/users", function (req, res){
        employees.find().then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    })

}