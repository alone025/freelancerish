import React, {useState} from 'react';
import ThumbnailComponent from "@/src/components/thumbnail/component";
import Image from "next/image";

export default function ModalComponent({images, initialIndex, onClose}) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handlePrev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    const handleNext = () => setCurrentIndex((currentIndex + 1) % images.length);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative bg-white px-3 pt-16 max-w-6xl w-full flex justify-center ">
                <div className={'w-full'}>
                    <div className={'w-full flex justify-end absolute top-0 right-0'}>
                        <button onClick={onClose}
                                className="w-28 h-11 flex items-center justify-center text-gray-600 hover:text-gray-800 bg-gray-200">
                            닫기 X
                        </button>
                    </div>
                    <div className={'flex w-full gap-12 mb-4'}>
                        <div className="relative w-full lg:w-[592px] h-72 lg:h-[577px] md:h-96">
                            <Image src={images[currentIndex].src} alt={images[currentIndex].alt} layout="fill"
                                   objectFit="cover"/>
                        </div>
                        <div className={'w-1/2 h-auto flex flex-col justify-between'}>
                            <div>
                                <h3 className={'text-2xl font-bold'}>{images[currentIndex].title}</h3>
                                <p className={'text-base font-normal'}>{images[currentIndex].description}</p>
                            </div>
                            <div className="flex w-full overflow-hidden overflow-x-scroll gap-4">
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
                    <div className={'flex relative h-14'}>
                        <button className={'absolute left-0 bottom-0'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="590" height="54" viewBox="0 0 590 54"
                                 fill="none">
                                <path d="M0 0H590L562.936 54H0V0Z" fill="#D4D4D4"/>
                            </svg>
                        </button>
                        <button className={'absolute right-0 bottom-0'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="589" height="54" viewBox="0 0 589 54"
                                 fill="none">
                                <path d="M589 54H0L27.0183 -3.8147e-06H589V54Z" fill="#A3A3A3"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
