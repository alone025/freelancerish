import React from 'react';
import Image from "next/image";

export default function ImageCardComponent({src, title}) {
    return (
        <div className={''}>
            <Image
                src={src}
                alt={title}
                className={'lg:w-[262px] h-[332px] object-cover object-center'}
                width={262}
                height={332}
            />
        </div>
    );
}