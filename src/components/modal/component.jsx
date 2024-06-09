import React, {useState} from 'react';
import ThumbnailComponent from "@/src/components/thumbnail/component";
import Image from "next/image";

export default function ModalComponent({images, initialIndex, onClose}) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    const handleNext = () => setCurrentIndex((currentIndex + 1) % images.length);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative bg-white p-4 max-w-5xl w-full">
                <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                    닫기 X
                </button>
                <div className={'flex mb-4'}>
                    <div className="relative w-full h-[500px] md:h-96">
                        <Image src={images[currentIndex].src} alt={images[currentIndex].alt} layout="fill"
                               objectFit="cover"/>
                    </div>
                    <div className={'w-auto h-auto flex flex-col justify-between'}>
                        <div>
                            <h3>{images[currentIndex].title}</h3>
                            <p>{images[currentIndex].description}</p>
                        </div>
                        <div className="flex space-x-2 overflow-x-auto">
                            {images.map((image, index) => (
                                <ThumbnailComponent
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    onClick={() => setCurrentIndex(index)}
                                    isActive={index === currentIndex}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <button onClick={handlePrev} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        &lt;
                    </button>
                    <button onClick={handleNext} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
