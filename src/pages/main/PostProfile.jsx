const PostProfile = () => {
    return (
       <div className="flex flex-row justify-between items-center pb-[12px] pl-[2px]">
        <div className="flex flex-row items-center">
            <div className="h-[42px] w-[42px] bg-[#D301C5;] rounded-full  border border-[#E5E5E5]
                    flex justify-center items-center box-border mb-[2px]">
                <div className="h-[36px] w-[36px] bg-[white] rounded-full
                flex justify-center items-center box-border">
                <img className="h-[32px] w-[32px] rounded-full border border-[#E5E5E5] object-cover"
                    src="/img/pochaco.jpg" />
                </div>
            </div>

            <p className="ml-[6px] text-[14px] font-bold">xfhif_shd_djj</p>
            <p className="ml-[5px] text-[14px] text-[#828282] font-bold"> • </p>
            <p className="ml-[5px] text-[14px] text-[#828282]">1일</p>
        </div>
        <div>
            <p className="font-bold">...</p>
        </div>
       </div>
    );
};

export default PostProfile ;