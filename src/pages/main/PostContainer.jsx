import PostProfile from "./PostProfile";
import PostImg from "./PostImg";
import PostAction from "./PostAction";
const PostContainer = () => {
    return (
       <div className="flex justify-center">
         <div className="w-[470px] pb-[16px] mb-[20px] border-b-2 border-[#DBDBDB]"
          style={{backgroundColor:"white"}}>
          <PostProfile/>
          <PostImg/>
          <PostAction/>
         </div>
       </div>
    );
};

export default PostContainer;