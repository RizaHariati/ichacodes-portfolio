export const getHeightCSS = (inputHeight: number) => {
  if (inputHeight < 460) {
    return {
      height: inputHeight,
      project: "project-description-supershort",
      mainInfo: "main-info-text leading-5",
      mainImage: "image-visible",
    };
  }
  if (inputHeight >= 460 && inputHeight < 680) {
    return {
      height: inputHeight,
      project: "project-description-short",
      mainInfo: "main-info-text leading-5 md:leading-7",
      mainImage: "image-visible",
    };
  } else if (inputHeight >= 680 && inputHeight < 810) {
    return {
      height: inputHeight,
      project: "project-description-medium",
      mainInfo: "main-info-text leading-5 pb-10  md:text-xl md:leading-7 ",
      mainImage: "image-visible sm:h-72",
    };
  } else {
    return {
      height: inputHeight,
      project: "project-description-high ",
      mainInfo:
        "main-info-text leading-7 pb-20 text-lg md:text-xl sm:leading-8 2xl:leading-9",
      mainImage: "image-visible h-80",
    };
  }
};
