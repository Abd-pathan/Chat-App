import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { EllipsisVertical, Phone, Video } from 'lucide-react';

const MessageContainer = () => {

	const { selectedConversation, setSelectedConversation } = useConversation(); 

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
	
	return (
		   
		<div className="flex-1 flex flex-col md:min-w-[300px] lg:min-w-[950px] bg-cover" style={{
			backgroundImage: `url('https://cdn.wallpapersafari.com/0/23/a9Zw4F.jpg')`,
		  }}>
			{!selectedConversation ? (
			  <NoChatSelected />
			) : (
			  <>
				{/* Header */}
				<div className="bg-white px-4 py-2 mb-2 flex items-center">
				  <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
				  <div className="ml-auto flex space-x-3">
					<Phone />
					<Video />
					<EllipsisVertical />
				  </div>
				</div>
		  
				<Messages />
				<MessageInput />
			  </>
			)}
		  </div>
		  
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-900 font-semibold flex flex-col items-center gap-2'>
			    <img src="https://pluspng.com/img-png/whatsapp-png-wazapp-logo-whats-whatsapp-logo-whatsapp-icon-2050.png" className="w-20 h-20" />
				<p>Welcome 👋 {authUser.fullName}  </p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
};
