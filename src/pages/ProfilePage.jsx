// import React from 'react';

import UserSection from "@/components/userSection/UserSection.jsx";
import SavedStories from "@/components/savedStories/SavedStories.jsx";
import Posts from "@/components/posts/Posts.jsx";

const ProfilePage = () => {
    return (
        <div className="m-16 p-4 w-[935px]">
            <UserSection/>
            <SavedStories/>
            <Posts/>
        </div>
    );
};

export default ProfilePage;