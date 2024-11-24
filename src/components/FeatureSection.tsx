import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

const features = [
    {
      icon: <BotMessageSquare />,
      text: "Pregúntale lo que Desees",
      description:
        "Facilitamos un ChatBot para tí, puedes preguntarle acerca de temas generales referentes a los SUDS y también te puede guiar sobre cómo manejar nuestra plataforma",
    },
    {
      icon: <Fingerprint />,
      text: "Compatibilidad en Multiplataforma",
      description:
        "El diseño de nuestra página está previsto para tu comodidad, es por esto que funcionará desde el dispositivo que desees.",
    },
    {
      icon: <ShieldHalf />,
      text: "Valoración Colaborativa",
      description:
        "Trabaja en conjunto con tu equipo, ya que, para nosotros es importante la optimización de tiempo, es por esto que podrás compartir los SUDS escogidos para agilizar el proceso.",
    },
    {
      icon: <BatteryCharging />,
      text: "Vista interactiva",
      description:
        "Nos esforzamos por hacer todo más sencillo para ti, es por eso que todo está diseñado de forma visual, para que sea más sencillo de utilizar.",
    },
  ];

const FeatureSection = () => {
  return (
    <div id="funciones" className="relative mt-20 border-b border-teal-400 min-h-[800px] ">
      <div className="text-center">
        <span className="bg-white text-teal-400 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Funciones
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
          Agua Limpia
          <span className="bg-gradient-to-r from-blue-900 to-teal-400 text-transparent bg-clip-text">
            {"    "} Ciudad Verde
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex mx-6 h-10 w-10 p-2 bg-white text-teal-400 justify-center items-center rounded-full">
              {feature.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">{feature.text}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
