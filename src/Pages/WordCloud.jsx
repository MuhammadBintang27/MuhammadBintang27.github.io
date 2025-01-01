const WordCloud = () => {
    return (
      <div className="flex justify-center items-center h-screen  max-w-6xl mx-auto">
        {/* Left Section: My Expertise */}
        <div className="w-1/2 text-white text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4">My Expertise</h1>
          <p className="text-lg text-teal-400">Discover the skills I specialize in</p>
        </div>
  
        {/* Right Section: Word Cloud */}
        <div className="w-1/2">
          <div className="relative w-[400px] h-[400px] mx-auto flex items-center justify-center">
            {/* Web Development Title */}
            <span className="absolute text-[24px] font-bold text-white top-[7%] left-[30%] transform -translate-x-1/2">
              <span className="block">Web</span>
              <span className="block">Development</span>
            </span>
  
            {/* Web Development Small Titles */}
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[0%] left-[5%]">
              React
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[5%] left-[36%]">
              Next Js
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[26%] left-[0%]">
              Node JS
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[22%] right-[35%]">
              Laravel
            </span>
  
            {/* Coding Title */}
            <span className="absolute text-[24px] font-bold text-white top-[38%] left-[20%] transform -translate-x-1/2">
              <span className="block">Coding</span>
            </span>
  
            {/* Coding Small Titles */}
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[32%] left-[3%]">
              JavaScript
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[37%] left-[34%]">
              Python
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[47%] left-[29%]">
              PHP
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[47%] left-[10%]">
              Java
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[45%] left-[2%]">
              C
            </span>
  
            {/* Machine Learning Title */}
            <span className="absolute text-[24px] font-bold text-white top-[39%] left-[63%] transform -translate-x-1/2">
              <span className="block">Machine</span>
              <span className="block">Learning</span>
            </span>
  
            {/* Machine Learning Small Titles */}
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[32%] left-[57%]">
              OpenCV
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[40%] left-[78%]">
              <span className="block">Web</span>
              <span className="block">Scrapping</span>
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[58%] left-[59%]">
              <span className="block">Neural</span>
              <span className="block">Networks</span>
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[58%] left-[42%]">
              NLP
            </span>
  
            {/* Database Title */}
            <span className="absolute text-[24px] font-bold text-white top-[65%] left-[16%] transform -translate-x-1/2">
              <span className="block">Database</span>
              <span className="block">Management</span>
            </span>
  
            {/* Database Small Titles */}
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[58%] left-[2%]">
              NoSQL
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[70%] left-[38%]">
              SQL
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[84%] left-[0%]">
              RDBMS
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[83%] left-[30%]">
              <span className="block">Data</span>
              <span className="block">Modeling</span>
            </span>
  
            {/* Mobile Development Title */}
            <span className="absolute text-[24px] font-bold text-white top-[74%] left-[80%] transform -translate-x-1/2">
              <span className="block">Mobile</span>
              <span className="block">Development</span>
            </span>
  
            {/* Mobile Development Small Titles */}
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[90%] left-[60%]">
              <span className="block">State</span>
              <span className="block">Management</span>
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[80%] left-[45%]">
              Flutter
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[70%] left-[82%]">
              <span className="block">Firebase</span>
              <span className="block">Integration</span>
            </span>
            <span className="absolute text-[18px] font-semibold text-teal-400 top-[83%] left-[30%]">
              <span className="block">Data</span>
              <span className="block">Modeling</span>
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default WordCloud;
  