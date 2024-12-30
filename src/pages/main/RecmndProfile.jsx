const RecmndProfile = () => {
    return (
       <div className="flex flex-row justify-between items-center px-[8px] py-[8px]">
        <div className="flex flex-row" >
            <img className="rounded-full h-[44px] w-[44px] mr-[10px] object-cover"
                src="https://d2day.mycafe24.com/data/photo/ecri/thumb-20241021162115_3401_4_700x875.jpg" />
            <div className="flex flex-col">
                <span className="text-[14px] font-bold">fdkhdkfas</span>
                <span className="text-[12px] text-[#737373]">wifid님 외 2명이 팔로우합니다</span>
            </div>
        </div>
        <div className="text-[12px] text-[#009ae5] font-bold">
            <p>팔로우</p>
        </div>
       </div>
    );
};

export default RecmndProfile;