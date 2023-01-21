import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase-config";
import { RxAvatar } from "react-icons/rx";
import {
	AiOutlineHome,
	AiOutlineCalendar,
	AiOutlineWechat,
	AiOutlineMessage,
	AiOutlineSetting,
	AiOutlineLogout,
	AiOutlineEuro,
	AiOutlineContainer,
	AiOutlineContacts,
	AiOutlineLaptop,
} from "react-icons/ai";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const Navbar = () => {
	const logoutUser = async () => {
		await signOut(auth);
		alert("User signed Out");
	};

	const [currentUser, setCurrentUser] = useState({});

	onAuthStateChanged(auth, (user) => {
		if (user) {
			setCurrentUser(user);
		}
	});

	return (
		<nav className='h-screen w-1/3 lg:w-1/4  flex-wrap border-r-2 border-solid border-primary overflow-hidden py-4 bg-white mr-9'>
			<div className='flex flex-col space-y-10 h-screen'>
				<div className='text-center'>
					{/* add logo */}
					<h2 className='text-4xl text-primary'>Secourism Dashboard</h2>
				</div>
				<div className='flex flex-col items-center'>
					{/* Avatar */}
					<RxAvatar className='w-20 h-20 text-gray-400' />
					<p className='text-sm text-gray-500'>Welcome back,</p>
					<p className='text-xl text-primary'>{currentUser?.email}</p>
				</div>
				{/* Categories */}
				<div>
					<div className='flex flex-col items-start px-5 space-y-3'>
						<CustomLink href={"/home"}>
							<AiOutlineHome className='my-auto w-6 h-6 mr-4 ' />
							Dashboard
						</CustomLink>

						<CustomLink href={"/calendar"}>
							<AiOutlineCalendar className='my-auto w-6 h-6 mr-4' />
							Calendar
						</CustomLink>
						<CustomLink href={"/contacts"}>
							<AiOutlineContacts className='my-auto w-6 h-6 mr-4 ' />
							Contacts
						</CustomLink>
						<CustomLink href={"/messages"}>
							<AiOutlineMessage className='my-auto w-6 h-6 mr-4 ' />
							Messages
						</CustomLink>
						<CustomLink href={"/chat"}>
							<AiOutlineWechat className='my-auto w-6 h-6 mr-4 ' />
							Chat
						</CustomLink>

						<CustomLink href={"/settings"}>
							<AiOutlineSetting className='my-auto w-6 h-6 mr-4 ' />
							Settings
						</CustomLink>
					</div>
					<div className='border border-solid border-primary w-[60%] mx-auto mt-10' />
					<ul className='flex flex-col items-start px-5 space-y-6 mt-5'>
						<CustomLink href={"/inventory"}>
							<AiOutlineContainer className='my-auto w-6 h-6 mr-4 ' />
							Inventory
						</CustomLink>

						<CustomLink href={"/tresorerie"}>
							<AiOutlineEuro className='my-auto w-6 h-6 mr-4 ' />
							Tresorerie
						</CustomLink>
						<CustomLink href={"/administration"}>
							<AiOutlineLaptop className='my-auto w-6 h-6 mr-4 ' />
							Administration
						</CustomLink>
					</ul>
				</div>
				<div className='flex mt-28 justify-center align-bottom'>
					<button
						onClick={logoutUser}
						className='flex font-bold text-primary hover:bg-primary hover:text-white p-3 rounded-xl '
					>
						<AiOutlineLogout className='my-auto w-6 h-6 mr-2' />
						Sign Out
					</button>
				</div>
			</div>
		</nav>
	);
};

const CustomLink = ({ href, children }) => {
	const resolvedPath = useResolvedPath(href);
	const isActive = useMatch({ path: resolvedPath.pathname });

	return (
		<Link
			to={href}
			className={`flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full ${
				isActive ? "underline underline-offset-4 bg-primary text-white" : ""
			}`}
		>
			{children}
		</Link>
	);
};

export default Navbar;
