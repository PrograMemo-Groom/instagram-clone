import PostProfile from "./PostProfile";
import PostImg from "./PostImg";
import PostAction from "./PostAction";
const PostContainer = () => {
    return (
       <div className="flex flex-col justify-center items-center">
         <div className="w-[470px] pb-[16px] mb-[20px] border-b-2 border-[#DBDBDB]">
          <PostProfile/>
          <PostImg/>
          <PostAction/>
         </div>


        {/* 테스트용임 */}
         <div className="w-[470px] pb-[16px] mb-[20px] border-b-2 border-[#DBDBDB]">
          <PostProfile/>
          <PostImg/>
          <PostAction/>
         </div>
       </div>
    );
};

export default PostContainer;