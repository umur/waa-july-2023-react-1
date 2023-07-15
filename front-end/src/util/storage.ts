import { labConstants } from "./constant";

function getToken(): string | undefined {
  return localStorage.getItem(labConstants.TOKEN_KEY) ?? undefined;
}

function setToken(token: string) {
  localStorage.setItem(labConstants.TOKEN_KEY, token);
}

function clear() {
    localStorage.clear();
}

export const storageService = {
  getToken,
  setToken,
  clear
};
