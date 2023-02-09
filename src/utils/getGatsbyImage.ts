import { getImage } from "gatsby-plugin-image";
import { ImageType } from "../context/types.d";
export const getGatsbyImage = (imageName: string, allImages: ImageType[]) => {
  if (allImages.length < 1) return;
  const findImage = allImages.find((image: ImageType) => {
    return image.original.src.includes(imageName);
  });
  if (findImage) {
    return getImage(findImage.gatsbyImageData);
  }
};
