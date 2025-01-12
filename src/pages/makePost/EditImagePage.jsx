import {useState} from "react";

const EditImagePage = () => {

    const [values, setValues] = useState({
        밝기: 0,
        대비: 0,
        흐리게: 0,
        채도: 0,
        온도: 0,
        배경흐리게: 0,
    });

    const handleChange = (attribute, value) => {
        setValues((prev) => ({
            ...prev,
            [attribute]: value,
        }));
    };

    return (
        <div className="w-full grid grid-cols-1 gap-6 p-4">
            {Object.keys(values).map((attribute, index) => (
                <div key={index} className="flex flex-col items-start">
                    {/* 속성 이름 */}
                    <div className="flex w-full items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{attribute}</span>
                        {/* 현재 값 */}
                        <span className="text-sm font-semibold text-gray-900">
              {values[attribute]}
            </span>
                    </div>
                    {/* 막대기 */}
                    <input
                        type="range"
                        min="-5"
                        max="5"
                        value={values[attribute]}
                        step="1"
                        onChange={(e) => handleChange(attribute, e.target.value)}
                        className="w-full h-1 bg-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                    />
                </div>
            ))}
        </div>
    );
};

export default EditImagePage;