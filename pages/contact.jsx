import Link from "next/link";
import MainSectionBanner from "@/components/MainSectionBanner";
import {LuUploadCloud} from "react-icons/lu";

const Contact = () => {
    return (
        <div className={'relative overflow-hidden'}>
            <div className="container">
                <main>
                    <MainSectionBanner
                        title={'청주지붕공사'}
                        text={'30년 경력의 지붕장인 청주지붕공사 입니다.'}
                        desc={'지붕개량/칼라강판/기와/슁글/징크 시공전문'}
                        img="/images/mainBanner.png"
                    />
                </main>

                <div className={'mt-20 mb-10'}>
                    <h1 className={'text-2xl font-bold text-center'}>문의하기선택됨 </h1>
                    <p className={'text-xl font-normal text-center'}>나의 문의/신청 내역</p>
                </div>
                <div className="relative w-full h-auto">
                    <form className={'flex flex-col px-2'}>
                        <label htmlFor="title" className={'text-sm font-bold mb-2'}>제목</label>
                        <input className={'px-8 py-4 w-full md:w-2/3'} id="title" type="text" name="title"/>

                        <label htmlFor="contact" className={'text-sm font-bold mt-6 mb-2'}>연락처</label>
                        <input id="contact" type="text" className={'px-8 py-4 w-full md:w-96'} name="contact"/>

                        <label htmlFor="mail" className={'text-sm font-bold mt-6 mb-2'}>이메일</label>
                        <input id="mail" type="text" className={'px-8 py-4 w-full md:w-96'} name="mail"/>

                        <label htmlFor="short-description" className={'text-sm font-bold mt-6 mb-2'}>단문 입력</label>
                        <input id="short-description" type="text" className={'px-8 py-4 w-full md:w-2/3'}
                               name="short-description"/>

                        <label htmlFor="long-description" className={'text-sm font-bold mt-6 mb-2'}>장문 입력</label>
                        <input id="long-description" type="textarea" className={'px-8 py-4 w-full md:w-2/3'}
                               name="long-description"/>

                        <div
                            className={'w-80 h-48 bg-gray-200 flex flex-col justify-center items-center mt-6 cursor-pointer'}>
                            <LuUploadCloud size={32}/>
                            <span className={'text-base'}>사진등록</span>
                        </div>

                        <label htmlFor="select-list" className={'text-sm font-bold mt-6 mb-2'}>목록 선택</label>
                        <select className={'px-8 py-4 w-full md:w-96'} name="select-list" id="select-list">
                            <option value="lorem">Lorem ipsum</option>
                            <option value="lorem1">Lorem ipsum</option>
                        </select>

                        <label htmlFor="short-description"
                               className={'text-base font-bold mt-6 flex items-center gap-2'}>
                            <input type="checkbox" className={'w-12 h-12'}/>
                            개인정보 수집 및 이용에 동의합니다.
                        </label>

                        <div className={'px-14'}>
                            <a href="#" className={'underline text-base font-normal'}>내용보기</a>
                        </div>

                        <div className={'w-full flex items-center justify-end mt-6 mb-16 gap-8'}>
                            <button className={'py-2 px-4 border border-[#0D9488] text-[#0D9488] w-52 rounded'}>취소</button>
                            <button className={'py-2 px-4 border-none bg-[#0D9488] text-white w-52 rounded'}>등록</button>
                        </div>
                    </form>
                </div>
            </div>
            <svg className={'absolute -bottom-96 -z-10'} xmlns="http://www.w3.org/2000/svg" width="1280"
                 height="2219" viewBox="0 0 1280 2219" fill="none">
                <path d="M-947.225 1038.5L394.551 -0.00198519L1736.33 1341.77L-37 2227L-947.225 1038.5Z"
                      fill="#FAFAFA"/>
            </svg>
        </div>
    );
};

export default Contact;
