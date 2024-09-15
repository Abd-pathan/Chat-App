import Input from "../../components/input";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex mt-4'>
			<div className='form-control' >
			<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text text-gray-100'>Male</span>
					<input 
					type='checkbox' 
					className='checkbox  bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200'
					checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")}					
					 />
				</label>
			</div>
			<div className='form-control'>
			<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text text-gray-100'>Female</span>
					<input 
					type='checkbox' 
					className='checkbox  bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200' 
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")}	
					/>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;