'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Correct router import
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ManageAppointments = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const token = localStorage.getItem('token'); // Assuming you are using tokens for authentication
    const router = useRouter();

    const fetchAppointments = () => {
        axios.get('http://localhost:5000/appointment/getall', {
            headers: {
                'x-token': token, // Pass token if required by backend
            },
        })
            .then((result) => {
                console.log(result.data);
                setAppointmentList(result.data);
            })
            .catch((err) => {
                console.error(err);
                if (err.response?.status === 403 || err.response?.status === 401) {
                    toast.error('Please Login to Continue');
                    router.push('/login'); // Redirect to login page
                }
            });
    };

    useEffect(() => {
        fetchAppointments(); // Fetch data when the component mounts
    }, []);

    const deleteAppointment = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/appointment/delete/${id}`, {
                headers: {
                    'x-token': token,
                },
            });
            if (res.status === 200) {
                toast.success('Appointment deleted successfully');
                fetchAppointments(); // Refresh list after deletion
            } else {
                toast.error('Failed to delete appointment');
            }
        } catch (error) {
            toast.error('Error deleting appointment');
            console.error(error);
        }
    };

    return (
        <div className="bg-gray-200 h-screen py-10">
            <div className="container mx-auto">
                <h1 className="text-center text-3xl font-bold">Manage Appointments</h1>

                <table className="my-5 w-full border-collapse">
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Vehicle</th>
                            <th className="p-2">Service</th>
                            <th className="p-2">Phone</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-400">
                        {appointmentList.map((appointment) => (
                            <tr key={appointment._id} className="border-b border-gray-300">
                                <td className="p-2 border">{appointment._id}</td>
                                <td className="p-2 border">{appointment.name}</td>
                                <td className="p-2 border">{appointment.vehicle}</td>
                                <td className="p-2 border">{appointment.services}</td>
                                <td className="p-2 border">{appointment.phone}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => deleteAppointment(appointment._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-full"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAppointments;
