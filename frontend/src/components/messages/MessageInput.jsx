import { Laugh, Plus } from "lucide-react";
import { BsSend } from "react-icons/bs";
import { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";


const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-4  bg-white' onSubmit={handleSubmit}>
  <div className='w-full flex items-center *:mx-2'>
  <Laugh />
  <Plus />
    <input
      type='text'
      className='border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 text-black my-3'
      placeholder='Send a message'
			value={message}
			onChange={(e) => setMessage(e.target.value)}
    />
       <button
          type='submit'
          className='ml-2 p-2 bg-gray-700 text-white rounded-lg hover:bg-green-600 flex items-center'
       >
 			 {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
        </button>
        </div>
        </form>

	);
};
export default MessageInput;
