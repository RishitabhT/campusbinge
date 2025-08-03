'use client';
import { useState } from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from '../firebase/config';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = async (e) => {
        try{
            const res = await createUserWithEmailAndPassword(email, password);
            console.log('User:', res.user);
            sessionStorage.setItem('user', true);
            router.push('/');
            setEmail('');
            setPassword('');
        }
        catch(error){
            console.error('Error signing in:', error);
        }
        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign UP</h2>
                <div >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-300 font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                    <button
                        // onClick={handleGoogleSignIn}
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 mt-4"
                    >
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;