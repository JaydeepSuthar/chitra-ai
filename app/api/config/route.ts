export async function GET(_: Request) {
    try {
        const imageStyles = [
            "Ghibli",
            "Anime",
            "Realistic",
            "Cyberpunk",
            "Pixel Art",
            "Watercolor",
            "3D Render",
            "Line Art",
            "Low Poly",
            "Oil Painting",
        ];

        const aspectRatios = [
            { ratio: "1:1", resolution: "1024x1024" },
            { ratio: "3:4", resolution: "768x1024" },
            { ratio: "4:3", resolution: "1024x768" },
            { ratio: "16:9", resolution: "1280x720" },
            { ratio: "9:16", resolution: "720x1280" },
        ];

        return Response.json(
            { data: { imageStyles, aspectRatios } },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching configuration:", error);
        return Response.json(
            { message: "Unable to process request at the moment." },
            { status: 400 }
        );
    }
}
