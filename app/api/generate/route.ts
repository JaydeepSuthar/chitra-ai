import { imageToImage, textToImage } from "@/lib/generate-image";
import imageToBase64 from "@/lib/image-to-base64";
import { ratelimitByIp } from "@/lib/rate-limiter";
import { generateImageSchema } from "@/lib/validator";

export async function GET(req: Request) {
  const isRatelimitExceed = await ratelimitByIp();

  if (isRatelimitExceed)
    return Response.json({ error: "Ratelimit Exceed" }, { status: 429 });

  return Response.json({ message: 'Welcome to Chitra AI' }, { status: 200 });
}

export async function POST(req: Request) {
  const rawData = await req.json();
  const { success, data, error } = generateImageSchema.safeParse(rawData);

  if (!success)
    return Response.json({ message: 'Validation failed' }, { status: 422 });

  // const isRatelimitExceed = await ratelimitByIp();

  // if (isRatelimitExceed)
  //   return Response.json({ error: "Ratelimit Exceed" }, { status: 429 });

  try {
    // const base64 = await imageToBase64(`${process.cwd()}/public/img.jpg`);

    // if (!base64)
    //   throw new Error("base64 not generated");

    const imgResponse = await textToImage(data.prompt);
    // const data = await imageToImage('a man standing on moon holding indian flag', base64);
    // console.dir(data, { depth: Number.MAX_SAFE_INTEGER });

    return Response.json({ message: 'Your Image is generated', data: imgResponse }, { status: 200 });
  } catch (error) {
    console.log("error occur");
  }

  return Response.json({ message: 'Welcome to Chitra AI' }, { status: 200 });
}