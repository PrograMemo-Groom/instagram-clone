// import React from 'react';

import UserSection from "@/components/userSection/UserSection.jsx";
import SavedStories from "@/components/savedStories/SavedStories.jsx";
import Posts from "@/components/posts/Posts.jsx";
import PostModal from "@/pages/PostModal.jsx";

const ProfilePage = () => {
    return (
        <div className="bg-white dark:bg-black m-auto p-4 w-[935px] min-w-96">
            <UserSection/>
            <SavedStories/>
            <Posts/>
            <PostModal/>
        </div>
    );
};

export default ProfilePage;