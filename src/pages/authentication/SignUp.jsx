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
        const userName = event.target.userName.value.trim();
        const photoURL = event.target.photoURL.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.password.value;

        const shopNameInputs = event.target.querySelectorAll('input[name="shopName"]');
        const shopName = Array.from(shopNameInputs).map(input => input.value.trim()).filter(name => name);

        const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
        if (!isValidPassword) {
            Swal.fire("The password must be at least 8 characters, 1 number, and 1 special character.");
            return;
        }

        const formData = { userName, photoURL, shopName, email, password };

        try {

            const result = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await result.json();

            if (!result.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Signup Failed",
                    text: data.message,
                });
            }
            else {
                const res = await createSignUp(email, password);
                if (res.user) {
                    await userProfile(userName, photoURL);

                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Welcome to TaskFlow.",
                        showConfirmButton: false,
                        timer: 1400,
                    });
                    event.target.reset();
                    navigate('/mainLayout/createTask')
                }
            }
        }
        catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-4"
            style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex shadow-2xl rounded-lg w-full max-w-6xl overflow-hidden"
                style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                {/* Left Side - Image */}
                <div className="hidden md:flex md:w-1/2 justify-center items-center" >
                    <img className="object-contain max-h-80" />
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>

                        {/* name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1"> Full Name </label>
                            <input
                                name="userName"
                                type="text"
                                placeholder="Full Name"
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

                        {/* PhotoURL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1"> Photo URL </label>
                            <input
                                name="photoURL"
                                type="url"
                                placeholder="Paste here"
                                className="input input-bordered w-full"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>

                        {/* Shop Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1"> Shop Name </label>
                            <input
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                                className="mb-1 input input-bordered w-full" type="text" name="shopName" placeholder="Shop 1" required />
                            <input
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                                className="mb-1 input input-bordered w-full" type="text" name="shopName" placeholder="Shop 2" required />
                            <input
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                                className="mb-1 input input-bordered w-full" type="text" name="shopName" placeholder="Shop 3" required />
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

                        <div>
                            <button className="btn bg-blue-600 text-white w-full hover:bg-blue-700">
                                Sign Up
                            </button>
                        </div>
                    </form>

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