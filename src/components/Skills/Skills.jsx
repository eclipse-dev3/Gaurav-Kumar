
import { SkillsInfo } from "../../constants"
import Tilt from 'react-parallax-tilt'

export default function Skills() {
  return (
    <section id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom "
      style={{
        backgroundImage: `linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
                      linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)`
      }}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sn:text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">A collection of my technical skills and expertise honed through various project and experiences</p>
      </div>
      {/* Skills  */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-center">
        {SkillsInfo.map(category => (
          <div key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center ">
              {category.title}
            </h3>
            {/* skill itmes  */}
            <Tilt
              className=""
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-3">
                {category.skills.map(skill => (
                  <div key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 py-4 px-2 sm:py-2 sm:px-2 text-center rounded-3xl  cursor-pointer h-12"
                  >
                    <img src={skill.logo} alt={`${skill.name} logo`}
                      className="w-7 h-7 sm:w-9 sm;w-9"
                    />
                    <span className="text-xs font-semibold sm-text-sm text-gray-200"
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section >
  )
}
