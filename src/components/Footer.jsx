import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {  AiFillLinkedin } from 'react-icons/ai';
import { PiWhatsappLogoBold } from 'react-icons/pi';
import { FiMail } from 'react-icons/fi';


const Footer = () => {
	const year = new Date().getFullYear();
	const email='am7011414408@ggmail.com';

	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Ashish. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					
					<a rel="nofollow" href={`mailto:{email}`} className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<FiMail className='text-xl' />
					</a>
					
					<a href="https://www.linkedin.com/in/ashish-mishra-5378b2194/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						<AiFillLinkedin className='text-xl' />
					</a>
					<a href="https://github.com/Ashish-mishra7011/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
						<FaGithub className='text-xl' />
					</a>
					<a href="https://wa.me/7011414408" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
						
						<PiWhatsappLogoBold className='text-xl'/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
