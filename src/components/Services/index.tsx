import { CameraOutline, ImageOutline, VideocamOutline } from "react-ionicons";

const Services = () => {
    const servicesList = [
        { title:"Photoghrapy", icon: <CameraOutline width={"30px"} height={"30px"} color={"#EA580C"} />, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { title:"Video Editing", icon: <VideocamOutline width={"30px"} height={"30px"} color={"#EA580C"} />, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { title:"Photo Editing", icon: <ImageOutline width={"30px"} height={"30px"} color={"#EA580C"} />, description:"Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ]
  return (
    <div className="w-full md:px-[190px] px-[23px] py-20 bg-[#f6f6f6] relative z-[100]">
        <div className="flex w-full flex-col items-center justify-center gap-10 p-16">
            <div className="flex w-full flex-col gap-2 justify-center items-center">
                <span className="font-medium text-[25px]">What can I do for you?</span>
                <p className="text-center text-gray-900"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="flex w-full md:flex-row flex-col gap-10 items-center justify-between">
                {
                    servicesList.map((services, index:number) => {
                        return (
                                <div className="bg-white hover:bg-orange-50 hover:-translate-y-5 transition-all duration-300 rounded-md border shadow-sm border-orange-500 flex flex-col justify-center items-center text-center gap-4 p-8" key={index} >
                                    {services.icon}
                                    <span className="text-orange-600 font-medium text-xl">{services.title}</span>
                                    <p className="max-w-[350px] text-gray-600 leading-7">{services.description}</p>
                                    <a href="#" className="text-orange-700 px-5 py-2 border border-orange-600 rounded-full hover:bg-orange-600 hover:text-white">Learn More</a>                              
                                </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Services;