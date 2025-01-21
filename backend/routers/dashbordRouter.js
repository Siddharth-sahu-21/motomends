const express = require('express');
const Model = require('../models/AppointmentModel'); // Ensure the correct path to your model

const router = express.Router();

// Fetch all appointments for the dashboard
router.get('/appointments', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Fetch a single appointment by ID
router.get('/appointments/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update appointment status (approve/reject)
router.patch('/appointments/:id', (req, res) => {
    const { status } = req.body;
    if (!status) {
        return res.status(400).json({ error: "Status is required" });
    }

    Model.findByIdAndUpdate(req.params.id, { status }, { new: true })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete an appointment
router.delete('/appointments/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Fetch appointments by status (e.g., Pending, Approved, Rejected)
router.get('/appointments/status/:status', (req, res) => {
    Model.find({ status: req.params.status })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
