import env from "@/lib/env";
import type { IGetImgResponseType } from "@/types";
import { GET_IMG_BASE_URL, IMAGE_GEN_OPTIONS } from "@/lib/constants";

export async function textToImage(prompt: string, height: number, width: number) {
  const url = `${GET_IMG_BASE_URL}/stable-diffusion-xl/text-to-image`;

  const imageGenOptions = {
    ...IMAGE_GEN_OPTIONS,
    width: width,
    height: height,
    prompt
  };

  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json', Authorization: `Bearer ${env.GETIMAGE_AI_TOKEN}` },
    body: JSON.stringify(imageGenOptions)
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data as IGetImgResponseType;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function imageToImage(prompt: string, image: string) {
  const url = `${GET_IMG_BASE_URL}/stable-diffusion-xl/image-to-image`;

  const imageGenOptions = {
    ...IMAGE_GEN_OPTIONS,
    prompt: 'A serene, whimsical landscape in the style of Studio Ghibli, lush green forests with softly glowing sunlight filtering through the trees, a small cottage with moss-covered roof nestled among giant mushrooms, delicate hand-painted textures, vibrant yet soft color palette, dreamy atmosphere, anime-style character with expressive eyes exploring the scenery, cinematic composition, highly detailed, fantasy-inspired environment, warm lighting, magical realism',
    image,
  };

  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json', Authorization: `Bearer ${env.GETIMAGE_AI_TOKEN}` },
    body: JSON.stringify(imageGenOptions)
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data as IGetImgResponseType;
  } catch (error) {
    console.log(error);
  }

  return null;
}