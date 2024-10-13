import React from 'react';
import Carousel from './components/Carousel';

const researchSlides = [
  {
    title: "The Drain Gain: An investigation into how colonial drain counteracted the fall in the rate of profit",
    content: "India's colonial history has received substantial scholarly attention, and the drain of wealth has particularly attracted considerable focus. However, the emphasis has often remained on the drain of wealth as a cause of India's underdevelopment. This study shifts the lens to examine how this drain from India to Britain played a crucial role in Britain's economic development.",
    link: "images/Drain_Gain_WMR_abstract.pdf"
  },
  // ... other research slides
];

const teachingSlides = [
  {
    title: "Radical Political Economy",
    content: "Syllabus for an undergraduate course on radical political economy...",
    link: "images/Syllabus_rad_pol_econ.pdf"
  },
  // ... other teaching slides
];

function App() {
  return (
    <div>
      {/* ... other sections of your page ... */}
      
      <article id="work" className="wrapper style3">
        <div className="container">
          <header>
            <h2>Teaching Portfolio</h2>
          </header>
          <Carousel slides={teachingSlides} />
        </div>
      </article>
      
      <article id="portfolio" className="wrapper style3">
        <div className="container">
          <header>
            <h2>Research Portfolio</h2>
          </header>
          <Carousel slides={researchSlides} />
        </div>
      </article>
      
      {/* ... rest of your page ... */}
    </div>
  );
}

export default App;
