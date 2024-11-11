import Image from "next/image";
import Header from "./Componenets/header";
import skillData from "./Data/data";
import Footer from "./Componenets/footer";
import Contact from "./Componenets/want";

export default function Home() {
  return (
   <div>
    <Header />
    <div className="herosection bg-white h-[800px] w-full flex flex-col md:h-[600px] md:flex-row">
  <div className="left-0 w-full text-center md:ml-[10px] md:w-1/2 h-[500px] md:text-left px-4 md:px-8">
    <div className="text-[#10375C] w-full max-w-[600px] mx-auto md:ml-0">
      <p className="text-4xl font-medium mt-[40px] md:mt-[100px] text-[#FF6600]">HELLO, I'M</p>
      <p className="text-5xl tracking-[10px] md:tracking-[20px] font-extrabold mt-[5px] text-[#10375C]">KINZA AFTAB</p>
      <p className="text-lg md:text-2xl font-thin text-[#10375C] mt-[20px]">A web developer skilled in dynamic styling with expertise in HTML, CSS, JavaScript, TypeScript, and frontend development.</p>
    </div>
    <div className="mt-[30px] md:mt-[40px]">
      <a href="/contact">
        <button className="btnani2 shadow h-[45px] w-[150px] md:w-[200px] border-2 border-orange-600 text-lg md:text-xl text-[#FF6600] rounded-[25px] mx-2">Contact Me</button>
      </a>
      <a href="/resume" download>
        <button className="btnani shadow h-[45px] w-[150px] md:w-[200px] border-2 border-[#10375C] text-lg md:text-xl text-[#10375C] rounded-[25px] mx-2">Download CV</button>
      </a>
    </div>
    <div className="icon flex justify-center md:justify-start text-[#FF6600] mt-[20px] space-x-4">
     
      <div className="flex items-center space-x-2">
        <div className="h-[30px] w-[30px] p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-[#10375c]">

          </svg>
        </div>
        <p className="text-sm md:text-base text-[#10375C]">kinzaaftab16@gmail.com</p>
      </div>
    </div>
  </div>

  <div className="right w-full md:w-1/2 h-[500px]">
    <div className="photo bg-cover bg-center mx-auto md:mx-0"></div>
  </div>
</div>

<div className="second-section shadow-md w-full md:w-[1000px] mx-auto bg-slate-100 rounded-xl md:h-[400px] mt-8">
  <h1 className="text-4xl text-[#10375C] text-center font-extrabold pt-6">ABOUT ME</h1>
  <p className="text-lg md:text-2xl text-center px-4 md:px-16 pt-4 pb-8 text-[#10375C] font-thin">I am Kinza Aftab, a dedicated front-end developer passionate about building responsive, user-centered designs. With expertise in HTML, CSS, JavaScript, and Tailwind CSS, I focus on creating interactive web applications. Currently exploring Next.js and dynamic styling, I continuously aim to expand my skills in modern web technologies and create impactful digital experiences.</p>
  <a href="/about">
    <button className="btnani2 shadow h-[45px] w-[200px] mx-auto block md:ml-[400px] border-2 border-orange-600 text-xl text-[#FF6600] rounded-[25px]">View More</button>
  </a>
</div>

<div className="third-section h-[800px] md:h-[600px] bg-slate-100 mt-12 px-4 md:px-16">
  <h1 className="text-4xl text-[#10375C] text-center font-extrabold pt-10">SKILLS & SERVICES</h1>
  <div className="flex flex-wrap justify-center mt-8">
    {skillData.map((IData, index) => (
      <div key={index} className="shadow h-[200px] w-full md:w-[400px] border-2 border-orange-600 rounded-2xl m-4 p-4">
        <p className="text-center text-[#10375C] font-medium text-2xl mt-[30px]">{IData.tittle}</p>
        <p className="text-center mt-[20px] text-lg text-[#10375C]">{IData.description}</p>
      </div>
    ))}
  </div>
</div>

<div className="shadow w-full md:w-[1000px] md:h-[200px] mx-auto bg-slate-100 rounded-xl mt-[50px] mb-[20px]">
  <p className="text-4xl text-[#10375C] text-center font-extrabold pt-[40px]">Want to??</p>
  <p className="text-xl text-[#FF6600] text-center font-medium pt-2">Expand Your Business with a Strong Digital Presence</p>
  <a href="/contact">
    <button className="shadow btnani h-[45px] w-[200px] mx-auto block mt-[20px] border-2 border-[#10375C] text-xl text-[#10375C] rounded-[25px]">Contact Me</button>
  </a>
</div>


      <Footer/>
   </div>
  );
}
