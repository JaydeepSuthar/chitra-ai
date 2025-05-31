export type IImageModel = 'text-to-image' | 'image-to-image';

export type IGetImgResponseType = {
  url: string;
  seed: number;
  cost: number;
}