import MainSectionBanner from "@/components/MainSectionBanner";
import ImageCardComponent from "@/src/components/image-card/component";
import {useState} from "react";
import ThumbnailComponent from "@/src/components/thumbnail/component";
import ModalComponent from "@/src/components/modal/component";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const images = [
        {
            src: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
            alt: 'Image 1',
            title: 'Image 1 Title', description: 'Description for Image 1'
        },
        {
            src: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
            alt: 'Image 2',
            title: 'Image 1 Title', description: 'Description for Image 1'
        },
        {
            src: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
            alt: 'Image 3',
            title: 'Image 1 Title', description: 'Description for Image 1'
        },
        {
            src: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
            alt: 'Image 4',
            title: 'Image 1 Title', description: 'Description for Image 1'
        },
    ];

    return (
        <div className="container">
            <main>
                <MainSectionBanner
                    title={"청주지붕공사"}
                    text={"30년 경력의 지붕장인 청주지붕공사 입니다."}
                    desc={"지붕개량/칼라강판/기와/슁글/징크 시공전문"}
                    img="/images/mainBanner.png"
                />
            </main>
                <div className={'grid grid-cols-3'}>
                    {images.map((image, index) => (
                        <ImageCardComponent
                            key={index}
                            src={image.src}
                            title={'이미지 제목/설명'}
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>
                {isModalOpen &&
                    <ModalComponent images={images} initialIndex={selectedImageIndex} onClose={closeModal}/>}
        </div>
    );
}
