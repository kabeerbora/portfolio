const researchSlides = [
  {
    title: "The Drain Gain: An investigation into how colonial drain counteracted the fall in the rate of profit",
    content: "India's colonial history has received substantial scholarly attention, and the drain of wealth has particularly attracted considerable focus. However, the emphasis has often remained on the drain of wealth as a cause of India's underdevelopment. This study shifts the lens to examine how this drain from India to Britain played a crucial role in Britain's economic development.",
    link: "images/Drain_Gain_WMR_abstract.pdf"
  },
  {
    title: "Economic Theories",
    content: "This abstract discusses various economic theories and their implications in contemporary society...",
    link: "images/abstract3.pdf"
  },
  {
    title: "The Role of Fiscal Policy",
    content: "This research explores how fiscal policy impacts economic stability and growth...",
    link: "images/abstract4.pdf"
  },
  {
    title: "Global Trade Dynamics",
    content: "An analysis of global trade patterns and their effects on local economies...",
    link: "images/abstract5.pdf"
  }
];

const teachingSlides = [
  {
    title: "Radical Political Economy",
    content: "Syllabus for an undergraduate course on radical political economy...",
    link: "images/Syllabus_rad_pol_econ.pdf"
  },
  {
    title: "Macroeconomics",
    content: "Overview of macroeconomic principles and policies...",
  },
  {
    title: "Econometrics",
    content: "Introduction to statistical methods in economics...",
  },
  {
    title: "Economic History",
    content: "Exploration of economic developments through history...",
  }
];

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{slides[currentSlide].title}</h3>
          <p className="text-gray-600 mb-4">{slides[currentSlide].content}</p>
          {slides[currentSlide].link && (
            <a 
              href={slides[currentSlide].link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View PDF
            </a>
          )}
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 transition-all ${
              index === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<Carousel slides={researchSlides} />, document.getElementById('research-carousel'));
ReactDOM.render(<Carousel slides={teachingSlides} />, document.getElementById('teaching-carousel'));