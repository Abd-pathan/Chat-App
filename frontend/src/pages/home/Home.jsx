import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/SideBar";


const Home = () => {
	return (
		<div className="bg-white">
		<div className='flex sm:h-[450px] md:h-[640px]  rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div>
		</div>
	);
};
export default Home;