import { styled } from "styled-components";
import animeService from "../../services/animeService";
import { error } from "console";
import { useEffect } from "react";
import { Dispatch } from "redux";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./homePageSlice";
import { useAppDispatch } from "../../hooks";
import { HotAnime } from "./hotAnime";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%:
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

export function HomePage(props: IHomePageProps) {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0, 21).catch((err) => {
      console.log("Error", err);
    });

    console.log("Anime page:", animePage);
    if (animePage) setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
  }, []);

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  );
}
