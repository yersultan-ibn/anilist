import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createSlice } from "@reduxjs/toolkit";

export const apolloCLient = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
}); 
