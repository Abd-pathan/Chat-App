import useSignup from "../../hooks/useSignup";
import { motion } from "framer-motion";
import Input from "../../components/input";
import { Loader, LockKeyhole, Mail, User } from "lucide-react"; 
import { useState } from "react";  
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter"; 
import GenderCheckbox from "./GenderCheckbox"; 
import toast from "react-hot-toast"


const SignUp = () => {

		const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {

		e.preventDefault();

		if (inputs.fullName === "" || inputs.username === "" || inputs.password === "" || inputs.confirmPassword === "" || inputs.gender === "") {
			toast.error("All fields are required!");
			return;
		}
         
        if (inputs.password.length < 6) {
			toast.error("Password must be at least 6 characters long!");
			return;
		} 

		if (inputs.password !== inputs.confirmPassword) {
			toast.error("Passwords do not match!");
			return;
		}

		console.log(inputs)

		try {
			await signup(inputs);
			
		} catch (error) {
			console.log(error);
        	
		}
		
		
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
					Create Account
				</h2>

				<form onSubmit={handleSubmit}>
					
				<Input
						icon={User}
						type='text'
						placeholder='Full Name'
						value={inputs.fullName}
						onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
					/>
					<Input
						icon={Mail}
						type='text'
						placeholder='User Name'
						value={inputs.username}
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
					/>
					<Input
						icon={LockKeyhole}
						type='password'
						placeholder='Password'
						value={inputs.password}
						onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
					/>
					
					
					<Input
					        icon={LockKeyhole}
 							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
					/>
					
					<PasswordStrengthMeter password={inputs.password} />


					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<motion.button
						className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-green-600
						hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={loading}
					>
						{loading ? <span className='loading loading-spinner'></span> : "Sign Up"} 
					</motion.button>
				</form>
			</div>
			<div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
				<p className='text-sm text-gray-400'>
					Already have an account?{" "}
					<Link to={"/login"} className='text-green-400 hover:underline'>
						Login
					</Link> 
				</p>
			</div>
		</motion.div>
	);
};
export default SignUp;