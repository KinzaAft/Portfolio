import Header from "../Componenets/header"
import Footer from "../Componenets/footer"
import Link from "next/link"
import BtnData from "../Data/function"

export default function Contact (){
    return(
        <div>
            <Header />
          <h1 className="text-4xl  text-[#10375C] text-center font-extrabold pt-[10px]">CONTACT ME</h1>

          <section id="contact" className="flex flex-wrap justify-center items-start space-y-6 md:space-x-6 md:space-y-0 px-4 py-8">
    {/* Contact Details */}
    <div className="getin w-full md:w-80 mb-8">
        <h2 className="text-2xl font-extrabold text-[#10375C] mb-4 leading-none">Get in touch</h2>
        <p className="text-[#10375C] leading-6 mb-8 pb-6 border-b border-[#e5e4ed]">
            Looking for help to Expand Your Business with a Strong Digital Presence.
        </p>
        
        <div className="getin-details space-y-6">
            <div>
                <h3 className="text-sm font-semibold text-[#10375C] leading-6 mb-4">Email</h3>
                <div className="flex items-center">
                    <i className="fa-solid fa-house text-[#10375C] text-lg mr-5"></i>
                    <p className="text-sm text-[#10375C] leading-5 mb-4">kinzaaftab16@gmail.com</p>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-[#10375C] leading-6 mb-4">Phone</h3>
                <div className="flex items-center">
                    <i className="fa-solid fa-phone text-[#10375C] text-lg mr-5"></i>
                    <p className="text-sm text-[#10375C] leading-5 mb-4">02334434454554</p>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-[#10375C] leading-6 mb-4">LinkedIn</h3>
                <div className="flex items-center">
                    <i className="fa-solid fa-envelope text-[#10375C] text-lg mr-5"></i>
                    <p className="text-sm text-[#10375C] leading-5 mb-4">Kinza Aftab</p>
                </div>
            </div>
        </div>
    </div>

    {/* Contact Form */}
    <div className="form w-full md:w-3/5 bg-[#f7f6fa] p-10 rounded-lg">
        <h4 className="text-xl font-semibold text-[#10375C] leading-tight mb-2">Let's Connect</h4>
        <p className="text-[#10375C] leading-6 pb-6">
            And Expand your Business with your digital presence
        </p>
        
        <div className="form-row flex flex-wrap justify-between w-full mb-5">
            <input type="text" placeholder="Your Name" className="w-[45%] text-sm font-normal bg-white text-[#7e7c87] rounded-md p-5 mb-5 outline-none" />
            <input type="text" placeholder="Email" className="w-[45%] text-sm font-normal bg-white text-[#7e7c87] rounded-md p-5 mb-5 outline-none" />
        </div>
        
        <div className="form-col w-full mb-5">
            <input type="text" placeholder="Subject" className="w-full text-sm font-normal bg-white text-[#7e7c87] rounded-md p-5 mb-5 outline-none" />
        </div>
        
        <div className="form-col w-full mb-5">
            <textarea placeholder="How can I help you?" className="w-full text-sm font-normal bg-white text-[#7e7c87] rounded-md p-5 mb-5 outline-none"></textarea>
        </div>
        
        <div className="form-col w-full">
            <button className="text-sm font-semibold bg-[#10375C] text-white rounded-md px-6 py-3 cursor-pointer">
                Send Message
            </button>
        </div>
    </div>

</section>


           <Footer />
        </div>
    )
}