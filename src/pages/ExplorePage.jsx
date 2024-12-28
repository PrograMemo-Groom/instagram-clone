import ExploreSearch from '@/components/exploreSearch/ExploreSearch.jsx';

const ExplorePage = () => {

    return (
        <div className={"explore-container"}>
            <header className={"header"}>
                <ExploreSearch />
            </header>
            <main className={"main"}>
                <div className={"main-search"}>
                    검색창
                </div>
                <div className={"main-container"}>
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
                                        } w-80 h-160 bg-gray-300`}
                                    >
                                        <img
                                            src={item.thumbnail_url}
                                            alt={`릴스 : ${index+1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                );
                            }

                            else {
                                // 게시물 렌더링
                                return (
                                    <div
                                        key={index}
                                        className="bg-gray-300 h-80 w-80"
                                    >
                                        <img
                                            src={item.media_url}
                                            alt={`게시물 : ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
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