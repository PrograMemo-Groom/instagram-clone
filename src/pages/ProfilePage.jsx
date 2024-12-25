// import React from 'react';

import UserSection from "@/components/userSection/UserSection.jsx";
import SavedStories from "@/components/savedStories/SavedStories.jsx";
import Posts from "@/components/posts/Posts.jsx";

const ProfilePage = () => {
    return (
        <div className="bg-white dark:bg-black m-auto p-4 w-[935px]">
            <UserSection/>
            <SavedStories/>
            <Posts/>
        </div>
    );
};

export default ProfilePage;