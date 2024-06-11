import {MainBannerSection, ContactSection} from "@/src/components";

export default function AboutController() {
  return (
    <div className="container">
      <div>
        <MainBannerSection
          title={"청주지붕공사 "}
          text={"30년 경력의 지붕장인 청주지붕공사 입니다."}
          desc={"지붕개량/칼라강판/기와/슁글/징크 시공전문"}
          img="/images/mainBanner2.png"
        />

        <div className="about__info">
          <div className="about__infoRec"></div>

          <h2 className="about__infoTitle">
            지붕공사의 달인 청주지붕공사 입니다.
          </h2>
          <p className="about__infoSubTitle">업체소개 </p>

          <p className="about__infoText1 about__infoText">
            믿고 맡길 수 있는 신뢰도 최고! 청주 지붕공사를 찾아주셔서
            감사합니다.
          </p>

          <p className="about__infoText2 about__infoText">
            OO지붕공사는 공장직영 시스템으로 운영되고 있습니다. 공장직영의
            포스코 정품자재만을 사용하여 거품을뺀 저렴한 가격에 시공 해드립니다.
          </p>

          <p className="about__infoText3 about__infoText">
            우수한 전문기술력으로 확실한 서비스를 책임집니다.
          </p>

          <p className="about__infoText4 about__infoText">
            저희 업체는 전문장비와 전문인력을 보유하고 있으며, 최상의 서비스로
            고객 여러분의 신뢰에 보답하고자 최선을 다하고 있습니다. 또한 풍부한
            경험과 축적된 기술을 바탕으로 고객님들에게 최고의 만족도를
            제공하고자 최선을 다하고 있습니다.
          </p>

          <p className="about__infoText5 about__infoText">
            항상 고객을 먼저 생각하며, 저렴한 가격에 친절한 서비스로 고객님들께
            다가설 것을 약속드립니다. 또한 시공 후에도 A/S 처리 등 철저한 신뢰와
            믿음을 드릴 것이며, 보다 지붕신기술을 근간으로 계속하여 노력해 나갈
            것을 약속드립니다.
          </p>

          <p className="about__infoText5 about__infoText">감사합니다.</p>
        </div>

        <div className="about__map">
          <div className="about__mapImg"></div>

          <div className="about__mapRightImg"></div>

          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur. Placerat in iaculis nisl
            posuere egestas semper pulvinar sodales. Tristique est lacus blandit
            nulla eget sapien urna elementum.
          </p>

          <p className="about__text">
            <span className="about__textSpan">견적문의전화</span> :
            010-7615-6737
          </p>
        </div>

        <ContactSection />
      </div>
    </div>
  );
};
