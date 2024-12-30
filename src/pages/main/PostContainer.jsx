import PostProfile from "./PostProfile";
import PostImg from "./PostImg";
const PostContainer = () => {
    return (
       <div className="flex justify-center">
         <div className="w-[470px] pb-[16px] mb-[20px] border-b-2 border-[#DBDBDB]"
          style={{backgroundColor:"white"}}>
          <PostProfile/>
          <PostImg/>
          <p>좋아요랑 댓글박스</p>
         </div>
       </div>
    );
};

export default PostContainer;