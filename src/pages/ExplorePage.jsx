//import ExploreSearch from '@/components/exploreSearch/ExploreSearch.jsx';

const ExplorePage = () => {

    return (
        <div className={"explore-container w-full h-full flex flex-col align-middle justify-center"}>
            <header className="flex items-center w-full h-11 bg-gray-200 bg-opacity-50 border-b border-gray-300 md:hidden"> {/*페이지 헤더 없앤 후 fixed 추가해야함*/}
                <div className="w-64 h-9 left-5 relative bg-gray-200 bg-opacity-80 rounded-xl flex items-center">
                    <img className={"absolute left-4 h-5"} src="/img/icons/search-icon-gray.svg" alt={"돋보기"}/>
                    <input className={"w-full bg-transparent"}/>
                    <button className={"absolute right-3"}>
                        <img className={"w-4"} src="/img/icons/delete_icon.svg" alt={"x"}/>
                    </button>
                </div>
                {/*<ExploreSearch/>*/}
            </header>

            <main className={"main flex flex-col justify-center items-center"}>
                <div className={"w-full h-6"}/>
                <div className={"main-search w-full items-center flex relative md:hidden"}>
                    <input className="w-full h-10 bg-gray-200 bg-opacity-70 rounded-xl mx-2"/>
                    <img className={"absolute left-7 h-5"} src="/img/icons/search-icon-gray.svg" alt={"돋보기"}/>
                    <button className={"absolute right-7"}>
                        <img className={"w-4"} src="/img/icons/delete_icon.svg" alt={"x"}/>
                    </button>
                    {/*<ExploreSearch/>*/}
                </div>

                <div className={"main-container w-full  max-w-5xl inline-block pt-6 px-0 md:px-7"}>
                    <div className="grid grid-cols-3 gap-1">
                        {data.map((item, index) => {
                            const setIndex = Math.floor(index/5 + 1); // 세트 번호 (5개의 아이템마다 1세트)
                            const isReelsRight = setIndex % 2 === 1; // 홀수번째 세트: 릴스가 오른쪽, 짝수번째 세트 : 릴스가 왼쪽

                            if (item.media_type === "VIDEO") {
                                // 릴스 렌더링
                                return (
                                    <div
                                        key={index}
                                        className={`col-span-1 row-span-2 ${
                                            isReelsRight ? "col-start-3" : "col-start-1"
                                        } w-full h-auto bg-gray-300 relative group`}
                                    >
                                        <img
                                            src={item.thumbnail_url}
                                            alt={`릴스 : ${index+1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* 호버링 */}
                                        <div className="absolute inset-0
                                        bg-black bg-opacity-50
                                        flex items-center justify-center
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <img className="h-5 pr-1.5" src="/img/icons/comment_icon_white.svg" alt="댓글"/>
                                            <span className="text-white text-lg font-bold">
                                                {item.comments_count}
                                            </span>
                                        </div>
                                    </div>
                                );
                            }

                            else {
                                // 게시물 렌더링
                                return (
                                    <div
                                        key={index}
                                        className="bg-gray-300 h-auto w-full aspect-square relative group"
                                    >
                                        <img
                                            src={item.media_url}
                                            alt={`게시물 : ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0
                                        bg-black bg-opacity-50
                                        flex items-center justify-center
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <img className="h-5 pr-1.5" src="/img/icons/comment_icon_white.svg" alt="댓글"/>
                                            <span className="text-white text-lg font-bold">
                                                {item.comments_count}
                                            </span>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExplorePage;


//세트 2개의 데이터 순서 : 게시글 2 > 릴스 1 > 게시글 2 > 릴스 1 > 게시글 4 > ... -> 2세트씩 반복

const data = [
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/postImg2.jpg",
        "thumbnail_url": null,
        "comments_count": 108
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/videoPostImg.jpg",
        "thumbnail_url": null,
        "comments_count": 32
    },
    {
        "media_type": "VIDEO",
        //"media_url": "https://example.com/video.mp4",
        "thumbnail_url": "/assets/image/reelsImg.jpg",
        "comments_count": 5
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/videoPostImg.jpg",
        "thumbnail_url": null,
        "comments_count": 32
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/postImg2.jpg",
        "thumbnail_url": null,
        "comments_count": 108
    },
    {
        "media_type": "VIDEO",
        //"media_url": "https://example.com/video.mp4",
        "thumbnail_url": "/assets/image/reelsImg.jpg",
        "comments_count": 5
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/postImg2.jpg",
        "thumbnail_url": null,
        "comments_count": 108
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/videoPostImg.jpg",
        "thumbnail_url": null,
        "comments_count": 32
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/videoPostImg.jpg",
        "thumbnail_url": null,
        "comments_count": 32
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/postImg2.jpg",
        "thumbnail_url": null,
        "comments_count": 108
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/postImg2.jpg",
        "thumbnail_url": null,
        "comments_count": 108
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/videoPostImg.jpg",
        "thumbnail_url": null,
        "comments_count": 32
    },
    {
        "media_type": "VIDEO",
        //"media_url": "https://example.com/video.mp4",
        "thumbnail_url": "/assets/image/reelsImg.jpg",
        "comments_count": 5
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/videoPostImg.jpg",
        "thumbnail_url": null,
        "comments_count": 32
    },
    {
        "media_type": "IMAGE",
        "media_url": "/assets/image/postImg2.jpg",
        "thumbnail_url": null,
        "comments_count": 108
    },
]