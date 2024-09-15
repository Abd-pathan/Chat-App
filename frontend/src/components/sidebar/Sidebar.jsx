import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="border-r border-slate-500 p-4 flex flex-col w-full md:min-w-[300px] lg:min-w-[450px] pt-safe">
  <h1 className="font-bold text-center mb-3">CHATS</h1>
  <SearchInput />
  <div className="divider px-3" style={{ backgroundColor: 'black', height: '1px' }}></div>
  <Conversations />
  <LogoutButton />
</div>



	);
};
export default Sidebar;
