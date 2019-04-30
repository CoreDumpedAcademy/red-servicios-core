const ExampleSchema = require('../models/example')

function basicGet(req, res){ // Get data from the database
    console.log('BASIC GET'.blue)
    ExampleSchema.find({}, (err, info) => {
        if(err) return res.status(500).send(err)
        if(!info) return res.status(404).send('Data not found')

        return res.status(200).send({info})
    })
}

function basicPost(req, res){ // Create a new item and save it to the database 
    console.log('BASIC POST'.blue)
    var info = new ExampleSchema(req.body)
    info.save((err, data) => {
        if(err) return res.status(500).send(err)

        return res.status(200).send('Data saved succesfully')
    })
}

function basicPut(req, res){ // Edit an already existing item on the database
    var data = req.body
    console.log(`BASIC POST ${req.params.id}`.blue)
    ExampleSchema.findOneAndUpdate({_id: req.params.id}, data, (err, oldData)=>{
        if(err) return res.status(500).send(err)
        if(!oldData) return res.status(404).send('Data not found; cannot update')

        return res.status(200).send('Data edited succesfully')
    })
}

function basicDelete(req, res){ // Delete an existing item on the database
    console.log(`BASIC DELETE ${req.params.id}`.blue)
    ExampleSchema.findOneAndDelete({_id: req.params.id}, (err, oldData)=>{
        if(err) return res.status(500).send(err)
        if(!oldData) return res.status(404).send('Data not found; cannot delete')

        return res.status(200).send('Data deleted succesfully')
    })
}

module.exports = {
    basicGet,
    basicPost,
    basicPut,
    basicDelete
}