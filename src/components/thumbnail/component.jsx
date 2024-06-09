import React from 'react';
import Image from "next/image";

export default function ThumbnailComponent({ src, alt, onClick, isActive }) {
    return (
        <div
            className={`relative w-24 h-24 cursor-pointer ${isActive ? 'border-2 border-blue-500' : ''}`}
            onClick={onClick}
        >
            <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-lg"/>
        </div>
    );
}
