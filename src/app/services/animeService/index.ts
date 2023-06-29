import { apolloCLient } from "../../graphql";
import { GetAnimePage } from "./__generated__/GetAnimePage";
import { GET_ANIME_PAGE } from "./queries";

class AnimeService {
  async getAnimePage(page: Number, perPage = 5): Promise<GetAnimePage["Page"]> {
    try {
      const response = await apolloCLient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage },
      });

      if (!response || !response.data) {
        throw new Error("Cannot get anime list!");
      }

      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default new AnimeService();
