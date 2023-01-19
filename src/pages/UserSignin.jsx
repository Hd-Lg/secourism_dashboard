import { useState } from "react";
import { auth } from "../utils/firebase-config";
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { Logo } from "../assets";
import { FcGoogle } from "react-icons/fc";

const UserSignin = () => {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const loginUser = async () => {
		setError("");
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			alert("User signed in");
			navigate("/home");
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	const googleSignIn = async () => {
		setError("");
		try {
			const googleAuthProvider = new GoogleAuthProvider();
			const user = await signInWithPopup(auth, googleAuthProvider);
			navigate("/home");
		} catch (error) {
			console.log(error);
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
							Welcome back! Please enter your details
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
							onChange={(e) => setLoginEmail(e.target.value)}
							className='rounded-xl p-2 px-1 mb-5 outline-none shadow-lg border border-gray-200 border-solid '
						/>
						<p className='px-1 mb-2'>Password</p>
						<input
							type={"password"}
							placeholder='Password'
							onChange={(e) => setLoginPassword(e.target.value)}
							className='rounded-xl p-2 px-1 mb-2 outline-none shadow-lg border border-gray-200 border-solid '
						/>
						<p className='text-xs cursor-pointer text-right'>
							Forgot password?
						</p>
						<button
							onClick={loginUser}
							className='w-full bg-primary text-white mt-8 p-3 rounded-full hover:scale-105 active:scale-100 transition-all'
						>
							Login
						</button>
					</div>
					<div className='border w-[60%] mx-auto border-solid border-primary my-10' />
					<div className='mb-8'>
						<button
							onClick={googleSignIn}
							className=' flex w-full p-3 rounded-full hover:scale-105 active:scale-100 justify-center border-2 border-gray-300 border-solid'
						>
							<FcGoogle className='my-auto mr-2 h-7 w-7' />
							Sign in with Google
						</button>
					</div>
					<p className='text-sm text-center'>
						Don't have an account?{" "}
						<Link
							to={"/signup"}
							className='text-primary font-bold underline underline-offset-2'
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserSignin;
