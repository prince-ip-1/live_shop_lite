const TopHeader = () => {
  return (
    <div className="border-[#E3E3E3] border-b-[1px] ">
      <div className="container mx-auto font-[Outfit-ExtraLight]">
        <div className="flex justify-between items-center ">
          <div className="text-center w-[33.33%] border-[#E3E3E3] py-3">
            <p className="width-100">Need help? Call us 112233344455</p>
          </div>
          <div className="text-center w-[33.33%] border-s-[1px] border-[#E3E3E3] py-3">
            <p className="width-100">Summer sale discount off 60% off! <a className=" underline" href="#"
              onClick={(e) => {
                e.preventDefault();

              }}
            >Shop Now</a></p>
          </div>
          <div className="text-center w-[33.33%] border-s-[1px] border-[#E3E3E3] py-3">
            <p className="width-100">2-3 business days delivery & free returns</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader