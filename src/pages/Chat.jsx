import React from "react";
import SocialChat from "../components/SocialChat";

const Chat = () => {
	return (
		<div className='mt-10 w-full flex flex-col'>
			<div>
				<h2 className='text-2xl font-bold underline underline-offset-4'>
					Social Life
				</h2>
				<p className='text-lg text-gray-500'>
					Keep up to date with each other. See what's new.
				</p>
			</div>
			<div className='flex max-h-[300px]'>
				<SocialChat />
			</div>
		</div>
	);
};

export default Chat;
