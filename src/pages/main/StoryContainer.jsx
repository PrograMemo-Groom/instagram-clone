import ProfileBox from "./ProfileBox";

const StoryContainer = () => {
    return (
       <div className="flex h-[84px] mt-[8px] mb-[24px] py-[8px] items-center"
       style={{backgroundColor:"lightcoral"}}>
         <ProfileBox />
       </div>
    );
};

export default StoryContainer;