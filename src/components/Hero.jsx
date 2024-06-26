import { motion } from "framer-motion";

import { styles } from "../styles";
import { useState, useEffect } from "react";


const Hero = () => {
  
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const x = Math.floor((Math.random() * data.length));
        setQuote(data[x].text);
        setAuthor((data[x].author).slice(0,-10));
      });
  }, []);


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Hi there, <span className='text-[#915EFF]'>Sadman</span> here
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            {quote} <br className='sm:block hidden' /> <p className="text-blue-200">{author}</p>
          </p>
          <div className="section-with-image">
            <div className="image-container mt-5 mx-auto">
            </div>
          </div>
        </div>

      </div>

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
