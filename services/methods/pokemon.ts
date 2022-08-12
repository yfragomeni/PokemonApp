import { ApiResult } from "../../src/model/ApiResult";
import { Pokemon } from "../../src/model/Pokemon";
import api from "../api";

export const getPokemon = async () => {
    const data = api
      .get<ApiResult>(`pokemon`)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((e) => {
        console.log(e);
        return <Pokemon[]>[]
      });

      return await data
  };