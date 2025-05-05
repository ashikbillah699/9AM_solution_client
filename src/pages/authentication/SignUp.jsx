import React, { useContext } from 'react';
import loginBg from '../../assets/loginBg.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createSignUp, userProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, photoURL, email, password);



        try {
            const res = await createSignUp(email, password)
            if (res.user) {
                await userProfile(name, photoURL)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome to TaskFlow.",
                    showConfirmButton: false,
                    timer: 1400
                });
                event.target.reset()
                navigate('/mainLayout')
            }
        }
        catch (err) {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${err.message}`
            });
            event.target.reset()
        }
    }


    return (
        <div className="flex justify-center items-center min-h-screen p-4"
            style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex shadow-2xl rounded-lg w-full max-w-4xl overflow-hidden"
                style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                {/* Left Side - Image */}
                <div className="hidden md:flex md:w-1/2 justify-center items-center" >
                    <img className="object-contain max-h-80" />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>

                    {/* Login Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>

                        {/* name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1"> Full Name </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered w-full"
                                required
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>

                        {/* PhotoURL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1"> Photo URL </label>
                            <input
                                name="photoURL"
                                type="url"
                                placeholder="Paste here"
                                className="input input-bordered w-full"
                                required
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1"> Email </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                required
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1"> Password </label>
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button className="btn bg-blue-600 text-white w-full hover:bg-blue-700">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    {/* New Account */}
                    <p className="text-center text-sm mt-4">
                        New here?{" "}
                        <Link to="/" className="text-blue-500 font-medium hover:underline">
                            if you have an Account.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;