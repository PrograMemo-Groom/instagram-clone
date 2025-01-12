const Filter = () => {
    const filterData = [{id: 1, image: "/img/pochaco.jpg", description: "필터 1"}, {
        id: 2, image: "/img/pochaco.jpg", description: "필터 2"
    }, {id: 3, image: "/img/pochaco.jpg", description: "필터 3"}, {
        id: 4, image: "/img/pochaco.jpg", description: "필터 4"
    }, {id: 5, image: "/img/pochaco.jpg", description: "필터 5"}, {
        id: 6, image: "/img/pochaco.jpg", description: "필터 6"
    },];

    return (
        <div className="w-full grid grid-cols-3 gap-4 p-2">
            {filterData.map(item => (<div key={item.id} className="flex flex-col items-center">
                <img
                    src={item.image}
                    alt={item.description}
                    className="w-24 h-24 object-contain mb-2 border-2"
                />
                <p className="text-black">{item.description}</p>
            </div>))}
        </div>);
};

export default Filter;