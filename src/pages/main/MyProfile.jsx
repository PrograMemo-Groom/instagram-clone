
const MyProfile = () => {
    return (
        <div className="flex flex-row justify-between items-center pr-[8px] py-[8px]">
            <div className="flex flex-row items-center" >
                <div className="h-[52px] w-[52px] bg-gradient-to-b from-[#D600C1] to-[#FFC303] rounded-full border border-[#E5E5E5]
                    flex justify-center items-center box-border">
                    <div className="h-[46px] w-[46px] bg-[white] rounded-full
                    flex justify-center items-center box-border">
                        <img className="h-[44px] w-[44px] rounded-full border border-[#E5E5E5] object-cover"
                            src="/img/pochaco.jpg" />
                    </div>
                </div>
                <span className="text-[14px] font-bold ml-[6px]">my_account</span>
            </div>
            <div className="text-[12px] text-[#009ae5] font-bold">
                <p>전환</p>
            </div>
        </div>
    );
};

export default MyProfile;