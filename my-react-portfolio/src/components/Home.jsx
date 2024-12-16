import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

const Home = () => {
  return (
    <div id="home" className="">
        <img src="src/assets/portfolioimg.jpg" className="object-cover w-full h-screen object-center" alt="" />
        <div className="w-full h-screen absolute top-0 left-0 bg-black/5">
            <div className="max-w-[700px] mx-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-white">I'm Joshua KIbwage</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-white  ">
                    I'm a
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Developer...',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Coder...',
                        2000,
                        'Tech Enthusiast...',
                        2000,
                
                    ]}
                    wrapper="div"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                    repeat={Infinity}
                    />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <FaLinkedin  size={30} className="cursor:pointer text-white"/>
                    <FaGithub  size={30} className="cursor:pointer text-white"/>
                    <FaInstagram size={30} className="cursor:pointer text-white" />
                    <FaFacebook  size={30} className="cursor:pointer text-white"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home