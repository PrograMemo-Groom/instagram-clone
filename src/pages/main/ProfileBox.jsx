const ProfileBox = () => {
    return (
        <div className="flex">
            <div className="flex flex-col justify-center items-center w-[64px] h-[84px] px-[6px]"
            style={{backgroundColor:"lightgreen"}}>
                <div className="h-[62px] w-[62px] bg-[#D301C5;] rounded-full  border border-[#E5E5E5]
                flex justify-center items-center box-border mb-[2px]">
                    <img className="h-[56px] w-[56px] rounded-full border border-[#E5E5E5 object-cover" 
                    src="/img/pochaco.jpg"/>
                </div>
                <p className="text-main-story-size px-[2px]">내 스토리</p>
            </div>

            <div className="flex flex-col justify-center items-center w-[64px] h-[84px] px-[6px]">
                <div className="h-[62px] w-[62px] bg-[#D301C5;] rounded-full  border border-[#E5E5E5]
                flex justify-center items-center box-border mb-[2px]">
                    <img className="h-[56px] w-[56px] rounded-full border border-[#E5E5E5 object-cover" 
                    src="/img/pochaco.jpg"/>
                </div>
                <p className="text-main-story-size px-[2px]">ham_ster_</p>
            </div>

            
        </div>
    );
};

export default ProfileBox;