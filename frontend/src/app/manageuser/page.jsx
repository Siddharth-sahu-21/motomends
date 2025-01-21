'use client';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const manageuser = () => {

    const [userList, setUserList] = useState([]);
    const token = localStorage.getItem('token');

    const router = useRouter();

    const fetchUsers = () => {
        axios.get('http://localhost:5000/user/getall', {
            headers: {
                'x-token': token
            }
        })
            .then((result) => {
                console.log(result.data);
                setUserList(result.data);
            }).catch((err) => {
                console.log(err);
                
                if (err.response.status === 403 || err.response.status === 401) {
                    toast.error('Please Login to Continue');
                    router.push('/login');
                }
            });




    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`);
        if (res.status === 200) {
            toast.success('User deleted successfully');
            fetchUsers();
        } else {
            toast.error('Failed to delete user');
        }
    }

    return (
        <div className='bg-gray-200 h-screen py-10'>
            <div className='container mx-auto'>
                <h1 className='text-center text-3xl font-bold'>User Manager</h1>

                <table className='my-5 w-full'>
                    <thead className='border bg-slate-700 border-slate-700 text-white'>
                        <tr>
                            <th className='p-2'>ID</th>
                            <th className='p-2'>Name</th>
                            <th className='p-2'>Email</th>
                            <th className='p-2'>City</th>
                            <th className='p-2'>Registered at</th>
                            <th className='p-2' colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-400'>
                        {
                            userList.map((user) => {
                                return <tr key={user._id} >
                                    <td className='p-2 border border-gray-300'>{user._id}</td>
                                    <td className='p-2 border border-gray-300'>{user.name}</td>
                                    <td className='p-2 border border-gray-300'>{user.email}</td>
                                    <td className='p-2 border border-gray-300'>{user.city}</td>
                                    <td className='p-2 border border-gray-300'>{user.createdAt}</td>
                                    <td>
                                        <button onClick={() => { deleteUser(user._id) }} className='bg-red-500 text-white px-3 py-1 rounded-full'>
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button className='bg-blue-500 text-white px-3 py-1 rounded-full'>
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default manageuser;