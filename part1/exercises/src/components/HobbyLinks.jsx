import React from "react";
import './HobbyLinks.module.css';

export default function HobbyLinks() {
    
    let hobbyLinks = [
        { url: "https://www.goodreads.com", label: "Good Reads" },
        { url: "https://www.photographyblog.com", label: "Photography Blog" },
        { url: "https://www.cookinglight.com", label: "Cooking Light" },
    ];

    return (
        <div>
            <h2>Hobby Links</h2>
            <ul className="hobby-links">
                {hobbyLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
