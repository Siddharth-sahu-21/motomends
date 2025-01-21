const express = require('express');
const Model = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');
require('dotenv').config();

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body)

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/getall', verifyToken, (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});


router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            res.status(500).json(err);
        });
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            res.status(500).json(err);
        });

});


router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });

})

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                //emil and password matched 
                // generate token 

                const { _id, email, password } = result;
                const payload = { _id, email, password }

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1hr' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(200).json(err);

                        }
                        else {
                            res.status(200).json({ token: token });
                        }

                    })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = router;
