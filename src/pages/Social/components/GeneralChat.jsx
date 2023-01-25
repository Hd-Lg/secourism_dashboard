import { useState, useEffect } from "react";
import { auth, db } from "../../../utils/firebase-config";
import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	where,
} from "firebase/firestore";

const GeneralChat = () => {
	const [newMessage, setNewMessage] = useState("");
	const [allMessages, setAllMessages] = useState([]);
	const messagesRef = collection(db, "general_chat");

	const sendMessage = async () => {
		if (newMessage === "") return;

		try {
			await addDoc(messagesRef, {
				text: newMessage,
				createdAt: serverTimestamp(),
				user: auth.currentUser.displayName,
				purpose: "general_chat",
			});
			setNewMessage("");
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		const queryMessages = query(
			messagesRef,
			where("purpose", "==", "general_chat"),
			orderBy("createdAt")
		);
		const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
			let messages = [];
			snapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setAllMessages(messages);
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className='flex flex-col min-w-[500px] min-h-700px] border border-solid border-primary p-6 rounded-lg overflow-x-hidden overflow-y-scroll'>
			<header className='text-center text-2xl pb-1'>General Chat</header>
			<div className='border border-solid border-primary' />
			{/* Display messages */}
			<div className='flex flex-col space-y-2'>
				{allMessages.map((message) => (
					<div
						key={message.id}
						className='flex justify-start'>
						<span>{message.user || "User"}:</span>
						<span>{message.text}</span>
					</div>
				))}
			</div>
			{/* Input user */}
			<div className='flex  mt-5'>
				<input
					type={"text"}
					placeholder='Your message here'
					onChange={(e) => setNewMessage(e.target.value)}
					value={newMessage}
					className='w-[80%] border border-solid p-2 rounded-xl outline-none'
				/>
				<button
					onClick={sendMessage}
					className='mx-auto my-auto bg-primary w-[18%] text-white py-2 rounded-full hover:scale-105 active:scale-100 duration-100 transition-all'>
					Send
				</button>
			</div>
		</div>
	);
};

export default GeneralChat;
