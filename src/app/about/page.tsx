import Header from "../Componenets/header"
import Footer from "../Componenets/footer"
import Link from "next/link"
import BtnData from "../Data/function"
import Contact from "../Componenets/want"

export default function about (){
    return(
        <div>
            <Header />
            <div className="h-auto">
            <h1 className="text-4xl text-[#10375C] text-center font-extrabold pt-[40px] ">ABOUT ME</h1>
            <div className="nav hidden md:flex gap-[60px] p-[10px] h-[50px] w-full sm:w-[700px] items-center justify-evenly ml-[320px] mt-[20px] rounded-xl border-2 border-darkBlue-400">
            <Link href="#personalInfo">
                <h4 className="perbtn text-xl text-[#10375C]">Personal Info</h4>
            </Link>
            <Link href="#Skills">
                <h4 className="skibtn text-xl text-[#10375C]">Skills</h4>
            </Link>
            <Link href="#qualification">
                <h4 className="quabtn text-xl text-[#10375C]">Qualification</h4>
            </Link>
            </div>

                
                <section id="personalInfo" className=" shadow h-[600px]md:h-[350px] w-full md:w-[1000px] ml-0 md:ml-[170px] bg-slate-100 rounded-xl mt-[30px]">
                <h1 className="text-3xl text-[#10375C] text-center font-extrabold pt-[40px] ">PERSONAL INFO</h1>
                <p className="text-xl text-[#10375C]  text-center pl-[60px] pr-[60px] mt-[20px] font-thin">Hi, I’m Kinza Aftab, a front-end developer focused on creating responsive, engaging web experiences. Currently, I’m expanding my expertise through the Governor IT Initiative and have completed the Bano Qabil program. I specialize in HTML, CSS, JavaScript, with a commitment to helping businesses grow digitally. My journey is driven by continuous learning and a passion for bringing creative visions to life online.</p>
                 <div className="flex">
                <div className="left w-[50%]">
                    <div className="flex ml-0 md:ml-[200px] items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff6600" fill="none">
                    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                    <p className="text-[#10375C] font-medium ml-[10px]">Kinza Aftab</p>
                    </div>
                    <div className="flex ml-0 md:ml-[200px] items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff6600" fill="none">
                    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                    <p className="text-[#10375C] font-medium ml-[10px]">kinzaaftab16@gmail.com</p>
                    </div>
                    <div className="flex ml-0 md:ml-[200px] items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff6600" fill="none">
                    <path d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12.9453H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 16.9453H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                    <p className="text-[#10375C] font-medium ml-[10px]">1st Year Student</p>
                    </div>

                </div>
                <div className="right">
                <div className="flex ml-[10px] md:ml-[50px]  items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff6600" fill="none">
    <path d="M18 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 17L9.99999 13.3472C9.99999 13.1555 9.86325 13 9.69458 13H9M13.6297 17L14.9842 13.3492C15.0475 13.1785 14.9128 13 14.7207 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 8H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    <p className="text-[#10375C] font-medium ml-[10px]">D.O.B 16-08-2007</p>
                    </div>
                    <div className="flex ml-[10px] md:ml-[50px] items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff6600" fill="none">
    <path d="M9.06165 4.82633L3.23911 9.92134C2.7398 10.3583 3.07458 11.1343 3.76238 11.1343C4.18259 11.1343 4.52324 11.4489 4.52324 11.8371V15.0806C4.52324 17.871 4.52324 19.2662 5.46176 20.1331C6.40029 21 7.91082 21 10.9319 21H13.0681C16.0892 21 17.5997 21 18.5382 20.1331C19.4768 19.2662 19.4768 17.871 19.4768 15.0806V11.8371C19.4768 11.4489 19.8174 11.1343 20.2376 11.1343C20.9254 11.1343 21.2602 10.3583 20.7609 9.92134L14.9383 4.82633C13.5469 3.60878 12.8512 3 12 3C11.1488 3 10.4531 3.60878 9.06165 4.82633Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 16H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                    <p className="text-[#10375C] font-medium ml-[10px]">Karachi, Pakistan</p>
                    </div>
                    <div className="flex ml-[10px] md:ml-[50px] items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff6600" fill="none">
                    <path d="M19 14H20.2389C21.3498 14 22.1831 15.0805 21.9652 16.2386L21.7003 17.6466C21.4429 19.015 20.3127 20 19 20" stroke="currentColor" stroke-width="1.5" />
                    <path d="M5 14H3.76113C2.65015 14 1.81691 15.0805 2.03479 16.2386L2.29967 17.6466C2.55711 19.015 3.68731 20 5 20" stroke="currentColor" stroke-width="1.5" />
                    <path d="M18.2696 10.5L18.7911 15.1967C19.071 18.379 19.211 19.9701 18.2696 20.985C17.3283 22 15.7125 22 12.481 22H11.519C8.2875 22 6.67174 22 5.73038 20.985C4.78901 19.9701 4.92899 18.379 5.20893 15.1967L5.73038 10.4999" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5" stroke="currentColor" stroke-width="1.5" />
                    <path d="M5.2617 8.86971C5.01152 7.45403 4.88643 6.74619 5.13559 6.20431C5.30195 5.84248 5.57803 5.53512 5.9291 5.32087C6.45489 5 7.21577 5 8.73753 5H15.2625C16.7842 5 17.5451 5 18.0709 5.32087C18.422 5.53512 18.698 5.84248 18.8644 6.20431C19.1136 6.74619 18.9885 7.45403 18.7383 8.86971L18.6872 9.15901C18.5902 9.70796 18.5417 9.98243 18.446 10.2349C18.2806 10.671 18.0104 11.0651 17.6565 11.3863C17.4517 11.5722 17.2062 11.7266 16.7153 12.0353C16.2537 12.3255 16.0229 12.4706 15.779 12.5845C15.3579 12.7812 14.905 12.9105 14.439 12.9672C14.169 13 13.8916 13 13.3369 13H10.6631C10.1084 13 9.831 13 9.56102 12.9672C9.09497 12.9105 8.64214 12.7812 8.22104 12.5845C7.9771 12.4706 7.74632 12.3255 7.28474 12.0353C6.79376 11.7266 6.54827 11.5722 6.34346 11.3863C5.98959 11.0651 5.7194 10.671 5.55404 10.2349C5.45833 9.98243 5.40983 9.70796 5.31282 9.15901L5.2617 8.86971Z" stroke="currentColor" stroke-width="1.5" />
                    <path d="M12 10.0024L12.0087 10.0001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="text-[#10375C] font-medium ml-[10px]">Student At GIAIC</p>
                    </div>
                </div>
                </div>
                 
                 </section>
     <section id="Skills" className="shadow h-[600px]md:h-[350px] w-full md:w-[1000px] ml-0 md:ml-[170px] bg-slate-100 rounded-xl mt-[30px]">
     <h1 className="text-3xl text-[#10375C] text-center font-extrabold pt-[40px] ">SKILLS </h1>
     <div className="ml-[130px] mr-[80px] justify-evenly flex-wrap">
        {BtnData.map((bData)=>(
     <button className=" h-[45px] w-[150px] border-2 border-orange-600  text-xl text-[#10375C] rounded-xl font-bold m-[20px]">{bData.tittle}</button>
    ))}
    
    
     </div>

     </section>
     <section id="qualification" className="shadow h-[600px]md:h-[350px] w-full md:w-[1000px] ml-0 md:ml-[170px] bg-slate-100 rounded-xl mt-[30px]">
     <h1 className="text-3xl text-[#10375C] text-center font-extrabold pt-[40px] ">QUALIFICATION</h1>
      <div className="flex flex-col md:flex-row">
        <div className="left h-[250px] w-full mt-[20px] md:w-[50%]">
            <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ff6600" fill="none">
    <path d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 12.9453H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 16.9453H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
    <p className="text-2xl font-medium text-[#10375C]"> EDUCATION</p>
            </div>
            <div className="text-center">
            <p className="text-[#FF6600] font-extrabold text-xl mt-[20px]">o <span className="text-[#10375C] font-medium ">Matric (Biology)</span></p>
            <p className="text-[#10375C] ml-[20px]">2024</p>

            <p className="text-[#FF6600] font-extrabold text-xl mt-[20px]">o <span className="text-[#10375C] font-medium ">Front-End Development (Bano Qabil)</span></p>
            <p className="text-[#10375C] ml-[20px]">4 Month (2024)</p>  
            </div>
        </div>
        <div className="right  h-[250px] w-full md:w-[50%]  ">
            <div className="flex flex-row md:flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ff6600" fill="none">
    <path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 5.5H12.009" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
<p className="text-2xl font-medium text-[#10375C]"> EXPERIENCE</p>
    
</div>
<div className="text-center">
<p className="text-[#FF6600] font-extrabold text-xl mt-[20px]">o <span className="text-[#10375C] font-medium ">Intern CodeAlpha</span></p>
<p className="text-[#10375C] ml-[20px]">4 Month (2024)</p>

<p className="text-[#FF6600] font-extrabold text-xl mt-[20px]">o <span className="text-[#10375C] font-medium ">Student At Governor Initiative</span></p>
<p className="text-[#10375C] ml-[20px]">2024 to (Present)</p>
</div>


        </div>
        
      </div>
     </section>
            </div>
            <Contact/>
            <Footer />
        </div>
    )
}