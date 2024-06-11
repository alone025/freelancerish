import {HomeRotate, MainBannerSection} from "@/src/components";

export default function Home() {
  return (
    <div className="container">
      <main>
        <MainBannerSection
          title={"청주지붕공사"}
          text={"30년 경력의 지붕장인 청주지붕공사 입니다."}
          desc={"지붕개량/칼라강판/기와/슁글/징크 시공전문"}
          img="/images/mainBanner.png"
        />
      </main>
      <HomeRotate/>
    </div>
  );
}
