import React from "react";
import Helmet from "../../components/Helmet";
import GeneralChat from "./components/GeneralChat";
import Posts from "./components/Posts";

const Social = () => {
	return (
		<Helmet title={"Social"}>
			<div className='mt-10 w-full flex flex-col'>
				<h2 className='text-2xl font-bold underline underline-offset-4'>
					Social Life
				</h2>
				<p className='text-lg text-gray-500'>
					Keep up to date with each other. See what's new.
				</p>
				<div className='flex max-h-[300px] '>
					<GeneralChat />
				</div>
				<div>
					<Posts />
				</div>
			</div>
		</Helmet>
	);
};

export default Social;
