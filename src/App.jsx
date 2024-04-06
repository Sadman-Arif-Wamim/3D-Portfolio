import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-gradient-to-r from-black-200 to-black-400'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <div className='bg-gradient-to-r from-black-200 to-black-600'>
          <About />
        </div>
        <div className='bg-gradient-to-r from-black-200 to-black-600'>
          <Experience />
        </div>
        <div className='bg-gradient-to-r from-black-200 to-black-700'>
          <Tech />
        </div>
        <div className='bg-gradient-to-r from-black-200 to-black-800'>
          <Works />
        </div>
        <div className='relative z-0 bg-gradient-to-r from-black-200 to-black-800'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
