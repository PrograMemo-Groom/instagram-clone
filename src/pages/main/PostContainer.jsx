import PostProfile from "./PostProfile";
const PostContainer = () => {
    return (
       <div className="flex justify-center">
         <div className="w-[470px] pb-[16px] mb-[20px] border-b-2 border-[#DBDBDB]"
          style={{backgroundColor:"white"}}>
          <PostProfile/>
          <p>포스트 박스</p>
          <p>좋아요랑 댓글박스</p>
         </div>
       </div>
    );
};

export default PostContainer;