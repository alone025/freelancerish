import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const HomeRotateGallery = () => {
  return (
    <div className="homeRotateGalery">
      <div className="homeRotateGalery__info">
        <h2 className="homeRotateGalery__infoTitle">
          지붕공사의 달인 청주지붕공사 입니다.
        </h2>
        <p className="homeRotateGalery__infoSubTitle">
          지붕개량/칼라강판/기와/슁글/징크 시공전문
        </p>

        <p className="homeRotateGalery__infoText1">
          신속!정확!확실한 서비스! 청주지붕공사에 맡겨주세요 고객만족 100%를
          약속드립니다. 믿고 맡길 수 있는 신뢰도 최고! 청주 지붕공사를
          찾아주셔서 감사합니다. 우수한 전문기술력으로 확실한 서비스를
          책임집니다.
        </p>

        <p className="homeRotateGalery__infoText2">
          저희 업체는 전문장비와 전문인력을 보유하고 있으며, 최상의 서비스로
          고객 여러분의 신뢰에 보답하고자 최선을 다하고 있습니다. 또한 풍부한
          경험과 축적된 기술을 바탕으로 고객님들에게 최고의 만족도를 제공하고자
          최선을 다하고 있습니다. 항상 고객을 먼저 생각하며, 저렴한 가격에
          친절한 서비스로 고객님들께 다가설 것을 약속드립니다. 또한 시공 후에도
          A/S 처리 등 철저한 신뢰와 믿음을 드릴 것이며, 보다 지붕신기술을
          근간으로 계속하여 노력해 나갈 것을 약속드립니다. 감사합니다.
        </p>

        <button className="homeRotateGalery__infoBtn">
          <p>
            <IoArrowForwardCircleOutline />
          </p>
          <p>더보기</p>
        </button>
      </div>

      <div className="homeRotateGalery__info2">
        <p className="homeRotateGalery__info2Text">시공사례</p>

        <button className="homeRotateGalery__infoBtn">
          <p>
            <IoArrowForwardCircleOutline />
          </p>
          <p>더보기</p>
        </button>
      </div>

      <div className="homeRotateGalery__back" />
      <div className="homeRotateGalery__topCenter" />
      <div className="homeRotateGalery__rightTop" />
      <div className="homeRotateGalery__leftTop" />
      <div className="homeRotateGalery__center" />
      <div className="homeRotateGalery__img1" />
      <div className="homeRotateGalery__img2" />
      <div className="homeRotateGalery__img3" />

      <div className="homeRotateGalery__topRec" />
    </div>
  );
};

export default HomeRotateGallery;
