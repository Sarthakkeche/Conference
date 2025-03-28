
import Navbar from "./Navbar";
import Foot from "./Footer";
import college from "../assets/college.png";
import bg from "../assets/clo.png";
function About(){
    return(
        <>
        <Navbar/>
        <div className="relative h-80 w-full mt-20">
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className=" text-gray-300 text-4xl md:text-6xl font-bold animate-fade-in">
         About Us
        </h1>
      </div>
    </div>



    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 pt-8 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h- object-cover object-center rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-500 hover:p-2" src={college}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Dr. D. Y. Patil Prathishthan's</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 text-4xl font-bold transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:scale-110">D.Y. Patil College of Engineering</h1>
        <div class="flex mb-4">
    
          
        </div>
        <p class="leading-relaxed text-justify">
  Dr. D. Y. Patil Prathishthan's, D.Y. Patil College of Engineering, was established in 1984 in Pimpri and later shifted to Akurdi complex in 2001, which is in the vicinity of Pimpri-Chinchwad Industrial area, one of the biggest Industrial belts in Asia. The college spreads over 10 acres of land with seven Engineering disciplines. This Institute is approved by AICTE, New Delhi and is affiliated to the Savitribai Phule Pune University. D Y Patil College of Engineering has been granted Autonomous status from the Academic Year 2024-25.

  The college has excellent & ambient infrastructure with well-equipped laboratories. Well-qualified, motivated, and dedicated faculty members are serving in the Institute. Students are encouraged to actively participate in National and State level co-curricular and extracurricular activities. The institute has well-planned boys and girls hostel in the campus with better amenities and ultra-modern facilities.
</p>


      </div>
    </div>
  </div>
</section>

        <Foot/>
        </>
    )
}
export default About;