// import React from 'react';

import UserSection from "@/components/UserSection.jsx";
import SavedStories from "@/components/SavedStories.jsx";

const ProfilePage = () => {
    return (
        <div className="m-16 p-4">
            <UserSection/>
            <SavedStories/>

        </div>
    );
};

export default ProfilePage;