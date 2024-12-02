import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <div className="main-section">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder 1"
                    className="main-image"
                />
                <p>Image 1 Description</p>
            </div>
            <div className="main-section">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder 2"
                    className="main-image"
                />
                <p>Image 2 Description</p>
            </div>
            <div className="main-section">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder 3"
                    className="main-image"
                />
                <p>Image 3 Description</p>
            </div>
        </main>
    );
};

export default Main;
