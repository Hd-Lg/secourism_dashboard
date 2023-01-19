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

const Navbar = () => {
	const logoutUser = async () => {
		await signOut(auth);
		alert("User signed Out");
	};
	return (
		<nav className='h-screen w-1/3 lg:w-1/4  flex-wrap border-r-2 border-solid border-primary rounded-tr-2xl rounded-br-2xl overflow-hidden py-4'>
			<div className='flex flex-col space-y-10 h-screen'>
				<div className='text-center'>
					{/* add logo */}
					<h2 className='text-4xl text-primary'>Secourism Dashboard</h2>
				</div>
				<div className='flex flex-col items-center'>
					{/* Avatar */}
					<RxAvatar className='w-20 h-20 text-gray-400' />
					<p className='text-sm text-gray-500'>Welcome back,</p>
					<p className='text-3xl text-primary'>Jean Dupont</p>
				</div>
				{/* Categories */}
				<div>
					<ul className='flex flex-col items-start px-5 space-y-3'>
						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineHome className='my-auto w-6 h-6 mr-4 ' />
							Dashboard
						</li>
						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineCalendar className='my-auto w-6 h-6 mr-4' />
							Calendar
						</li>
						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineContacts className='my-auto w-6 h-6 mr-4 ' />
							Contacts
						</li>
						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineMessage className='my-auto w-6 h-6 mr-4 ' />
							My Messages
						</li>
						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineWechat className='my-auto w-6 h-6 mr-4 ' />
							General Conversation
						</li>

						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineSetting className='my-auto w-6 h-6 mr-4 ' />
							Settings
						</li>
					</ul>
					<div className='border border-solid border-primary w-[60%] mx-auto mt-10' />
					<ul className='flex flex-col items-start px-5 space-y-6 mt-5'>
						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineContainer className='my-auto w-6 h-6 mr-4 ' />
							Inventory
						</li>

						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineEuro className='my-auto w-6 h-6 mr-4 ' />
							Facturage
						</li>
						<li className='flex cursor-pointer text-xl hover:bg-primary hover:text-white p-1 rounded-xl pl-2 w-full'>
							<AiOutlineLaptop className='my-auto w-6 h-6 mr-4 ' />
							Administration
						</li>
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

export default Navbar;
