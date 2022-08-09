import axios from "axios";

export const getRaindrops = async () => {
  const { data: raindrops } = await axios.get(
    process.env.RAINDROP_PERSONAL_WEBSITE_COLLECTION_HIT_ENDPOINT,
    {
      headers: {
        Authorization: process.env.RAINDROP_ACCESS_TOKEN,
      },
    }
  );
  return raindrops.items;
};
