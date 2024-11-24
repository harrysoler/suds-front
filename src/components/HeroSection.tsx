import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div id ="home" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-7xl font-bold text-center tracking-wide">
        <span className="bg-gradient-to-r from-blue-900 to-teal-400 text-transparent bg-clip-text">
          SUDS
        </span>
        <br />

      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Soluciones ecológicas diseñadas para gestionar el agua de lluvia en
        áreas urbanas de manera eficiente y respetuosa con el medio ambiente.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-900 to-teal-400 py-3 px-4 mx-3 text-white rounded-md"
        >
          Ver más
        </a>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 justify-center items-center lg:items-stretch">
        
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-blue-900 shadow-teal-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Tu navegador no soporta este video
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 border border-blue-900 shadow-teal-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Tu navegador no soporta este video
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
