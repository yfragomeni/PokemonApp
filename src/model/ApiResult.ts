import { Pokemon } from "./Pokemon";

export type ApiResult = {
    count: number;
    next?: string;
    previous?: string;
    results: Pokemon[];
  };