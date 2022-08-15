const USER = require('../models/User')

exports.getAllUsers = async function (req, res, next) {
    try {
        let allData = await USER.find()

        if (!allData) {
            throw new Error("Data Not Found")
        }

        res.status(200).json({
            status: "Success",
            message: "All data found",
            data: allData
        })
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: err.message
        })
    }
}

exports.getUser = async function (req, res, next) {
    try {
        console.log(req.params.id);
        let userData = await USER.findById(req.params.id)

        if (!userData) {
            throw new Error("User Not Found")
        }

        res.status(200).json({
            status: "Success",
            message: "User Data Found",
            data: userData
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err.message
        })
    }
}

exports.createUser = async function (req, res, next) {
    try {

        req.body.total = parseInt(req.body.english) + parseInt(req.body.hindi) + parseInt(req.body.gujarati) + parseInt(req.body.maths) + parseInt(req.body.sanskrit);
        req.body.per = req.body.total / 5;
        req.body.grade
        if (req.body.per >= 99) {
            req.body.grade = 'A+';
        }
        else if (req.body.per >= 90) {
            req.body.grade = 'A';
        }
        else if (req.body.per >= 90) {
            req.body.grade = 'B+';
        }
        else if (req.body.per >= 80) {
            req.body.grade = 'B';
        }
        else if (req.body.per >= 70) {
            req.body.grade = 'C+';
        }
        else if (req.body.per >= 60) {
            req.body.grade = 'c';
        }
        else if (req.body.per >= 33) {
            req.body.grade = 'D';
        }
        else {
            req.body.grade = "Fail";
        }


        if (!req.body.name || !req.body.surname || !req.body.age || !req.body.english || !req.body.hindi || !req.body.gujarati || !req.body.maths || !req.body.sanskrit || !req.body.total || !req.body.per || !req.body.grade) {
            throw new Error("Please enter valid fields")
        }

        await USER.create(req.body)

        res.status(201).json({
            status: "Success",
            message: "User Data Create",
            data: userData
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err.message
        })
    }
}

exports.deleteid = async function (req, res, next) {
    try {
        console.log("hello");
        let deleteid = req.params.deleteId
        console.log("deleteid", deleteid);

        if (deleteid) {
            await USER.findByIdAndDelete(deleteid)
        }

       return res.status(202).json({
            status: "Success",
            message: "User Data Create",
            data: deleteid
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err.message
        })
    }
}

exports.update = async function (req, res, next) {
    try {
        let id = req.params.updateId
        await USER.findByIdAndUpdate(id, req.body)

        
        return res.status(200).json({
            message: 'Update Success'
        })
    } catch (err) {
        res.status(404).json({
            status: "Fail",
            message: err.message
        })
    }
}
