export const getHeightCSS = (inputHeight: number) => {
  if (inputHeight < 460) {
    return {
      height: inputHeight,
      project: "project-description-supershort",
      mainInfo: "main-info-text leading-5",
      mainImage: "image-visible",
    };
  }
  if (inputHeight >= 460 && inputHeight < 550) {
    return {
      height: inputHeight,
      project: "project-description-short ",
      mainInfo: "main-info-text leading-6 ",
      mainImage: "image-visible",
    };
  } else if (inputHeight >= 550 && inputHeight < 810) {
    return {
      height: inputHeight,
      project: "project-description-medium ",
      mainInfo: "main-info-text leading-6 pb-10 md:text-xl ",
      mainImage: "image-visible sm:h-72",
    };
  } else {
    return {
      height: inputHeight,
      project: "project-description-high ",
      mainInfo: "main-info-text leading-7 pb-20 text-xl md:text-2xl leading-8 ",
      mainImage: "image-visible h-80",
    };
  }
};
