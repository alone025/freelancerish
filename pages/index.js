import ContactSection from "@/components/ContactSection";
import MainSectionBanner from "@/components/MainSectionBanner";
import ImageCardComponent from "@/src/components/image-card/component";

export default function Home() {
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

      {/* <div className={"grid grid-cols-3"}>
        <ImageCardComponent
          src={
            "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
          }
          title={"이미지 제목/설명"}
        />
      </div> */}
      <ContactSection />
    </div>
  );
}
