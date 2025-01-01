const About = () => {
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dignissimos mollitia? Necessitatibus ea aperiam numquam. Magnam aspernatur, quod consequuntur veniam minus odio, porro delectus accusamus sint sapiente inventore ex laborum!</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;