import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-gradient-to-r from-black-1000 to-black-1000'>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <div className='bg-gradient-to-r from-black-800 to-black-800'>
          <About />
        </div>
        <div className='bg-gradient-to-r from-black-800 to-black-800'>
          <Experience />
        </div>
        <div className='bg-gradient-to-r from-black-800 to-black-800'>
          <Tech />
        </div>
        <div className='bg-gradient-to-r from-black-800 to-black-800'>
          <Works />
        </div>
        <div className='relative z-0 bg-gradient-to-r from-black-800 to-black-800'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
