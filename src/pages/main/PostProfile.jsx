const PostProfile = () => {
    return (
       <div className="flex flex-row justify-between">
        <div className="flex flex-row">
            <div className="h-[42px] w-[42px] bg-[#D301C5;] rounded-full  border border-[#E5E5E5]
                    flex justify-center items-center box-border mb-[2px]">
                <div className="h-[36px] w-[36px] bg-[white] rounded-full
                flex justify-center items-center box-border">
                <img className="h-[32px] w-[32px] rounded-full border border-[#E5E5E5] object-cover"
                    src="/img/pochaco.jpg" />
                </div>
            </div>

            <p>nani_seolgi_ongsim</p>
            <p> • </p>
            <p>1일</p>
        </div>
        <div>
            <p>...</p>
        </div>
       </div>
    );
};

export default PostProfile ;