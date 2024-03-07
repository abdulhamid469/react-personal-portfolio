import bg from "../../assets/images/bg2.jpg";
const Banner = () => {
  return (
    <div className="w-full h-[600px] flex justify-center bg-cover bg-no-repeat items-center z-[100] relative" style={{backgroundImage: `url(${bg})`}}>
        <div className="w-full h-full z-10 bg-[#120800] opacity-[0.82] absolute top-0 left-0"></div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
            <span className="z-50 text-orange-200 md:text-8xl text-5xl text-center font-semibold"> The New Look For Your Business </span>
            <span className="z-50 text-orange-700 md:text-[28px] text-xl">Start right way!</span>
        </div>
    </div>
  )
}

export default Banner;