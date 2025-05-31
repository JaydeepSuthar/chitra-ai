import env from "@/lib/env";
import imageToBase64 from "./image-to-base64";
import type { IGetImgResponseType } from "@/types";

const commonOptions = {
  model: "stable-diffusion-xl-v1-0",
  negative_prompt: "Disfigured, cartoon, blurry, nude",
  steps: 40,
  guidance: 7.5,
  output_format: 'jpeg',
  scheduler: 'euler',
  response_format: 'url'
};

export async function textToImage(prompt: string, height: number, width: number) {
  const url = 'https://api.getimg.ai/v1/stable-diffusion-xl/text-to-image';

  const imageGenOptions = {
    ...commonOptions,
    width: width ?? 768,
    height: height ?? 768,
    prompt
  };

  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json', Authorization: `Bearer ${env.GETIMAGE_AI_TOKEN}` },
    body: JSON.stringify(imageGenOptions)
  };

  console.log(options.headers)

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data as IGetImgResponseType;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function imageToImage(prompt: string, image: string, height: number, width: number) {
  const url = 'https://api.getimg.ai/v1/stable-diffusion-xl/image-to-image';

  const imageGenOptions = {
    ...commonOptions,
    // width: width ?? 768,
    // height: height ?? 768,
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