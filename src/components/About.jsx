import React from 'react';
import '../App.css';
import { services } from '../constants';
import Footer from './Footer';
const ButtonLink = () => {
  return (
    <a
      href="/Ashish_Mishra_updated_Resume.pdf"
      className='transition ease-in-out duration-300 p-3 rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer'
      
      download="Ashish_Mishra_updated_Resume.pdf"
    >
      View Resume →
    </a>
  
  );
}

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);


const About = () => {
  return (
    <div>

    <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
          <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Ashish Mishra, a 2025 graduate🎓 with a passion for crafting robust backend systems and captivating front end applications.As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/ashish-mishra-5378b2194/' target='_blank'>Software developer</a> I specialize MERN stack🚀. 
          <br/>
          ✍️ Beyond coding, I love to know more about Computer Networking 💻.I work as an IT person at many exam centers including <b>(NTA , Hargobind Institute)</b>, where I delve into  the Computer Networking and learn more about CBT Examinations.
          <br></br>
          On a different note, I'm also into Gaming 🎮. It's not just a hobby; I see it as a way to make a connection between mind and hand 🤝, that expresses a good combination.  </p> 

          <ButtonLink/>
          

        </div>
        <div className='mt-20 flex justify-center flex-wrap gap-7'>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;
