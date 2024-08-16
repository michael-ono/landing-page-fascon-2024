import React from 'react';

const Footer2 = () => {
    return (
        <footer className="bg-black text-white py-2 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto text-center text-[0.85rem]">
                <p>FASCON &copy; {new Date().getFullYear()}</p>
                <p><i>All rights reserved</i> 🎓🕜🌐</p>
            </div>
        </footer>
    );
};

export default Footer2;