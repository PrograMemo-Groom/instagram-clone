const PostAction = () => {
    return (
       <div className="flex flex-col">
        <section className="flex my-[4px] items-center justify-between">
            <div>
                <button className="h-[40px] py-[8px] pr-[8px]">
                    <img className="h-[24px]" src="/img/icons/free-icon-heart-1077035.png"/>
                </button>
                <button className="h-[40px] p-[8px]">
                    <img className="h-[24px]" src="/img/icons/free-icon-heart-1077035.png"/>
                </button>
                <button className="h-[40px] p-[8px]">
                    <img className="h-[24px]" src="/img/icons/free-icon-direct-instagram-5883507.png"/>
                </button>
            </div>
            <div>
                <button className="h-[40px] p-[8px]">
                    <img className="h-[24px]" src="/img/icons/free-icon-saved-7324262.png"/>
                </button>
            </div>
        </section>
        <div className="text-[14px] font-bold">
            <span>좋아요 <span>137.9만</span>개</span>
        </div>
        <div className="text-[14px] my-[4px]">
            <span className="mr-[6px] font-bold">xfhif_shd_djj</span><span>우아아아</span>
        </div>

        {/* 댓글달면 게시 버튼 뜨게 수정해야함 */}
        <textarea className="text-[14px] h-[18px] focus:outline-none resize-none" placeholder="댓글 달기..."></textarea>
       </div>
    );
};

export default PostAction;