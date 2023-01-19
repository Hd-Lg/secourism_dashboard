import { useState } from "react";
import { auth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { Logo } from "../assets";

const UserSignup = () => {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const registerUser = async () => {
		setError("");
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			alert("User created");
			navigate("/home");
		} catch (error) {
			console.log(error.message);
			setError(error.message);
		}
	};

	return (
		<div className='w-full flex'>
			<div className='w-[50%] lg:w-[80%] h-screen hidden md:inline'>
				<img src={Logo} alt='' className='h-screen w-full object-cover' />
			</div>
			<div className='md:w-[50%] w-full h-screen'>
				<div className='flex flex-col h-full justify-center max-w-[80%] mx-auto'>
					<div className='flex flex-col text-center mb-10'>
						{/* Logo without background */}
						<h1 className='text-3xl font-bold text-primary'>
							Secourism Dashboard
						</h1>
						<h2 className='text-sm mt-5 text-gray-500'>
							Welcome! Please create an account
						</h2>
					</div>
					<div className='flex flex-col border border-gray-600'>
						{error && (
							<p className='text-red-500 text-center text-lg mb-4'>{error}</p>
						)}
						<p className='px-1 mb-2'>Email</p>
						<input
							type={"text"}
							placeholder='Email'
							onChange={(e) => setRegisterEmail(e.target.value)}
							className='rounded-xl p-2 px-1 mb-5 outline-none shadow-lg border border-gray-200 border-solid '
						/>
						<p className='px-1 mb-2'>Password</p>
						<input
							type={"password"}
							placeholder='Password'
							onChange={(e) => setRegisterPassword(e.target.value)}
							className='rounded-xl p-2 px-1 mb-2 outline-none shadow-lg border border-gray-200 border-solid '
						/>
						<button
							onClick={registerUser}
							className='w-full bg-primary text-white mt-8 p-3 rounded-full hover:scale-105 active:scale-100 transition-all'
						>
							Sign up
						</button>
					</div>
					<div className='border w-[60%] mx-auto border-solid border-primary my-10' />

					<p className='text-sm text-center mt-6'>
						Already have an account?{" "}
						<Link
							to={"/"}
							className='text-primary font-bold underline underline-offset-2'
						>
							Log In
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserSignup;
